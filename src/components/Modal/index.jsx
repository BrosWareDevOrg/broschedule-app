'use client';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Modal = ({
  sections = [{ title: 'Modal Title', content: <p>First Child</p> }],
  children,
}) => {
  const router = useRouter();
  const modalBackground = useRef(null);
  const modalContent = useRef(null);

  useEffect(() => {
    const handleEscKeyEvent = (e) => {
      //Function to handle 'Escape' keypress event
      (e.key === 'Escape' || e.key === 'Esc') && router.back();
    };
    //Adding keypress event
    document.addEventListener('keyup', handleEscKeyEvent);
    return () => {
      //Removing 'Escape' keypress event
      document.removeEventListener('keyup', handleEscKeyEvent);
    };
  });

  const addClickEventListener = () => {
    modalBackground.current &&
      modalBackground.current.addEventListener(
        'click',
        handleClickToCloseModal
      );
  };

  useEffect(() => {
    addClickEventListener();
    return () => {
      modalBackground.current &&
        modalBackground.current.removeEventListener(
          'click',
          handleClickToCloseModal
        );
    };
  }, [modalBackground.current]);

  const handleClickToCloseModal = (e) => {
    //Function to handle click on background rect event
    const { clientHeight: contentHeight, clientWidth: contentWidth } =
      modalContent.current;
    const { clientX: x, clientY: y } = e;
    const { innerHeight: totalHeight, innerWidth: totalWidth } = window;

    const paddingX = (totalWidth - contentWidth) / 2;
    const paddingY = (totalHeight - contentHeight) / 2;

    if (
      !(x > paddingX && x < paddingX + contentWidth) ||
      !(y > paddingY && y < paddingY + contentHeight)
    ) {
      router.back();
    }
  };

  const styles = {
    xmark: 'p-1 w-9 h-9 cursor-pointer rounded-md hover:bg-primary-200',
    container:
      'fixed z-[10000] top-0 left-0 w-screen h-screen grid place-items-center bg-black-500 backdrop-blur-sm cursor-default',
    content: {
      display: 'relative flex flex-col p-8 gap-8',
      font: 'font-semibold text-primary-700 text-2xl sm:text-4xl',
      background:
        'rounded-lg bg-[url("/assets/images/white-circle-bg.jpg")] bg-cover bg-no-repeat',
    },
    modalTitleDiv:
      'w-full flex gap-5 items-center justify-between p-4 border-b-2 border-primary-500',
  };

  return (
    <>
      <div ref={modalBackground} className={styles.container}>
        <main
          ref={modalContent}
          className={`${styles.content.display} ${styles.content.font} ${styles.content.background}`}
        >
          {sections?.map((section, index) => {
            return (
              <section aria-label={`section ${section.title}`} key={index} className="flex flex-col gap-6">
                <div
                  className={styles.modalTitleDiv}
                >
                  <h3>{section.title || 'Modal Title'}</h3>
                  {index === 0 && (
                    <Image
                      alt="close modal"
                      src="/assets/icons/xmark.svg"
                      width={50}
                      height={50}
                      className={styles.xmark}
                      onClick={() => router.back()}
                    />
                  )}
                </div>
                <div className="basis-full">{section.content}</div>
              </section>
            );
          })}
          {children}
        </main>
      </div>
    </>
  );
};

Modal.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  children: PropTypes.node,
};

export default Modal;

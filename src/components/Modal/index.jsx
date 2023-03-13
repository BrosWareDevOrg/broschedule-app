import { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalState } from '../../redux/global/actions';

const Modal = ({
  sections = [{ title: 'Modal Title', content: <p>First Child</p> }],
}) => {
  const { isModalActive } = useSelector((store) => store.global);
  const dispatch = useDispatch();

  const handleEscKeyEvent = (e) => {
    (e.key === 'Escape' || e.key === 'Esc') && dispatch(setModalState(false));
  };

  useEffect(() => {
    document.addEventListener('keyup', handleEscKeyEvent);
    return () => {
      document.removeEventListener('keyup', handleEscKeyEvent);
    };
  }, []);

  const styles = {
    xmark: 'p-1 w-9 h-9 cursor-pointer rounded-md hover:bg-primary-200',
    container:
      'fixed top-0 left-0 w-screen h-screen grid place-items-center bg-black-500 backdrop-blur-sm cursor-default',
    content: {
      display: 'relative flex flex-col p-8 gap-8',
      font: 'font-semibold text-primary-700 text-2xl sm:text-4xl',
      background:
        'rounded-lg bg-[url("/assets/images/white-circle-bg.jpg")] bg-cover bg-no-repeat',
    },
    modalTitleDiv:
      'w-full flex flex-wrap gap-5 items-center justify-between p-4 border-b-2 border-primary-500',
  };

  return (
    <Suspense fallback={<div>Loading. . .</div>}>
      {!isModalActive ? null : (
        <div className={styles.container}>
          <div
            className={`${styles.content.display} ${styles.content.font} ${styles.content.background}`}
          >
            {sections?.map((section, index) => {
              return (
                <>
                  <div
                    key={index}
                    aria-label={section.title}
                    className={styles.modalTitleDiv}
                  >
                    <h3>{section.title || 'Modal Title'}</h3>
                    {index === 0 && (
                      <img
                        src="/assets/icons/xmark.svg"
                        className={styles.xmark}
                        onClick={() => dispatch(setModalState(false))}
                      />
                    )}
                  </div>
                  <div className="basis-full">{section.content}</div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </Suspense>
  );
};

Modal.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default Modal;

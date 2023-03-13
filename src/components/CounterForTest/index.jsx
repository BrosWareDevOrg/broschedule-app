import { lazy } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setModalState } from '../../redux/global/actions';
const Modal = lazy(() => import('../Modal'));
const SettingsBlock = lazy(() => import('../SettingsBlock'));

const CounterForTest = () => {
  const dispatch = useDispatch();

  const sections = [
    {
      title: 'Account',
      content: (
        <SettingsBlock icon="dog" isBoolean={false}>
          Personal Info
        </SettingsBlock>
      ),
    },
    {
      title: 'Settings',
      content: (
        <>
          <SettingsBlock icon="alert">Notifications</SettingsBlock>
          <SettingsBlock icon="dark" isBoolean={true}>
            Dark Mode
          </SettingsBlock>
          <SettingsBlock icon="language">Language</SettingsBlock>
        </>
      ),
    },
  ];

  return (
    <>
      <Modal sections={sections} />
      <div className="w-screen h-screen bg-black flex flex-wrap justify-center items-center gap-3">
        <p
          className="px-9 py-3 border-2 text-primary-700 font-bold hover:bg-primary-700 hover:text-white border-primary-700 rounded-lg cursor-pointer"
          onClick={() => dispatch(setModalState(true))}
        >
          Open Modal
        </p>
        <Link
          to={'/private'}
          className="px-4 py-2 rounded-md border-2 border-orange-700"
        >
          Navigate to a Private Route
        </Link>
      </div>
    </>
  );
};

export default CounterForTest;

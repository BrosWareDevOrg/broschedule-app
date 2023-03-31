import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Modal from './Modal';
import SettingsBlock from './SettingsBlock';

export default function Layout({ children }) {
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
      <Head>
        <title>Schedulo</title>
        <meta
          name="description"
          content="Improve the way to contact services in our city."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex flex-col-reverse md:flex-row w-screen max-w-[100vw] h-screen">
        <Modal sections={sections} />
        <Navbar />
        {children}
      </main>
    </>
  );
}

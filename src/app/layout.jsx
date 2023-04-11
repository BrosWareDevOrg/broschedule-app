import '@/styles/globals.css';

import Providers from './ReduxContext/provider';

import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Schedulo',
  description: 'Improve the way to contact services in our city.',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <main className="relative flex flex-col-reverse md:flex-row w-screen max-w-[100vw] h-screen">
            <Navbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

import './globals.css';

import { cookies } from 'next/headers';

import Providers from './ReduxContext/provider';

import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Schedulo',
  description: 'Improve the way to contact services in our city.',
};

export default function RootLayout({ children, landing }) {
  //One way to handle session data is with next 'cookies' function, which use is similar to 'document.coockie'
  //We can choice to use other methods mor specific in future to handle users and auths, like firebase hooks.
  const coockieList = cookies();
  return (
    <html>
      <head />
      <body>
        <Providers>
          <>
            {coockieList.has('userToken') ? (
              <main className="relative w-screen max-w-[100vw] h-screen md:h-fit bg-white flex flex-col-reverse md:flex-row">
                <Navbar />
                {children}
              </main>
            ) : (
              landing
            )}
          </>
        </Providers>
      </body>
    </html>
  );
}

import Link from 'next/link';
import Button from '@/components/Button';
import NavbarIcon from '@/components/NavbarIcons';
import Input from '@/components/Input';

export default function LandingPage() {
  return (
    <main className="w-screen flex flex-col scrollbar-hide bg-white">
      <header className="w-full px-6 py-2 flex items-center drop-shadow-md">
        <nav className="w-full flex items-center">
          <ul className="w-full flex justify-between items-center drop-shadow-md">
            <li>
              <Link href={'/'}>
                <NavbarIcon icon="logo" />
              </Link>
            </li>
            <li>
              <ul className="flex gap-4">
                <li>
                  <Link href={'/auth/login'}>
                    <Button bgColor="primary" isSolid={true}>
                      Iniciar Sesión
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href={'/auth/register'}>
                    <Button bgColor="primary" isSolid={false}>
                      Crear Cuenta
                    </Button>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <article className="w-full h-screen flex items-center justify-center">
        <form className="w-3/5 flex flex-col gap-3 p-6 border border-primary-700 rounded-3xl">
          <Input name='first input' />
          <Input type={'select'} name='second input' />
        </form>
      </article>
      <article className="w-full h-screen"></article>
      <article className="w-full h-screen"></article>
      <article className="w-full h-screen"></article>
    </main>
  );
}

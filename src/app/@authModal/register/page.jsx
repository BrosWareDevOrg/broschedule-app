'use client';
import Loader from '@/components/Loader';
import Modal from '@/components/Modal';
import Link from 'next/link';
import { Suspense } from 'react';

const Form = () => {
  const handleSubmit = (e) => {
    const dataForm = new FormData(e.target);
    console.log({ dataForm });
  };
  return (
    <Suspense fallback={<Loader />}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="max-w-3/5 flex flex-col gap-6"
      >
        <input type="email" name="email" placeholder="myaccount@user.com" />
        <input type="password" name="password" placeholder="mypassword123" />
        <button type="submit">Login</button>
        <Link href={'/login'}>Allready have an account? Login!</Link>
      </form>
    </Suspense>
  );
};

export default function Login() {
  return <Modal sections={[{ title: 'Login', content: <Form /> }]} />;
}

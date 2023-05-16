'use client';
import Modal from '@/components/Modal';
import Link from 'next/link';

const Form = () => {
  const handleSubmit = (e) => {
    const dataForm = new FormData(e.target);
    console.log(dataForm);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
      className="max-w-3/5 flex flex-col gap-6"
    >
      <input type="email" placeholder="myaccount@user.com" />
      <input type="password" placeholder="mypassword123" />
      <button type="submit">Login</button>
      <Link href={'/register'}>
        Don&apos;t have an account? Register for Free!
      </Link>
    </form>
  );
};

export default function Login() {
  return <Modal sections={[{ title: 'Login', content: <Form /> }]} />;
}

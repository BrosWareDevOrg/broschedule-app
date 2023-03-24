import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <main className="relative flex flex-col-reverse md:row w-screen h-screen">
    <Navbar></Navbar>
      <section>{children}</section>
    </main>
  );
}

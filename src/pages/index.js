import { useDispatch } from 'react-redux';
import { setModalState } from '@/redux/global/actions';
import ServiceCard from '@/components/ServiceCard';
import CalendarComponent from '@/components/Calendar';

export default function Home() {
  const dispatch = useDispatch();
  return (
    <section className="w-full max-h-screen flex flex-col items-center justify-evenly">
      <div className="w-full h-screen bg-black flex flex-wrap justify-center items-center gap-3">
        <p
          className="px-9 py-3 border-2 text-primary-700 font-bold hover:bg-primary-700 hover:text-white border-primary-700 rounded-lg cursor-pointer"
          onClick={() => dispatch(setModalState(true))}
        >
          Open Modal
        </p>
      </div>
      <section>
        <CalendarComponent />
      </section>
      <div className="flex flex-col w-full items-center justify-center gap-4 p-10">
        <ServiceCard
          name="Julian Flores"
          icon="spa"
          location="Rosario, Santa Fe, Argentina"
          role="barber"
        />
      </div>
    </section>
  );
}

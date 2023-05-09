import Link from 'next/link';
import Icon from '@/components/Icon';
import ServiceCard from '@/components/ServiceCard';
import Input from '@/components/Input';

export default function Home() {
  return (
    <section className="w-full h-full max-h-screen flex flex-col items-center gap-5 p-4 md:px-8 bg-[url('/assets/images/white-circle-bg.jpg')] bg-cover bg-no-repeat bg-center overflow-y-scroll scrollbar-hide">
      <nav>
        <ul className="w-full flex gap-4 items-center overflow-x-scroll scrollbar-hide">
          <li>
            <Icon icon="search" containerType="circle" />
          </li>
          <li>
            <Icon icon="ball" containerType="circle" />
          </li>
          <li>
            <Icon icon="psychologist" containerType="circle" />
          </li>
          <li>
            <Icon icon="spa" containerType="circle" />
          </li>
          <li>
            <Icon icon="scissor" containerType="circle" />
          </li>
          <li>
            <Icon icon="drink" containerType="circle" />
          </li>
        </ul>
      </nav>

      <ul className="w-full flex flex-col gap-5">
        <li>
          <Link href="/">
            <ServiceCard
              name="Damian"
              role="football"
              location="Victoria"
              icon="ball"
              availableDays={['M', 'T', 'W', 'T', 'F']}
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <ServiceCard
              name="Ernest"
              role="stylist"
              location="Roldán"
              icon="spa"
              availableDays={['M', 'T', 'W', 'T', 'F']}
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <ServiceCard
              name="Julian"
              role="barber"
              location="Rosario"
              icon="psychologist"
              availableDays={['M', 'T', 'W', 'T', 'F']}
            />
          </Link>
        </li>
      </ul>

      <Input type='select' label='Select an Hour' name='dateOfAppointment' />

    </section>
  );
}

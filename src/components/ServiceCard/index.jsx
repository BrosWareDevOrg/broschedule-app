'use client';
import PropTypes from 'prop-types';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import vectorImage from '../../../public/assets/icons/vector.svg';
import Icon from '../Icon';
import { icons } from '../Icon';

const ServiceCard = ({
  id = '0',
  name = 'Service Provider',
  role = 'Role',
  location = 'Location',
  icon = 'user',
  availableDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
}) => {
  //Replace for Link component
  // const router = useRouter();
  // const onClick = () => router.push(`/provider/${id}`);

  const bgImages = {
    Role: './assets/images/white-circle-bg.jpg',
    football: './assets/images/footballField.jpg',
    psychologist: './assets/images/psychologist.jpg',
    spa: './assets/images/spa.jpg',
    barber: './assets/images/barber.jpg',
    stylist: './assets/images/stylist.jpg',
  };

  return (
    <Link
      className={`flex w-full border-2 hover:cursor-pointer border-primary-700 rounded-lg bg-cover bg-no-repeat relative`}
      style={{ background: `url(${bgImages[role]})` }}
      href={`/provider/${id}`}
    >
      <span className="w-3/5 h-full block bg-primary-700 left-[105px] absolute opacity-80 rounded-tl-[60px] rounded-tr-[220px] rounded-br-[32px]	rounded-bl-[85px]"></span>
      <div className="flex z-10 gap-10 h-40 p-4 max-w-lg items-center">
        <Icon icon={icon} containerType="square" />
        <div>
          <p className={'font-bold text-2xl capitalize'}>{name}</p>
          <p className={'text-lg capitalize'}>{role}</p>
          <div className={'flex mt-3 relative'}>
            <Image src={vectorImage} className={'mr-2'} alt="location icon" />
            <p>{location}</p>
          </div>
          <div className="flex gap-2 font-semibold">
            {availableDays.map((day, index) => {
              return <p key={index}>{day}</p>;
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(icons).isRequired,
  availableDays: PropTypes.arrayOf(PropTypes.string),
};

export default ServiceCard;

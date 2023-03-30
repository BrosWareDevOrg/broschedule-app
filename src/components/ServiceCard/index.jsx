import Icon from "../Icon";
import PropTypes from "prop-types";
import { icons } from "../Icon";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({
  id = "0",
  name = "Service Provider",
  role = "Role",
  location = "Location",
  icon = "user",
  availableDays = ["S", "M", "T", "W", "T", "F", "S"],
}) => {
  const navigate = useNavigate();
  const onClick = () => navigate(`/provider/${id}`);
  return (
    <div
      onClick={onClick}
      className={`flex border-2 hover:cursor-pointer border-primary-700 rounded-lg bg-[url(assets/images/footballField.svg)] bg-cover bg-no-repeat relative`}
    >
      <span className="w-3/5 h-full block bg-primary-700 left-[105px] absolute opacity-80 rounded-tl-[60px] rounded-tr-[220px] rounded-br-[32px]	rounded-bl-[85px]"></span>
      <div className="flex z-10 gap-10 h-40 p-4 max-w-lg items-center">
        <Icon icon={icon} containerType="square" alt="icon" />
        <div>
          <p className={"font-bold text-2xl capitalize"}>{name}</p>
          <p className={"text-lg capitalize"}>{role}</p>
          <div className={"flex mt-3"}>
            <img src={`/assets/icons/vector.svg`} className={"mr-2"} alt='' />
            <p>{location}</p>
          </div>
          <div className="flex gap-2 font-semibold">
            {availableDays.map((day, index) => {
              return <p key={index}>{day}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
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

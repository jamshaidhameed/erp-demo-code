import { Link } from 'react-router-dom';
// import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomeCard = ({ CardImage, title, color, to }) => {
  return (
    <div className="home_card">
      <Link to={to} className="text-center">
        <FontAwesomeIcon className="home_card_icon" icon={CardImage} />
        {/* <div>{CardImage}</div> */}
        {/* <i className="fas fa-users"></i>
        <i className="fas fa-ellipsis-v" /> */}
        {/* <CardImage fill={color} className="home_card_img" /> */}

        <div className="mt-3 home_card-title">{title}</div>
      </Link>
    </div>
  );
};

export default HomeCard;

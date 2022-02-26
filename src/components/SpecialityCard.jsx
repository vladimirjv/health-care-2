import PropTypes from 'prop-types';
import HEART from '../assets/svg/heart.svg';
import BRAIN from '../assets/svg/brain.svg';
import EYE from '../assets/svg/eye.svg';

const IMAGES = {
  HEART,
  BRAIN,
  EYE,
};

function SpecialityCard({ speciality, image, disponibility }) {
  return (
    <div className="p-3 bg-secondary rounded-xl">
      <div className="flex w-40">
        <div className="grid mr-5 rounded-md content-center p-2 bg-accent">
          <img src={IMAGES[image]} alt="logo" className="w-6 h-6" />
        </div>
        <div className="grid grid-cols-1 content-center">
          <p className="font-bold">{speciality}</p>
          <p>{disponibility} Doctors</p>
        </div>
      </div>
    </div>
  );
}

SpecialityCard.propTypes = {
  speciality: PropTypes.string.isRequired,
  image: PropTypes.oneOf(['HEART', 'EYE', 'BRAIN']).isRequired,
  disponibility: PropTypes.number.isRequired,
};

export default SpecialityCard;

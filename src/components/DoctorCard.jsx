import PropTypes from 'prop-types';

function DoctorCard({ name, speciality }) {
  return (
    <div className="p-4 bg-secondary rounded-xl">
      <div className="flex flex-col w-40">
        <div className="flex justify-center">
          <img
            src="https://thispersondoesnotexist.com/image"
            alt="lovely avatar"
            className="object-cover object-center w-20 h-20 m-3 visible rounded-full"
          />
        </div>
        <div className="text-center mb-3">
          <p className="text-base font-bold">Dr. {name}</p>
          <p className="text-sm text-gray-200">{speciality}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400">Availability</p>
          {/* <p>{availabilityDate}</p> */}
        </div>
      </div>
    </div>
  );
}

DoctorCard.propTypes = {
  name: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  // availability: PropTypes.any.isRequired,
};

export default DoctorCard;

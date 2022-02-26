import { useState } from 'react';
import SpecialityCard from './SpecialityCard';

function ListSpecialities() {
  // temporary state
  const [specialities] = useState([
    {
      id: 1,
      speciality: 'Pediatry',
      image: 'HEART',
      disponibility: 12,
    },
    {
      id: 2,
      speciality: 'Physchology',
      image: 'BRAIN',
      disponibility: 12,
    },
    {
      id: 3,
      speciality: 'Oculist',
      image: 'EYE',
      disponibility: 12,
    },
    {
      id: 4,
      speciality: 'Oculist',
      image: 'EYE',
      disponibility: 12,
    },
  ]);
  return (
    <div
      className="hide-scroll-bar flex flex-row overflow-x-scroll gap-x-4"
    >
      {specialities.map((speciality) => (
        <SpecialityCard
          key={speciality.id}
          speciality={speciality.speciality}
          image={speciality.image}
          disponibility={speciality.disponibility}
        />
      ))}
    </div>
  );
}

export default ListSpecialities;

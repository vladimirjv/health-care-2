import { useState } from 'react';
import DoctorCard from './DoctorCard';

function ListDoctors() {
  const [doctors] = useState([
    {
      id: 1,
      speciality: 'Pediatry',
      name: 'Pedro Picapiedra',
    },
    {
      id: 2,
      speciality: 'Physchology',
      name: 'Juan Escutia',
    },
    {
      id: 3,
      speciality: 'Oculist',
      name: 'Cristiano Ronaldo',
    },
  ]);
  return (
    <div>
      <div className="flex flex-row justify-center mb-2">
        <div className="flex-grow text-xl font-bold">Top doctors</div>
        <div className="text-sm text-secondary_accent">see all</div>
      </div>
      <div
        className="hide-scroll-bar flex flex-row overflow-x-scroll gap-x-4"
      >
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            name={doctor.name}
            speciality={doctor.speciality}
          />
        ))}
      </div>
    </div>
  );
}

export default ListDoctors;

// import PropTypes from 'prop-types';
import { useState } from 'react';
import covidMask from '../assets/covid.png';

function CovidBanner() {
  const [title] = useState('Self Check up Covid-19');
  const [body] = useState(
    'Contain several list of questions to check Your phisical condition',
  );
  return (
    <div className="p-5 bg-secondary min-w-full rounded-md">
      <div className="flex">
        <div className="grid mr-5 content-center">
          <img src={covidMask} alt="Covid Mask" className="w-16 h-16" />
          {/* <object className="2-16 h-16" type="image/svg+xml" data="/assets/covid.png" aria-label='Covid Mask' /> */}
        </div>
        <div className="w-2/3 grid grid-cols-1 content-center">
          <p className="font-bold">{title}</p>
          <div className="flex text-left ">
            <div className="flex-grow">{body}</div>
            <div className="flex flex-col justify-center font-bold text-2xl">
              <span className="">&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// CovidBanner.propTypes = {};

export default CovidBanner;

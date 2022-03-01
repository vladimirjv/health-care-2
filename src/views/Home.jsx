import PropTypes from 'prop-types';
import CovidBanner from '../components/CovidBanner';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import ListSpecialities from '../components/ListSpecialities';
import ListDoctors from '../components/ListDoctors';
import { useState } from 'react';

function Home(props) {
  const [user] = useState({ name: 'Vladimir Juarez', avatar: '' });
  // const { user } = props;
  return (
    <div id="homePage" className="flex flex-nowrap w-full md:w-3/5 lg:w-5/12 xl:w-4/12 flex-col p-5 gap-y-7 md:(border-l-1 border-r-1)">
      <Header user={user} />
      <CovidBanner />
      <SearchInput />
      <ListSpecialities />
      <ListDoctors />
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Home;

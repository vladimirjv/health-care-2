import PropTypes from 'prop-types';

function Header(props) {
  const { user } = props;
  const { name } = user;

  return (
    <div className="flex">
      <div className="flex-grow grid grid-cols-1 content-center ">
        <p className="text-xl">Hello,</p>
        <p className="text-3xl">{name}</p>
      </div>
      <div className="grid">
        <div className="w-16 h-16 relative">
          <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center  table cursor-pointer">
            <span className="hidden group-hover:table-cell text-white font-bold align-middle">
              KR
            </span>
            <img
              src="https://thispersondoesnotexist.com/image"
              alt="lovely avatar"
              className="object-cover object-center w-full h-full visible group-hover:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Header;

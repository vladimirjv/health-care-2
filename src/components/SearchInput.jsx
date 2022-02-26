function SearchInput() {
  return (
    <div className="py-3 px-3 flex justify-beclassNameeen rounded-md bg-secondary">
      <input
        className="flex-grow rounded bg-secondary border-0 focus:bg-secondary"
        type="text"
        placeholder="Search Customer..."
      />
      <div className="flex flex-col justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white hover:text-primary transition duration-100 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}

// SearchInput.propTypes = {};

export default SearchInput;

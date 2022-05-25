const SearchContact = ({ searchValue, handleChange }) => {
  return (
    <div >
      <label>
        Find contact by name:
        <input
          type="text"
          name="filter"
          value={searchValue}
          required
          onChange={e => handleChange(e)}
        />
      </label>
    </div>
  );
};

export default SearchContact;
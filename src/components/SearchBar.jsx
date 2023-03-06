function SearchBar({
    type = "text",
    name = "",
    value = "",
    placeholder = "",
    handleChange = () => {},
    ...props
  }) {
    return (
      <div>
        <input 
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          {...props}
        />
      </div>
    );
  }
  
  export default SearchBar;
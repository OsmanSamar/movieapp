import React from "react";

const SearchBar = ({
  type,
  placeholder,
  required = false,
  value,
  name,
  handleInputChange,
  handleSearch, // Function to handle search action
  rightIcon,
}) => {
  const handleKeyPress = (e) => {
    if (e && e.key === "Enter") {
      handleSearch(e.target.value); // Call handleSearch function with input value on Enter key press
    }
  };
  return (
    <div>
      <div className="relative">
        <input
          type={type || "text"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Handle Enter key press
          required={required}
          className={` 
         text-black text-md bg-red-100  border-b border-gray-300  focus:border-slate-800 
           w-full p-2.5 outline-none px-5 placeholder:text-sm shadow-xl`}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

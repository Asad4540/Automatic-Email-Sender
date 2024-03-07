import { Add,Search} from "@mui/icons-material";
import React from "react";

// Create a separate SearchBar component
const SearchBar = ({ onSearch }) => {
  return (
    <div className="flex items-center border border-black rounded-sm my-5">
      <input
        type="text"
        placeholder="Search Clients..."
        className="outline-none p-2  flex-grow"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="ml-2">
        <Search />
      </button>
    </div>
  );
};

const AddEmail = () => {
  return (
    <div>
      <div className="bg-gray-100 p-4 py-8 shadow-lg w-full max-w-screen-lg mx-auto rounded-md" >
        <div className="flex justify-start gap-6 text-xl ml-2">
          <h1 className=" hover:font-semibold">East zone</h1>
          <h1 className=" hover:font-semibold">Internal Stakeholders</h1>
          <h1 className=" hover:font-semibold">West Zone</h1>
        </div>
        <div className="w-full max-w-screen-sm ml-2">
          <SearchBar onSearch={(searchTerm) => console.log(searchTerm)} />
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default AddEmail;
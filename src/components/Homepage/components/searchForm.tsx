import React from "react";

const SearchForm: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center">
      <div className="flex space-x-4">
        <button className="text-purple-500 bg-purple-100 px-4 py-2 rounded-full focus:outline-none">
          Flights
        </button>
        <button className="text-gray-600 px-4 py-2 rounded-full focus:outline-none">
          Hotels
        </button>
      </div>
      <div className="flex space-x-3">
        <div className="flex items-center bg-gray-100 p-2 rounded-full">
          <span className="text-gray-400 mr-2">🔄</span>
          <select className="bg-transparent focus:outline-none">
            <option>Return Trip</option>
            <option>One Way</option>
          </select>
        </div>
        <div className="flex items-center bg-gray-100 p-2 rounded-full">
          <span className="text-gray-400 mr-2">🧑</span>
          <select className="bg-transparent focus:outline-none">
            <option>Passengers</option>
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>3 Adults</option>
            <option>1 Adult, 1 Child</option>
          </select>
        </div>
        <input
          className="bg-gray-100 p-2 rounded-full focus:outline-none"
          type="text"
          placeholder="From"
        />
        <input
          className="bg-gray-100 p-2 rounded-full focus:outline-none"
          type="text"
          placeholder="To"
        />
        <input
          className="bg-gray-100 p-2 rounded-full focus:outline-none"
          type="text"
          placeholder="Departure"
        />
        <input
          className="bg-gray-100 p-2 rounded-full focus:outline-none"
          type="text"
          placeholder="Return"
        />
      </div>
      <button className="text-white bg-purple-500 px-6 py-2 rounded-full focus:outline-none">
        Search
      </button>
    </div>
  );
};

export default SearchForm;

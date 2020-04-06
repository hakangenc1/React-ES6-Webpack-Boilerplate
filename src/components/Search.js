import React from 'react';

const Search = () => {
  return (
    <div className="container mx-auto px-40 mb-16">
      <div className="bg-gray-900 text-white flex items-center justify-between p-3 -my-8">
        <div className="flex items-center">
          <span className="relative">
            <input
              type="text"
              placeholder="Search"
              className="text-gray-700 text-sm rounded px-2 py-2 w-72 outline-none"
            />
            <span
              className="absolute right-0 top-0 mr-3 cursor-pointer"
              style={{ top: '9px' }}
            >
              <svg
                className="text-gray-600"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path
                  className="heroicon-ui"
                  d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                ></path>
              </svg>
            </span>
          </span>
          <span className="ml-4">
            within{' '}
            <a
              href="#"
              className="border-b border-gray-500 hover:border-gray-100"
            >
              50 miles{' '}
            </a>
            of{' '}
            <a
              href="#"
              className="border-b border-gray-500 hover:border-gray-100"
            >
              Wroclaw, Poland
            </a>
          </span>
        </div>
        <div className="flex items-center">
          <button className="border-l border-b border-t text-sm focus:outline-none border-gray-700 px-6 py-2">
            Groups
          </button>
          <button className="border-r border-b border-t text-sm focus:outline-none bg-gray-700 text-white font-bold border-gray-700 px-6 py-2">
            Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;

import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white flex items-center justify-between p-4">
      <div className="w-64">
        <a
          href="#"
          className="font-bold p-3 rounded hover:text-white hover:bg-gray-900"
        >
          React Webpack TailwindCSS
        </a>
      </div>
      <ul className="flex items-center text-sm text-gray-600">
        <li className="border-r border-gray-400 pr-4 mr-4">
          <a className="text-red-600 font-bold" href="#">
            Start a new group
          </a>
        </li>
        <li className="mr-6">
          <a className="hover:text-red-600" href="#">
            Explore
          </a>
        </li>
        <li className="mr-6">
          <a className="hover:text-red-600" href="#">
            Messages
          </a>
        </li>
        <li className="mr-6 relative">
          <a className="hover:text-red-600" href="#">
            Notifications
          </a>
          <div
            className="absolute w-2 h-2 rounded-full bg-green-500 right-0 top-0"
            style={{ right: '-10px' }}
          ></div>
        </li>
        <li>
          <a href="#" className="flex items-center">
            <img
              src="https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"
              alt="avatar"
              className="rounded-full w-6 h-6"
            />
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                className="heroicon-ui"
                d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;

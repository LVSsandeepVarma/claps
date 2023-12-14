import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <nav className="bg-blue-200  drop-shadow-lg p-4 fixed w-full" >
      <div className="flex justify-between items-center">
        <a href="/" className="text-lg font-bold">Navbar</a>
        <button onClick={toggleNav} className="text-gray-500 md:hidden">
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`hidden md:flex md:items-center md:mt-0 md:justify-start md:space-x-4`}>
        <li className=" mx-4">
          <a href="/" className="text-gray-500">Home</a>
        </li>
        <li className=" mx-4">
          <a href="/about" className="text-gray-500">About</a>
        </li>
        <li className=" mx-4">
          <a href="/contact" className="text-gray-500">Contact</a>
        </li>
      </ul>
      </div>
      <ul className={`md:flex md:items-center md:mt-0 md:justify-start md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
        <li className="md:hidden mx-4">
          <a href="/" className="text-gray-500">Home</a>
        </li>
        <li className="md:hidden mx-4">
          <a href="/about" className="text-gray-500">About</a>
        </li>
        <li className="md:hidden mx-4">
          <a href="/contact" className="text-gray-500">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

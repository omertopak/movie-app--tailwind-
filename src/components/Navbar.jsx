import React from "react";

const Navbar = () => {

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className=" flex items-center justify-between  p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My Movie App</span>
        </a>

        <ul>
          <li>
            <a href="#" className="text-white"><i class="fa-solid fa-circle-half-stroke"></i></a>
          </li>
        </ul>

        <ul className="flex gap-8 text-white font-normal mr-3">
          
          <li>
            <a href="#" className="" aria-current="page">Register</a>
          </li>
          <li>
            <a href="#" className="">Log in</a>
          </li>
          <li>
            <a href="#" className=""><i class="fa-solid fa-circle-user"></i></a>
          </li>
        </ul>
      </div>

    </nav>

  )
};

export default Navbar;

import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Login from "./login";
import SignUP from "./signup";
import { Link } from "react-router-dom";
const navigation = [
  { name: "Programmes", href: "#" },
  { name: "Our Mission", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Donate for the cause", href: "#" },
];
function clickHandler() {
  console.log("clicked");
}
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className='bg-white'>
      <nav
        className='flex items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <img
          class='h-8 w-auto'
          src='https://navsanjeevansocialtrust.org/img/logo.png'
          alt=''
        />
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Our Mission</span>
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>About Us</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Link to='/login'>Log In</Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;

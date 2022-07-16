import React, { useState, useEffect } from 'react';
import Button from '~/ui-components/Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import type { Location } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideBar from './SideBar';
import { Fade } from 'react-awesome-reveal';

const renderMenu = (menu: any, location: Location) =>
  menu.map((item: any, i: number) => {
    return (
      <li key={item.id}>
        <Link
          className={`text-white hover:text-primary hover:bg-white hover:bg-opacity-10 active:bg-primary active:text-white px-10 py-4 mx-1 rounded-md transition-colors duration-200 ${
            item.link === location.pathname &&
            'bg-primary text-white hover:bg-primary hover:bg-opacity-90 hover:text-white'
          }`}
          to={item.link}
        >
          {item.name}
        </Link>
      </li>
    );
  });

export default function Header() {
  const location: Location = useLocation();
  const [headerColor, setHeaderColor] = useState('transparent');
  const [displaySideBar, setDisplaySideBar] = useState('hidden');

  const changeDisplaySideBar = () => {
    displaySideBar === 'hidden' ? setDisplaySideBar('flex') : setDisplaySideBar('hidden');
  };

  const menu = [
    {
      name: 'Home',
      link: '/',
      id: 0,
    },
    {
      name: 'Portfolio',
      link: '/portfolio',
      id: 1,
    },
    {
      name: 'Contact',
      link: '/contact',
      id: 2,
    },
  ];

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setHeaderColor('secondary') : setHeaderColor('transparent');
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  });

  return (
    <header className={`h-header-height bg-${headerColor} w-full fixed z-50 transition-colors duration-200`}>
      <div className="container mx-auto flex justify-between items-center h-full lg:px-10 px-2 z-50 ">
        <div className="text-white text-5xl leading-[60px] font-black from-stone-900">ĐPQ</div>
        <ul className="lg:flex hidden items-center text-center mx-auto justify-between text-3xl">
          {renderMenu(menu, location)}
        </ul>

        <Button children="Contact" type="transparent" className="hidden lg:block" />

        <button
          className="py-4 px-4 m-10 disabled:cursor-not-allowed transition-colors duration-200 text-white text-4xl outline-none rounded-full border-[1px] border-white active:border-primary active:text-primary block lg:hidden"
          onClick={changeDisplaySideBar}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <div className="lg:hidden">
        <div className={`w-full ${displaySideBar} absolute transition-opacity ease-in duration-700`}>
          <Fade direction="right" duration={900} className={`w-1/3 md:w-2/3 ${displaySideBar}`}>
            <div className="w-full bg-primary opacity-20 h-screen" onClick={changeDisplaySideBar} />
          </Fade>
          <Fade direction="right" duration={1000} className={`w-2/3 md:w-1/3 ${displaySideBar}`}>
            <div className="w-full" onClick={changeDisplaySideBar}>
              <SideBar />
            </div>
          </Fade>
        </div>
      </div>
    </header>
  );
}

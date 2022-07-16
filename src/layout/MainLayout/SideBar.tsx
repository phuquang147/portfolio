import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import type { Location } from 'react-router-dom';

const renderMenu = (list: any, location: Location) => {
  return list.map((item: any, i: number) => (
    <li key={item.id} className="block">
      <Link
        to={item.link}
        className={`block py-4 px-8 text-3xl w-full hover:bg-primary hover:text-white transition-colors duration-200 ${
          item.link === location.pathname
            ? ' bg-primary text-white  hover:bg-opacity-90 hover:text-white'
            : 'text-primary'
        }`}
      >
        {item.name}
      </Link>
    </li>
  ));
};

const SideBar = () => {
  const location: Location = useLocation();

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

  return (
    <div className="bg-secondary h-screen overflow-auto z-40">
      <div className="pb-8">
        <ul className="pb-10">{renderMenu(menu, location)}</ul>
      </div>
    </div>
  );
};

export default SideBar;

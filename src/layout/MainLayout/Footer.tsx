import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import Button from '~/ui-components/Button';

const renderLink = (links: any) =>
  links.map((link: any, i: number) => (
    <li key={link.id} className="my-1">
      <Link to={link.url} className="text-white font-normal font-public-sans text-base hover:text-primary">
        {link.name}
      </Link>
    </li>
  ));

const Footer: React.FC = () => {
  const links = [
    {
      url: '/',
      name: 'Home',
      id: 0,
    },
    {
      url: '/about',
      name: 'About',
      id: 1,
    },
    {
      url: '/portfolio',
      name: 'Portfolio',
      id: 2,
    },
    {
      url: '/contact',
      name: 'Contact',
      id: 3,
    },
  ];

  return (
    <div>
      <div className="bg-secondary py-20 px-6 md:px-10 lg:px-0">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="col-span-1">
            <p className="text-white text-[40px] leading-[40px] font-bold">ĐPQ</p>
            <p className="text-white text-xl font-normal font-public-sans mt-10 flex items-center">
              <AiOutlinePhone className="mr-2 text-2xl text-primary" />
              0354 351 151
            </p>
            <p className="text-white text-base font-normal font-public-sans mt-10 flex items-center">
              <AiOutlineMail className="mr-2 text-2xl text-primary" />
              phuquang14722@gmail.com
            </p>
          </div>
          <div className="col-span-1">
            <p className="font-bold text-lg text-light-orange">MENU</p>
            <ul className="grid grid-cols-2 mt-4">{renderLink(links)}</ul>
          </div>
          <div className="col-span-1">
            <p className="font-bold text-lg text-light-orange">LINK</p>
            <div className="flex gap-4 mt-6">
              <Button
                type="icon"
                children={<FaFacebookF />}
                className="text-primary"
                href="https://www.facebook.com/phuquang147/"
              />
              <Button type="icon" children={<FaTwitter />} className="text-primary" />
              <Button type="icon" children={<FaInstagram />} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-center text-lg items-center py-5 text-gray-400 cursor-default">
        <p className="hover:text-primary">@2022 Do Phu Quang</p>
      </div>
    </div>
  );
};

export default Footer;

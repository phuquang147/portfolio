import React from 'react';
import avatar from '~/assets/images/avatar.jpg';
import Button from '~/ui-components/Button';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function ContactCard() {
  return (
    <div className="bg-primary p-10 rounded-md shadow-md">
      <div className="grid grid-cols-3">
        <p className="col-span-2 text-white text-5xl font-bold">Do Phu Quang</p>
        <img src={avatar} alt="avatar" className="col-span-1 rounded-full" />
      </div>
      <p className="text-white text-xl font-light font-public-sans mt-4">PHONE</p>
      <p className="text-white text-[40px] font-bold">0354 351 151</p>
      <p className="text-white text-xl font-light font-public-sans mt-10">EMAIL</p>
      <p className="text-white text-2xl font-bold">phuquang14722@gmail.com</p>
      <div className="flex gap-2 mt-10">
        <Button type="icon" children={<FaFacebookF />} className="text-white" />
        <Button type="icon" children={<FaTwitter />} className="text-white" />
        <Button type="icon" children={<FaInstagram />} className="text-white" />
      </div>
    </div>
  );
}

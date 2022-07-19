import React from 'react';
import Button from '~/ui-components/Button';
import img from '~/assets/images/img_section1.svg';

export default function Section2() {
  return (
    <div className="pt-10 lg:pt-28 bg-section-1-bg bg-cover flex flex-wrap justify-center">
      <div className="w-full container grid grid-cols-2 gap-0 lg:gap-28">
        <div className="col-span-2 lg:col-span-1 px-6 md:px-10 lg:px-0">
          <img src={img} alt="" className="w-full" />
        </div>
        <div className="col-span-2 lg:col-span-1 px-6 md:px-10 lg:px-0 flex items-center">
          <div className="text-white flex flex-wrap items-center justify-center">
            <span className="w-full text-lg leading-[18px] font-bold text-light-orange">ABOUT</span>
            <span className="w-full text-[40px] leading-[46px] lg:text-[56px] font-bold mt-6 text-gray-700">
              Passion, Heart & Soul
            </span>
            <span className="w-full text-xl font-normal font-public-sans mt-6 text-gray-600">
              Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
            </span>
            <span className="w-full text-base leading-7 font-normal font-public-sans mt-6 text-gray-400">
              By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the
              sable cloud beneath was dished out, and the car seemed to float.{' '}
            </span>
            <div className="w-full flex items-start mt-10 mb-10 lg:mb-0">
              <Button type="primary" children="About" to="/about" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

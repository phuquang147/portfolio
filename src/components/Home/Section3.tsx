import React from 'react';
import Button from '~/ui-components/Button';
import Project from '../Project';

export default function Section3() {
  return (
    <div className="pt-10 lg:pt-28 flex flex-wrap justify-center">
      <div className="w-full container">
        <div className="px-6 md:px-10 lg:px-0 flex items-center">
          <div className="text-white flex flex-wrap items-center justify-center">
            <span className="w-full text-lg leading-[18px] font-bold text-light-orange">PORTFOLIO</span>
            <span className="w-full text-[40px] leading-[46px] lg:text-[56px] font-bold mt-6 text-gray-700">
              Some of My Work
            </span>
            <div className="grid grid-cols-2 gap-5 mt-6">
              <span className="col-span-2 lg:col-span-1 w-full text-xl font-normal font-public-sans text-gray-600">
                Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
              </span>
              <div className="col-span-2 lg:col-span-1 flex justify-start lg:justify-end">
                <Button type="secondary" children="Portfolio" to="/portfolio" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 my-20 px-6 md:px-10 lg:px-0">
          <Project className="col-span-3 lg:col-span-1" />
          <Project className="col-span-3 lg:col-span-1" />
          <Project className="col-span-3 lg:col-span-1" />
        </div>
      </div>
    </div>
  );
}

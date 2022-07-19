import React from 'react';
import Button from '~/ui-components/Button';

export default function SectionContact() {
  return (
    <div className="bg-section-contact-bg bg-cover">
      <div className="py-24 text-white flex flex-wrap items-center justify-center text-center px-6 md:px-10 lg:px-0">
        <span className="w-full text-[40px] leading-[50px] lg:text-[56px] font-bold">
          Contact If You Have Any Projects?
        </span>
        <span className="w-full text-xl font-light font-public-sans mt-6">
          Apparently we had reached a great height in the atmosphere{' '}
        </span>
        <div className="w-full flex justify-center mt-10 gap-8">
          <Button type="primary" children="Contact" to="/contact" />
          <Button type="transparent" children="About" to="about" />
        </div>
      </div>
    </div>
  );
}

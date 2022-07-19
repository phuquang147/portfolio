import React from 'react';
import Button from '~/ui-components/Button';

export default function ContactForm() {
  return (
    <form className="p-10 rounded-md bg-white shadow-md min-h-full flex flex-col">
      <p className="text-gray-800 text-[56px] leading-[56px] font-bold">Message</p>
      <input
        className=" appearance-none border rounded w-full p-4 mt-10 text-base font-public-sans text-gray-700 focus:outline-none focus:shadow-outline"
        id="email"
        placeholder="Your Email"
        required
      />
      <input
        className="appearance-none border rounded w-full p-4 mt-8 text-base font-public-sans text-gray-700 focus:outline-none focus:shadow-outline"
        id="subject"
        placeholder="Subject"
        required
      />
      <textarea
        className="flex-1 appearance-none border rounded w-full p-4 mt-8 text-base font-public-sans text-gray-700 focus:outline-none focus:shadow-outline"
        id="message"
        placeholder="Message"
        required
      />
      <Button type="primary" children="Send" className="mt-4 lg:self-start" />
    </form>
  );
}

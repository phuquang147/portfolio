import { useRef } from 'react';
import Button from '~/ui-components/Button';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const clearForm = () => {
    form.current?.reset();
  };
  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current !== null) {
      emailjs.sendForm('service_d4rbgag', 'template_0jhqnka', form.current, 'kSMXzHyz2JwUGnwHS').then(
        (result) => {
          toast.success('Send email successful!', {
            style: {
              border: '1px solid #2ac2f1',
              padding: '16px',
              color: '#2ac2f1',
            },
            iconTheme: {
              primary: '#2ac2f1',
              secondary: '#FFFAEE',
            },
          });
          clearForm();
        },
        (error) => {
          toast.error('Send email failed!', {
            style: {
              border: '1px solid #ed3833',
              padding: '16px',
              color: '#ed3833',
            },
            iconTheme: {
              primary: '#ed3833',
              secondary: '#FFFAEE',
            },
          });
        },
      );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="p-10 rounded-md bg-white shadow-md min-h-full flex flex-col">
      <p className="text-gray-800 text-[56px] leading-[56px] font-bold">Message</p>
      <input
        type="email"
        className=" appearance-none border rounded w-full p-4 mt-10 text-base font-public-sans text-gray-700 focus:outline-none focus:shadow-outline"
        id="email"
        placeholder="Your Email"
        required
        name="user_email"
      />
      <input
        className="appearance-none border rounded w-full p-4 mt-8 text-base font-public-sans text-gray-700 focus:outline-none focus:shadow-outline"
        id="subject"
        placeholder="Subject"
        required
        name="user_name"
      />
      <textarea
        className="flex-1 appearance-none border rounded w-full p-4 mt-8 text-base font-public-sans text-gray-700 focus:outline-none focus:shadow-outline"
        id="message"
        placeholder="Message"
        required
        name="message"
      />
      <Button type="primary" children="Send" className="mt-4 lg:self-start" />
    </form>
  );
}

import ContactCard from '~/components/Contact/ContactCard';
import ContactForm from '~/components/Contact/ContactForm';
import Heading from '~/ui-components/Heading';

export default function Contact() {
  return (
    <div>
      <Heading content="Contact" />
      <div className="container grid grid-cols-2 gap-5 mx-auto px-2 py-10 lg:px-0 lg:py-20">
        <div className="col-span-2 lg:col-span-1">
          <ContactForm />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <ContactCard />
        </div>
      </div>
    </div>
  );
}

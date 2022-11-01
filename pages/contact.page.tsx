// import Head from 'next/head';
import { ContactForm } from 'pageElements/contact/ContactForm';

export default function Contact() {
  return (
    <div>
      <div className="px-width-clamp py-10 tablet:pt-10 tablet:pb-20">
        <ContactForm />
      </div>
    </div>
  );
}

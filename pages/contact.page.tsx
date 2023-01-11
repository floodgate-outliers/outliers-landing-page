// import Head from 'next/head';
import { BasicContactInfo } from 'pageElements/contact/BasicContactInfo';
// import { ContactForm } from 'pageElements/contact/ContactForm';

export default function ContactPage() {
  return (
    <div>
      {/* <div className="px-width-clamp py-10 tablet:pt-10 tablet:pb-20">
        <ContactForm />
      </div> */}
      <div className="px-width-clamp py-20 tablet:pt-24 tablet:pb-20">
        <BasicContactInfo />
      </div>
    </div>
  );
}

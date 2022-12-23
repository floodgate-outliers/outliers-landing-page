// import Head from 'next/head';
import { ContactForm } from 'pageElements/contact/ContactForm';

// This page has been removed from the public
// To add, change the extension to contact.page.tsx
export default function ContactPage() {
  return (
    <div>
      <div className="px-width-clamp py-10 tablet:pt-10 tablet:pb-20">
        <ContactForm />
      </div>
    </div>
  );
}

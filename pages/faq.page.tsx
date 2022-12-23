// import Head from 'next/head';
import { BasicMetaTags } from 'components/metaTags/BasicMetaTags';
import { QuestionsAnswers } from 'pageElements/faq/QuestionsAnswers';

export default function FAQPage() {
  return (
    <div>
      <BasicMetaTags title="Outliers | FAQ" route="/faq" />
      <div className="px-width-clamp py-10 tablet:pt-10 tablet:pb-20">
        <QuestionsAnswers />
      </div>
    </div>
  );
}

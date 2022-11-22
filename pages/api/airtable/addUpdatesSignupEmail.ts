import airtable from 'airtable';
import moment from 'moment';

airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const airtableBase = airtable.base(process.env.AIRTBALE_BASE_ID || '');

const updatesSignupEmailBase = airtableBase.table('emails');

type UpdateSignupEmailRecord = {
  fields: {
    email: string;
    signupDate: string;
  };
};

// Adds email to Airtable and makes note of the signup date
// *** Note this function is not directly callable from the frontend
export async function addUpdatesSignupEmail(
  recipientEmailAddress: string
): Promise<void> {
  console.log('---addUpdatesSignupEmail---');

  console.log(moment().toISOString());
  const newUpdateSignupEmailRecord: UpdateSignupEmailRecord = {
    fields: {
      email: recipientEmailAddress,
      signupDate: moment().toISOString(),
    },
  };

  await updatesSignupEmailBase.create([newUpdateSignupEmailRecord], {
    typecast: true,
  });
}

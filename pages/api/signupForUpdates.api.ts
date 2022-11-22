import { NextApiRequest, NextApiResponse } from 'next';
import { UpdatesSignupRequest } from 'types/API.type';
import { addUpdatesSignupEmail } from './airtable/addUpdatesSignupEmail';
import { sendUpdatesSignupEmail } from './sendgrid/sendUpdatesSignupEmail';

interface UpdatesSignupReq extends NextApiRequest {
  body: UpdatesSignupRequest;
}

// Note this function is not directly callable from the frontend
export default async function signupForUpdates(
  req: UpdatesSignupReq,
  res: NextApiResponse<string | unknown>
) {
  console.log('---signupForUpdates---');

  const { recipientEmailAddress } = req.body;

  if (!recipientEmailAddress) {
    return res.status(400).json('Recipient email address required');
  }

  try {
    // Add the email to Airtable
    await addUpdatesSignupEmail(recipientEmailAddress);

    // Send a confirmation email to the recipient
    await sendUpdatesSignupEmail(recipientEmailAddress);

    return res.status(200).json('Successfully signed up for updates!');
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';
import { SendgridUpdatesSignupRequest } from 'types/API';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

interface UpdatesSignupRequest extends NextApiRequest {
  body: SendgridUpdatesSignupRequest;
}

export default async function updatesSignup(
  req: UpdatesSignupRequest,
  res: NextApiResponse<string | unknown>
) {
  console.log('---Sendgrid updatesSignup---');

  const { recipientEmailAddress } = req.body;

  if (!recipientEmailAddress) {
    return res.status(400).json('Recipient email address required');
  }

  try {
    // Send signup confirmation email to the recipient
    await sendgrid.send({
      from: 'outliersbuild@gmail.com',
      to: recipientEmailAddress,
      templateId: 'd-0212f22bbc52460bb8a98f47c0facf0b',
    });

    return res.status(200).json('Successfully signed up for updates!');
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

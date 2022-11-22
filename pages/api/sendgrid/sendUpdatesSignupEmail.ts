import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

// Sends an email confirming the signup for updates
// *** Note this function is not directly callable from the frontend
export async function sendUpdatesSignupEmail(
  recipientEmailAddress: string
): Promise<void> {
  console.log('---Sendgrid sendUpdatesSignupEmail---');

  // Send signup confirmation email to the recipient
  await sendgrid.send({
    from: 'outliersbuild@gmail.com',
    to: recipientEmailAddress,
    templateId: 'd-0212f22bbc52460bb8a98f47c0facf0b',
  });
}

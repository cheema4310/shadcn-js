'use server';

import EmailTemplate from '@/components/resendEmail/EmailTemplate';
import Subscribers from '@/models/subs-model';
import { revalidatePath } from 'next/cache';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(formData) {
  try {
    const email = formData['email'];
    const fullName = formData['fullName'];

    if (!email || !fullName) throw new Error('Please fill in all fields');

    const foundSubscriber = await Subscribers.findOne({ email: email }).lean();

    console.log('Already Subscribed: ', foundSubscriber);

    if (!foundSubscriber) {
      await Subscribers.create({
        email,
        name: fullName,
      });
      // send the email to subscriber
      const message = `Dear ${fullName}, Thank you for subscribing to Cheema's Newsletter. Learn more to earn more. Enjoy!`;
      await resend.emails.send({
        from: 'noreply <onboarding@resend.dev>',
        to: email,
        subject: 'Welcome to Cheema!',
        react: EmailTemplate({ message }),
      });
      // Revalidate the path
      revalidatePath('/');
    } else {
      throw new Error(`${email} is already subscribed`);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

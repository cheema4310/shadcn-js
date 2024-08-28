'use server';

import Subscribers from '@/models/subs-model';

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
    } else {
      throw new Error(`${email} is already subscribed`);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

import { replaceMongoIdInArray } from '@/lib/transform';
import Subscribers from '@/models/subs-model';

export default async function getSubscribers() {
  try {
    const subscribers = await Subscribers.find({}).lean();
    return replaceMongoIdInArray(subscribers);
  } catch (error) {
    throw new Error(error.message);
  }
}

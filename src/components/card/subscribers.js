import { Card, CardContent } from '@/components/ui/card';
import getSubscribers from '@/queries';

export default async function Subscribers() {
  const subs = await getSubscribers();

  return (
    <div className="flex flex-col justify-center items-center gap-2 my-4">
      {subs.map((sub) => (
        <Card key={sub.id}>
          <CardContent className="flex flex-col justify-center p-2">
            <p>{sub.name} Subscribed.</p>
            <p>
              Last Subscription at:{' '}
              {new Intl.DateTimeFormat('en-us').format(sub.createdAt)}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

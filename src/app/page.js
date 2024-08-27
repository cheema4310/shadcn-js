import Subscribers from '@/components/card/subscribers';
import SubcriptionForm from '@/components/form/subscription-form';

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row justify-around p-4">
      <SubcriptionForm />
      <Subscribers />
    </main>
  );
}

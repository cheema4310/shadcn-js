import { ModeToggle } from '../theme-switcher';

export default function Navbar() {
  return (
    <div className="p-4 flex justify-around items-center">
      <div>Subcription Form</div>
      <ModeToggle />
    </div>
  );
}

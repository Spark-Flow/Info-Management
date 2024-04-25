import { UserButton } from "@clerk/nextjs";

const TopNavbarComponent = () => {
  return (
    <div className="sticky top-0 bg-red-500 w-full px-4">
      <div className="flex justify-between items-center p-4">
        <div className="text-white font-bold text-lg">
          4SDA&apos;s Info Management System
        </div>
        <UserButton />
      </div>
    </div>
  );
}

export default TopNavbarComponent;
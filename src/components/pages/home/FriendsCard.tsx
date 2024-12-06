import { NoProfile } from "@/components/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define the Friend type
export type Friend = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileUrl?: string;  // Optional, since some friends might not have a profile picture
  location?: string;  // Optional, if the friend doesn't have a location
  profession?: string;  // Optional, if the friend doesn't have a profession
  friends: string[];  // List of IDs of friends
  views: string[];  // List of IDs of people who have viewed the friend's profile
  verified: boolean;  // Indicates if the friend is verified
  createdAt: string;  // Date when the friend was added
  updatedAt: string;  // Date when the friend's information was last updated
  __v: number;  // Version key (often used by MongoDB)
};

type FriendsCardProps = {
  friends: Friend[];  // The prop that expects an array of Friend objects
};

const FriendsCard: React.FC<FriendsCardProps> = ({ friends }) => {
  return (
    <div>
      <div className='w-full bg-primary shadow-sm rounded-lg px-6 py-5'>
        <div className='flex items-center justify-between text-ascent-1 pb-2 border-b border-[#66666645]'>
          <span> Friends</span>
          <span>{friends?.length}</span>
        </div>

        <div className='w-full flex flex-col gap-4 pt-4'>
          {friends?.map((friend) => (
            <Link
              href={"/profile/" + friend?._id}
              key={friend?._id}
              className='w-full flex gap-4 items-center cursor-pointer'
            >
              <Image
  src={friend?.profileUrl ?? NoProfile} // This will work if NoProfile is StaticImageData
  alt={friend?.firstName}
  width={40}  // Specify width and height when using Image component
  height={40}
  className='object-cover rounded-full'
/>
              <div className='flex-1'>
                <p className='text-base font-medium text-ascent-1'>
                  {friend?.firstName} {friend?.lastName}
                </p>
                <span className='text-sm text-ascent-2'>
                  {friend?.profession ?? "No Profession"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsCard;

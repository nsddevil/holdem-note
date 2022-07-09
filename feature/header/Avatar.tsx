import Image from "next/image";
import React from "react";
import { MdPerson } from "react-icons/md";

interface AvatarProps {
  image?: string;
  email: string;
  size?: number;
  alt?: string;
}

function Avatar({ image, email, size = 30, alt = "/" }: AvatarProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {image ? (
        <Image
          src={image}
          width={size}
          height={size}
          alt={alt}
          className="rounded-full"
        />
      ) : (
        <MdPerson size={size} />
      )}

      <span className="text-sm text-gray-500">{email}</span>
    </div>
  );
}

export default Avatar;

import React from 'react';
import Image from "next/image";
export default function Profile() {
  return (
    <Image
    src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
    className="w-32 rounded-full"
    alt="Avatar" />
  );
}
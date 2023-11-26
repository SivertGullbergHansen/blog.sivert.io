import Image from "next/image";
import React from "react";
import iconList from "iconList.json";

export function CustomEmoji({ name }: { name: string }) {
  if (!Object.keys(iconList).includes(name)) return null;

  return (
    <span className="inline-block align-sub">
      <Image
        src={`/images/icons/${iconList[name]}`}
        width={24}
        height={24}
        className="h-[1.2em] w-auto !m-0 !p-0"
        alt=""
      />
    </span>
  );
}

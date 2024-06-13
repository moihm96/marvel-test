import Image from "next/image";

export const FavIConOff = () => {
  return (
    <Image
      src="/favIconOff.svg"
      alt="Favorite Icon Off"
      width={24}
      height={22}
      priority
    />
  );
};

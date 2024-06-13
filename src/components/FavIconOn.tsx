import Image from "next/image";

export const FavIconOn = () => {
  return (
    <Image
      src="/favIconOn.svg"
      alt="Favorite Icon On"
      width={24}
      height={22}
      priority
    />
  );
};

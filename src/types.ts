type thumbnail = {
  path: string;
  extension: string;
};
export type Character = {
  id: number;
  name: string;
  description: string;
  thumbnail: thumbnail;
};

export type Comic = {
  id: number;
  title: string;
  thumbnail: thumbnail;
};

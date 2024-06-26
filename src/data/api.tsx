import { Character, Comic } from '@/types';
import { MD5 } from 'crypto-js';

const API_URL = process.env.MARVEL_APP_BASE_URL;

const ts = new Date().getTime();
const apiKey = process.env.MARVEL_APP_API_KEY ?? '';
const privateKey = process.env.MARVEL_APP_PRIVATE_KEY ?? '';
const stringToHash = ts + privateKey + apiKey;
const hash = MD5(stringToHash);
const limit = 50;

const query = `ts=${ts}&apikey=${apiKey}&hash=${hash}`;

export const urlCharacters = `${API_URL}/characters?limit=${limit}&${query}`;

export const fetchCharacters = async () => {
  const response = await fetch(urlCharacters);
  try {
    const data = await response.json();

    return {
      characters: data.data.results as Character[],
      count: data.data.count as number,
    };
  } catch (error) {
    throw new Error(`There is a problem fetching data from Marvel's APi`);
  }
};

export const searchCharacters = async (querySearch: string) => {
  const url = `${API_URL}/characters?nameStartsWith=${querySearch}&limit=${limit}&${query}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      characters: data.data.results as Character[],
      count: data.data.count as number,
    };
  } catch (error) {
    throw new Error(
      'There is no character for the search or network search is not working properly',
    );
  }
};

export const fetchCharacter = async (id: string) => {
  const url = `${API_URL}/characters/${id}?${query}`;

  try {
    const responseCharacter = await fetch(url);
    const character = await responseCharacter.json();

    const urlComic = `${API_URL}/characters/${id}/comics?limit=20&${query}`;

    const responseComics = await fetch(urlComic);
    const comics = await responseComics.json();

    return {
      character: character.data.results[0] as Character,
      comics: comics.data.results as Comic[],
    };
  } catch (error) {
    throw new Error('Character not found or bad typed');
  }
};

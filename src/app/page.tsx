import Characters from '@/components/Characters';
import { fetchCharacters } from '@/data/api';

export default async function Home() {
  const { characters } = await fetchCharacters();
  return <Characters characters={characters} />;
}

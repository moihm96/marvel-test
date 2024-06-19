import Characters from '@/components/Characters';

import { searchCharacters } from '@/data/api';

export default async function SearchesPage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;
  const { characters } = await searchCharacters(name);

  return <Characters characters={characters} />;
}

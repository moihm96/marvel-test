import CharacterDetail from '@/components/CharacterDetail';
import { fetchCharacter } from '@/data/api';

export default async function CharacterPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const { character, comics } = await fetchCharacter(id);
  return (
    <div>
      <CharacterDetail character={character} comics={comics} />
    </div>
  );
}

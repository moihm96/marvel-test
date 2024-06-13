import { fetchCharacter } from "@/data/api";

export default async function CharacterPage({ params }: any) {
  const { id } = params;
  const { character, comics } = await fetchCharacter(id);
  return <div>Hola {character.name}</div>;
}

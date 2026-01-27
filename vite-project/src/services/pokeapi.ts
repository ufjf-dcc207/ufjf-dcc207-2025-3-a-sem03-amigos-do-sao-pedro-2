import type { Pokemon, PokemonType, PokemonStat } from '../pokedexData';

const BASE_URL = 'https://pokeapi.co/api/v2';

const typeMapping: Record<string, PokemonType> = {
  grass: 'Grama',
  poison: 'Venenoso',
  fire: 'Fogo',
  water: 'Água',
  electric: 'Elétrico',
  bug: 'Inseto',
  ground: 'Terra',
  rock: 'Pedra',
  ice: 'Gelo',
  flying: 'Voador',
  psychic: 'Psíquico',
  normal: 'Normal',
  dragon: 'Dragão',
  fairy: 'Fada',
  fighting: 'Lutador',
  ghost: 'Fantasma',
};

const statMapping: Record<string, PokemonStat['nome']> = {
  'hp': 'HP',
  'attack': 'ATK',
  'defense': 'DEF',
  'special-attack': 'Sp.ATK',
  'special-defense': 'Sp.DEF',
  'speed': 'SPEED',
};

const typeAdvantages: Record<PokemonType, PokemonType[]> = {
  'Água': ['Fogo', 'Terra', 'Pedra'],
  'Fogo': ['Grama', 'Inseto', 'Gelo'],
  'Elétrico': ['Água', 'Voador'],
  'Grama': ['Água', 'Terra', 'Pedra'],
  'Venenoso': ['Grama', 'Fada'],
  'Inseto': ['Grama', 'Psíquico'],
  'Terra': ['Fogo', 'Elétrico', 'Pedra', 'Venenoso'],
  'Pedra': ['Fogo', 'Inseto', 'Voador', 'Gelo'],
  'Gelo': ['Grama', 'Terra', 'Voador', 'Dragão'],
  'Voador': ['Grama', 'Inseto', 'Lutador'],
  'Psíquico': ['Lutador', 'Venenoso'],
  'Normal': [],
  'Dragão': ['Dragão'],
  'Fada': ['Lutador', 'Dragão'],
  'Lutador': ['Normal', 'Pedra', 'Gelo'],
  'Fantasma': ['Psíquico', 'Fantasma'],
};

const typeWeaknesses: Record<PokemonType, PokemonType[]> = {
  'Água': ['Elétrico', 'Grama'],
  'Fogo': ['Água', 'Terra', 'Pedra'],
  'Elétrico': ['Terra'],
  'Grama': ['Fogo', 'Inseto', 'Voador', 'Venenoso', 'Gelo'],
  'Venenoso': ['Terra', 'Psíquico'],
  'Inseto': ['Fogo', 'Voador', 'Pedra'],
  'Terra': ['Água', 'Grama', 'Gelo'],
  'Pedra': ['Água', 'Grama', 'Lutador', 'Terra'],
  'Gelo': ['Fogo', 'Lutador', 'Pedra'],
  'Voador': ['Elétrico', 'Gelo', 'Pedra'],
  'Psíquico': ['Inseto', 'Fantasma'],
  'Normal': ['Lutador'],
  'Dragão': ['Gelo', 'Dragão', 'Fada'],
  'Fada': ['Venenoso'],
  'Lutador': ['Voador', 'Psíquico', 'Fada'],
  'Fantasma': ['Fantasma'],
};

export async function fetchPokemonDetails(idOrName: string | number): Promise<Pokemon> {
  const response = await fetch(`${BASE_URL}/pokemon/${idOrName}`);
  
  if (!response.ok) {
    throw new Error(`Erro ao buscar Pokémon ${idOrName}: ${response.statusText}`);
  }
  
  const data = await response.json();
  
  const tipos: PokemonType[] = data.types.map((t: any) => 
    typeMapping[t.type.name] || 'Normal'
  );
  
  const estatisticas: PokemonStat[] = data.stats.map((s: any) => ({
    nome: statMapping[s.stat.name] || 'HP',
    valor: s.base_stat,
  }));

  const vantagens = Array.from(new Set(tipos.flatMap(t => typeAdvantages[t] || [])));
  const fraquezas = Array.from(new Set(tipos.flatMap(t => typeWeaknesses[t] || [])));

  const imagemUrl = 
    data.sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default ||
    data.sprites.front_default ||
    '';

  return {
    id: data.id,
    instanceId: data.id,
    nome: data.name.charAt(0).toUpperCase() + data.name.slice(1),
    numero: `#${String(data.id).padStart(3, '0')}`,
    imagemUrl,
    tipos,
    estatisticas,
    fraquezas,
    vantagens,
    selecionado: false,
  };
}


export async function fetchMultiplePokemons(ids: number[]): Promise<Pokemon[]> {
  const promises = ids.map(id => fetchPokemonDetails(id));
  return Promise.all(promises);
}

export async function fetchPokemons(limit: number = 151, offset: number = 0): Promise<Pokemon[]> {
  // Gerar IDs baseados no offset e limit
  const ids = Array.from({ length: limit }, (_, i) => offset + i + 1);
  return fetchMultiplePokemons(ids);
}

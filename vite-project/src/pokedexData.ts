export type PokemonType = 'Grama' | 'Venenoso' | 'Fogo' | 'Água' | 'Elétrico' | 'Inseto' | 'Terra' | 'Pedra' | 'Gelo' | 'Voador' | 'Psíquico' | 'Normal' | 'Dragão' | 'Fada' | 'Lutador' | 'Fantasma';

export interface PokemonStat {
  nome: 'HP' | 'ATK' | 'DEF' | 'Sp.ATK' | 'Sp.DEF' | 'SPEED';
  valor: number;
}

export interface Pokemon {
  id: number;
  instanceId: number;
  nome: string;
  numero: string;
  imagemUrl: string;
  tipos: PokemonType[];
  estatisticas: PokemonStat[];
  fraquezas: PokemonType[];
  vantagens: PokemonType[];
  selecionado: boolean;
}

export const todosPokemons: Pokemon[] = [
  {
    id: 7, instanceId: 1, nome: 'Squirtle', numero: '#007', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
    tipos: ['Água'],
    estatisticas: [ 
      { nome: 'HP', valor: 44 }, { nome: 'ATK', valor: 48 }, { nome: 'DEF', valor: 65 },
      { nome: 'Sp.ATK', valor: 50 }, { nome: 'Sp.DEF', valor: 64 }, { nome: 'SPEED', valor: 43 },
    ],
    fraquezas: ['Elétrico', 'Grama'],
    vantagens: ['Fogo', 'Terra', 'Pedra'],
  },
  {
    id: 8, instanceId: 2, nome: 'Wartortle', numero: '#008', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif',
    tipos: ['Água'],
    estatisticas: [
      { nome: 'HP', valor: 59 }, { nome: 'ATK', valor: 63 }, { nome: 'DEF', valor: 80 },
      { nome: 'Sp.ATK', valor: 65 }, { nome: 'Sp.DEF', valor: 80 }, { nome: 'SPEED', valor: 58 },
    ],
    fraquezas: ['Elétrico', 'Grama'],
    vantagens: ['Fogo', 'Terra', 'Pedra'],
  },
 {
    id: 25, instanceId: 3, nome: 'Pikachu', numero: '#025', selecionado: true,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif',
    tipos: ['Elétrico'],
    estatisticas: [
      { nome: 'HP', valor: 65 }, { nome: 'ATK', valor: 45 }, { nome: 'DEF', valor: 50 },
      { nome: 'Sp.ATK', valor: 40 }, { nome: 'Sp.DEF', valor: 30 }, { nome: 'SPEED', valor: 70 },
    ],
    fraquezas: ['Terra'],
    vantagens: ['Água', 'Voador'],
  },
  {
    id: 7, instanceId: 4, nome: 'Squirtle', numero: '#007', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
    tipos: ['Água'],
    estatisticas: [ 
      { nome: 'HP', valor: 64 }, { nome: 'ATK', valor: 68 }, { nome: 'DEF', valor: 39 },
      { nome: 'Sp.ATK', valor: 50 }, { nome: 'Sp.DEF', valor: 54 }, { nome: 'SPEED', valor: 48 },
    ],
    fraquezas: ['Elétrico', 'Grama'],
    vantagens: ['Fogo', 'Terra', 'Pedra'],
  },
  {
    id: 94, instanceId: 5, nome: 'Gengar', numero: '#094', selecionado: true,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif',
    tipos: ['Fantasma', 'Venenoso'],
    estatisticas: [
      { nome: 'HP', valor: 60 }, { nome: 'ATK', valor: 65 }, { nome: 'DEF', valor: 60 },
      { nome: 'Sp.ATK', valor: 130 }, { nome: 'Sp.DEF', valor: 75 }, { nome: 'SPEED', valor: 110 },
    ],
    fraquezas: ['Fantasma', 'Psíquico'],
    vantagens: ['Grama', 'Fada'],
  },
  // Gengar - variação 1 (HP aumentado, SPEED diminuído)
  {
    id: 94, instanceId: 6, nome: 'Gengar', numero: '#094', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif',
    tipos: ['Fantasma', 'Venenoso'],
    estatisticas: [
      { nome: 'HP', valor: 70 }, { nome: 'ATK', valor: 70 }, { nome: 'DEF', valor: 62 },
      { nome: 'Sp.ATK', valor: 135 }, { nome: 'Sp.DEF', valor: 78 }, { nome: 'SPEED', valor: 100 },
    ],
    fraquezas: ['Fantasma', 'Psíquico'],
    vantagens: ['Grama', 'Fada'],
  },
  // Gengar - variação 2
  {
    id: 94, instanceId: 7, nome: 'Gengar', numero: '#094', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif',
    tipos: ['Fantasma', 'Venenoso'],
    estatisticas: [
      { nome: 'HP', valor: 80 }, { nome: 'ATK', valor: 75 }, { nome: 'DEF', valor: 65 },
      { nome: 'Sp.ATK', valor: 140 }, { nome: 'Sp.DEF', valor: 80 }, { nome: 'SPEED', valor: 90 },
    ],
    fraquezas: ['Fantasma', 'Psíquico'],
    vantagens: ['Grama', 'Fada'],
  },
  // Gengar - variação 3
  {
    id: 94, instanceId: 8, nome: 'Gengar', numero: '#094', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif',
    tipos: ['Fantasma', 'Venenoso'],
    estatisticas: [
      { nome: 'HP', valor: 90 }, { nome: 'ATK', valor: 80 }, { nome: 'DEF', valor: 68 },
      { nome: 'Sp.ATK', valor: 145 }, { nome: 'Sp.DEF', valor: 82 }, { nome: 'SPEED', valor: 80 },
    ],
    fraquezas: ['Fantasma', 'Psíquico'],
    vantagens: ['Grama', 'Fada'],
  },

  // Dragonite (modelo original)
  {
    id: 149, instanceId: 9, nome: 'Dragonite', numero: '#149', selecionado: true,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif',
    tipos: ['Dragão', 'Voador'],
    estatisticas: [
      { nome: 'HP', valor: 91 }, { nome: 'ATK', valor: 134 }, { nome: 'DEF', valor: 95 },
      { nome: 'Sp.ATK', valor: 100 }, { nome: 'Sp.DEF', valor: 100 }, { nome: 'SPEED', valor: 80 },
    ],
    fraquezas: ['Gelo', 'Dragão', 'Pedra'],
    vantagens: ['Fogo', 'Inseto', 'Grama'],
  },
  // Dragonite - variação 1
  {
    id: 149, instanceId: 10, nome: 'Dragonite', numero: '#149', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif',
    tipos: ['Dragão', 'Voador'],
    estatisticas: [
      { nome: 'HP', valor: 101 }, { nome: 'ATK', valor: 134 }, { nome: 'DEF', valor: 95 },
      { nome: 'Sp.ATK', valor: 100 }, { nome: 'Sp.DEF', valor: 100 }, { nome: 'SPEED', valor: 70 },
    ],
    fraquezas: ['Gelo', 'Dragão', 'Pedra'],
    vantagens: ['Fogo', 'Inseto', 'Grama'],
  },
  // Dragonite - variação 2
  {
    id: 149, instanceId: 11, nome: 'Dragonite', numero: '#149', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif',
    tipos: ['Dragão', 'Voador'],
    estatisticas: [
      { nome: 'HP', valor: 111 }, { nome: 'ATK', valor: 134 }, { nome: 'DEF', valor: 96 },
      { nome: 'Sp.ATK', valor: 100 }, { nome: 'Sp.DEF', valor: 100 }, { nome: 'SPEED', valor: 60 },
    ],
    fraquezas: ['Gelo', 'Dragão', 'Pedra'],
    vantagens: ['Fogo', 'Inseto', 'Grama'],
  },
  // Dragonite - variação 3
  {
    id: 149, instanceId: 12, nome: 'Dragonite', numero: '#149', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif',
    tipos: ['Dragão', 'Voador'],
    estatisticas: [
      { nome: 'HP', valor: 121 }, { nome: 'ATK', valor: 135 }, { nome: 'DEF', valor: 97 },
      { nome: 'Sp.ATK', valor: 101 }, { nome: 'Sp.DEF', valor: 101 }, { nome: 'SPEED', valor: 50 },
    ],
    fraquezas: ['Gelo', 'Dragão', 'Pedra'],
    vantagens: ['Fogo', 'Inseto', 'Grama'],
  },

  // Jigglypuff (modelo original)
  {
    id: 39, instanceId: 13, nome: 'Jigglypuff', numero: '#039', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif',
    tipos: ['Normal', 'Fada'],
    estatisticas: [
      { nome: 'HP', valor: 115 }, { nome: 'ATK', valor: 45 }, { nome: 'DEF', valor: 20 },
      { nome: 'Sp.ATK', valor: 45 }, { nome: 'Sp.DEF', valor: 25 }, { nome: 'SPEED', valor: 20 },
    ],
    fraquezas: ['Lutador', 'Fantasma'],
    vantagens: ['Grama', 'Fada'],
  },
  // Jigglypuff - variação 1
  {
    id: 39, instanceId: 14, nome: 'Jigglypuff', numero: '#039', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif',
    tipos: ['Normal', 'Fada'],
    estatisticas: [
      { nome: 'HP', valor: 125 }, { nome: 'ATK', valor: 46 }, { nome: 'DEF', valor: 21 },
      { nome: 'Sp.ATK', valor: 46 }, { nome: 'Sp.DEF', valor: 26 }, { nome: 'SPEED', valor: 18 },
    ],
    fraquezas: ['Lutador', 'Fantasma'],
    vantagens: ['Grama', 'Fada'],
  },
  {
    id: 39, instanceId: 15, nome: 'Jigglypuff', numero: '#039', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif',
    tipos: ['Normal', 'Fada'],
    estatisticas: [
      { nome: 'HP', valor: 135 }, { nome: 'ATK', valor: 47 }, { nome: 'DEF', valor: 22 },
      { nome: 'Sp.ATK', valor: 47 }, { nome: 'Sp.DEF', valor: 27 }, { nome: 'SPEED', valor: 16 },
    ],
    fraquezas: ['Lutador', 'Fantasma'],
    vantagens: ['Grama', 'Fada'],
  },
  {
    id: 39, instanceId: 16, nome: 'Jigglypuff', numero: '#039', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif',
    tipos: ['Normal', 'Fada'],
    estatisticas: [
      { nome: 'HP', valor: 145 }, { nome: 'ATK', valor: 48 }, { nome: 'DEF', valor: 23 },
      { nome: 'Sp.ATK', valor: 48 }, { nome: 'Sp.DEF', valor: 28 }, { nome: 'SPEED', valor: 14 },
    ],
    fraquezas: ['Lutador', 'Fantasma'],
    vantagens: ['Grama', 'Fada'],
  },

  // Gyarados (modelo original)
  {
    id: 130, instanceId: 17, nome: 'Gyarados', numero: '#130', selecionado: true,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif',
    tipos: ['Água', 'Voador'],
    estatisticas: [
      { nome: 'HP', valor: 95 }, { nome: 'ATK', valor: 125 }, { nome: 'DEF', valor: 79 },
      { nome: 'Sp.ATK', valor: 60 }, { nome: 'Sp.DEF', valor: 100 }, { nome: 'SPEED', valor: 81 },
    ],
    fraquezas: ['Elétrico', 'Pedra'],
    vantagens: ['Fogo', 'Água', 'Terra'],
  },
  // Gyarados - variação 1
  {
    id: 130, instanceId: 18, nome: 'Gyarados', numero: '#130', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif',
    tipos: ['Água', 'Voador'],
    estatisticas: [
      { nome: 'HP', valor: 105 }, { nome: 'ATK', valor: 127 }, { nome: 'DEF', valor: 80 },
      { nome: 'Sp.ATK', valor: 62 }, { nome: 'Sp.DEF', valor: 102 }, { nome: 'SPEED', valor: 71 },
    ],
    fraquezas: ['Elétrico', 'Pedra'],
    vantagens: ['Fogo', 'Água', 'Terra'],
  },
  // Gyarados - variação 2
  {
    id: 130, instanceId: 19, nome: 'Gyarados', numero: '#130', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif',
    tipos: ['Água', 'Voador'],
    estatisticas: [
      { nome: 'HP', valor: 115 }, { nome: 'ATK', valor: 129 }, { nome: 'DEF', valor: 81 },
      { nome: 'Sp.ATK', valor: 64 }, { nome: 'Sp.DEF', valor: 104 }, { nome: 'SPEED', valor: 61 },
    ],
    fraquezas: ['Elétrico', 'Pedra'],
    vantagens: ['Fogo', 'Água', 'Terra'],
  },
  // Gyarados - variação 3
  {
    id: 130, instanceId: 20, nome: 'Gyarados', numero: '#130', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif',
    tipos: ['Água', 'Voador'],
    estatisticas: [
      { nome: 'HP', valor: 125 }, { nome: 'ATK', valor: 131 }, { nome: 'DEF', valor: 82 },
      { nome: 'Sp.ATK', valor: 66 }, { nome: 'Sp.DEF', valor: 106 }, { nome: 'SPEED', valor: 51 },
    ],
    fraquezas: ['Elétrico', 'Pedra'],
    vantagens: ['Fogo', 'Água', 'Terra'],
  },
  {
    id: 7, instanceId: 30, nome: 'Squirtle', numero: '#007', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
    tipos: ['Água'],
    estatisticas: [ 
      { nome: 'HP', valor: 44 }, { nome: 'ATK', valor: 48 }, { nome: 'DEF', valor: 65 },
      { nome: 'Sp.ATK', valor: 50 }, { nome: 'Sp.DEF', valor: 64 }, { nome: 'SPEED', valor: 43 },
    ],
    fraquezas: ['Elétrico', 'Grama'],
    vantagens: ['Fogo', 'Terra', 'Pedra'],
  },
  {
    id: 7, instanceId: 21, nome: 'Squirtle', numero: '#007', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
    tipos: ['Água'],
    estatisticas: [ 
      { nome: 'HP', valor: 63 }, { nome: 'ATK', valor: 45 }, { nome: 'DEF', valor: 39 },
      { nome: 'Sp.ATK', valor: 40 }, { nome: 'Sp.DEF', valor: 44 }, { nome: 'SPEED', valor: 53 },
    ],
    fraquezas: ['Elétrico', 'Grama'],
    vantagens: ['Fogo', 'Terra', 'Pedra'],
  },
  {
    id: 7, instanceId: 22, nome: 'Squirtle', numero: '#007', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
    tipos: ['Água'],
    estatisticas: [ 
      { nome: 'HP', valor: 44 }, { nome: 'ATK', valor: 48 }, { nome: 'DEF', valor: 65 },
      { nome: 'Sp.ATK', valor: 50 }, { nome: 'Sp.DEF', valor: 64 }, { nome: 'SPEED', valor: 43 },
    ],
    fraquezas: ['Elétrico', 'Grama'],
    vantagens: ['Fogo', 'Terra', 'Pedra'],
  },
  {
    id: 8, instanceId: 23, nome: 'Wartortle', numero: '#008', selecionado: true,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif',
    tipos: ['Água'],
    estatisticas: [
      { nome: 'HP', valor: 59 }, { nome: 'ATK', valor: 63 }, { nome: 'DEF', valor: 80 },
      { nome: 'Sp.ATK', valor: 65 }, { nome: 'Sp.DEF', valor: 80 }, { nome: 'SPEED', valor: 58 },
    ],
    fraquezas: ['Elétrico', 'Grama'],
    vantagens: ['Fogo', 'Terra', 'Pedra'],
  },
   {
    id: 8, instanceId: 24, nome: 'Wartortle', numero: '#008', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif',
    tipos: ['Água'],
    estatisticas: [
      { nome: 'HP', valor: 59 }, { nome: 'ATK', valor: 63 }, { nome: 'DEF', valor: 80 },
      { nome: 'Sp.ATK', valor: 65 }, { nome: 'Sp.DEF', valor: 80 }, { nome: 'SPEED', valor: 58 },
    ],
    fraquezas: ['Elétrico', 'Grama'],
    vantagens: ['Fogo', 'Terra', 'Pedra'],
  },
  {
    id: 8, instanceId: 25, nome: 'Wartortle', numero: '#008', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif',
    tipos: ['Água'],
    estatisticas: [
      { nome: 'HP', valor: 59 }, { nome: 'ATK', valor: 63 }, { nome: 'DEF', valor: 80 },
      { nome: 'Sp.ATK', valor: 65 }, { nome: 'Sp.DEF', valor: 80 }, { nome: 'SPEED', valor: 58 },
    ],
    fraquezas: ['Elétrico', 'Grama'],
    vantagens: ['Fogo', 'Terra', 'Pedra'],
  },
  {
    id: 8, instanceId: 26, nome: 'Wartortle', numero: '#008', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif',
    tipos: ['Água'],
    estatisticas: [
      { nome: 'HP', valor: 59 }, { nome: 'ATK', valor: 63 }, { nome: 'DEF', valor: 80 },
      { nome: 'Sp.ATK', valor: 65 }, { nome: 'Sp.DEF', valor: 80 }, { nome: 'SPEED', valor: 58 },
    ],
    fraquezas: ['Elétrico', 'Grama'],
    vantagens: ['Fogo', 'Terra', 'Pedra'],
  },
  {
    id: 344, instanceId: 27, nome: 'Clamperl', numero: '#344', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/clamperl.gif',
    tipos: ['Água'],
    estatisticas: [
      { nome: 'HP', valor: 35 }, { nome: 'ATK', valor: 64 }, { nome: 'DEF', valor: 85 },
      { nome: 'Sp.ATK', valor: 74 }, { nome: 'Sp.DEF', valor: 55 }, { nome: 'SPEED', valor: 32 },
    ],
    fraquezas: ['Elétrico', 'Grama'],
    vantagens: ['Fogo', 'Terra', 'Pedra'],
  },
  {
    id: 176, instanceId: 28, nome: 'Togetic', numero: '#176', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/togetic.gif',
    tipos: ['Fada', 'Voador'],
    estatisticas: [
      { nome: 'HP', valor: 55 }, { nome: 'ATK', valor: 40 }, { nome: 'DEF', valor: 85 },
      { nome: 'Sp.ATK', valor: 80 }, { nome: 'Sp.DEF', valor: 105 }, { nome: 'SPEED', valor: 40 },
    ],
    fraquezas: ['Elétrico', 'Gelo', 'Pedra'],
    vantagens: ['Lutador', 'Inseto', 'Fada'],
  },
  {
    id: 500, instanceId: 29, nome: 'Emolga', numero: '#500', selecionado: true,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/emolga.gif',
    tipos: ['Elétrico', 'Voador'],
    estatisticas: [
      { nome: 'HP', valor: 55 }, { nome: 'ATK', valor: 75 }, { nome: 'DEF', valor: 60 },
      { nome: 'Sp.ATK', valor: 75 }, { nome: 'Sp.DEF', valor: 60 }, { nome: 'SPEED', valor: 103 },
    ],
    fraquezas: ['Gelo', 'Terra', 'Pedra'],
    vantagens: ['Água', 'Voador', 'Lutador'],
  },
];
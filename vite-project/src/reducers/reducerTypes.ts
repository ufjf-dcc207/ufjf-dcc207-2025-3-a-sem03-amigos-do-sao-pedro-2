import type { Pokemon } from '../pokedexData';

export interface FiltersState {
  filterType: string;
  filterMinHP: number;
  filterMinATK: number;
  filterMinDEF: number;
  filterMinSpATK: number;
  filterMinSpDEF: number;
  filterMinSpeed: number;
  filterVantagem: string;
  filterFraqueza: string;
  filterBusca: string;
}

export type FiltersAction =
  | { type: 'SET_FILTER_TYPE'; payload: string }
  | { type: 'SET_FILTER_MIN_HP'; payload: number }
  | { type: 'SET_FILTER_MIN_ATK'; payload: number }
  | { type: 'SET_FILTER_MIN_DEF'; payload: number }
  | { type: 'SET_FILTER_MIN_SPATK'; payload: number }
  | { type: 'SET_FILTER_MIN_SPDEF'; payload: number }
  | { type: 'SET_FILTER_MIN_SPEED'; payload: number }
  | { type: 'SET_FILTER_VANTAGEM'; payload: string }
  | { type: 'SET_FILTER_FRAQUEZA'; payload: string }
  | { type: 'SET_FILTER_BUSCA'; payload: string }
  | { type: 'CLEAR_FILTERS' };

export type PokemonsAction =
  | { type: 'MOVE_POKEMON'; payload: { instanceId: number; selecionado: boolean } }
  | { type: 'SET_ALL'; payload: Pokemon[] };


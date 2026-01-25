import type { Pokemon } from '../pokedexData';
import type { PokemonsAction } from './reducerTypes';

export function pokemonsReducer(
  state: Pokemon[],
  action: PokemonsAction
): Pokemon[] {
  switch (action.type) {
    case 'MOVE_POKEMON':
      return state.map(p =>
        p.instanceId === action.payload.instanceId
          ? { ...p, selecionado: action.payload.selecionado }
          : p
      );

    case 'SET_ALL':
      return action.payload;

    default:
      return state;
  }
}


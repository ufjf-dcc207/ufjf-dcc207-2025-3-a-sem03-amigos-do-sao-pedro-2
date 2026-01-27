import type { PokemonsAction, PokemonsState } from './reducerTypes';

export function pokemonsReducer(
  state: PokemonsState,
  action: PokemonsAction
): PokemonsState {
  switch (action.type) {
    case 'MOVE_POKEMON':
      return {
        ...state,
        pokemons: state.pokemons.map(p =>
          p.instanceId === action.payload.instanceId
            ? { ...p, selecionado: action.payload.selecionado }
            : p
        ),
      };

    case 'SET_ALL':
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
        error: null,
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case 'LOAD_POKEMONS_SUCCESS':
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
        error: null,
      };

    case 'LOAD_POKEMONS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}


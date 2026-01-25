import type { FiltersState, FiltersAction } from './reducerTypes';

export const initialFiltersState: FiltersState = {
  filterType: '',
  filterMinHP: 0,
  filterMinATK: 0,
  filterMinDEF: 0,
  filterMinSpATK: 0,
  filterMinSpDEF: 0,
  filterMinSpeed: 0,
  filterVantagem: '',
  filterFraqueza: '',
  filterBusca: ''
};

export function filtersReducer(
  state: FiltersState,
  action: FiltersAction
): FiltersState {
  switch (action.type) {
    case 'SET_FILTER_TYPE':
      return { ...state, filterType: action.payload };

    case 'SET_FILTER_MIN_HP':
      return { ...state, filterMinHP: action.payload };

    case 'SET_FILTER_MIN_ATK':
      return { ...state, filterMinATK: action.payload };

    case 'SET_FILTER_MIN_DEF':
      return { ...state, filterMinDEF: action.payload };

    case 'SET_FILTER_MIN_SPATK':
      return { ...state, filterMinSpATK: action.payload };

    case 'SET_FILTER_MIN_SPDEF':
      return { ...state, filterMinSpDEF: action.payload };

    case 'SET_FILTER_MIN_SPEED':
      return { ...state, filterMinSpeed: action.payload };

    case 'SET_FILTER_VANTAGEM':
      return { ...state, filterVantagem: action.payload };

    case 'SET_FILTER_FRAQUEZA':
      return { ...state, filterFraqueza: action.payload };

    case 'SET_FILTER_BUSCA':
      return { ...state, filterBusca: action.payload };

    case 'CLEAR_FILTERS':
      return initialFiltersState;

    default:
      return state;
  }
}

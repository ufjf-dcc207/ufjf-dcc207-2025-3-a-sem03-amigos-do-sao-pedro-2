import { useRef, useEffect, useState } from 'react';
import type { PokemonType } from '../pokedexData';
import type { FiltersState, FiltersAction } from '../reducers/reducerTypes';
import './PCFilters.css';

interface PCFiltersProps {
  filtersState: FiltersState;
  dispatch: React.Dispatch<FiltersAction>;
  limparFiltros: () => void;
}

export function PCFilters({
  filtersState,
  dispatch,
  limparFiltros
}: PCFiltersProps) {
  const inputBuscaRef = useRef<HTMLInputElement>(null);
  const [buscaLocal, setBuscaLocal] = useState(filtersState.filterBusca);

  useEffect(() => {
    inputBuscaRef.current?.focus();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({
        type: 'SET_FILTER_BUSCA',
        payload: buscaLocal
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [buscaLocal, dispatch]);

  const tiposDisponiveis: PokemonType[] = [
    'Grama', 'Venenoso', 'Fogo', 'Água', 'Elétrico', 'Inseto',
    'Terra', 'Pedra', 'Gelo', 'Voador', 'Psíquico', 'Normal',
    'Dragão', 'Fada', 'Lutador', 'Fantasma'
  ];

  return (
    <div className="pc-filters">
      <h3 className="filters-title">Filtros</h3>

      <div className="filters-container">

        <div className="filter-group">
          <label htmlFor="filter-busca">Buscar:</label>
          <input
            ref={inputBuscaRef}
            id="filter-busca"
            type="text"
            placeholder="Nome ou número..."
            value={buscaLocal}
            onChange={(e) => setBuscaLocal(e.target.value)}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="filter-type">Tipo:</label>
          <select
            id="filter-type"
            value={filtersState.filterType}
            onChange={(e) =>
              dispatch({
                type: 'SET_FILTER_TYPE',
                payload: e.target.value
              })
            }
            className="filter-select"
          >
            <option value="">Todos</option>
            {tiposDisponiveis.map(tipo => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>HP mínimo:</label>
          <input
            type="number"
            min="0"
            max="200"
            value={filtersState.filterMinHP}
            onChange={(e) =>
              dispatch({
                type: 'SET_FILTER_MIN_HP',
                payload: Number(e.target.value)
              })
            }
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label>ATK mínimo:</label>
          <input
            type="number"
            min="0"
            max="200"
            value={filtersState.filterMinATK}
            onChange={(e) =>
              dispatch({
                type: 'SET_FILTER_MIN_ATK',
                payload: Number(e.target.value)
              })
            }
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label>DEF mínimo:</label>
          <input
            type="number"
            min="0"
            max="200"
            value={filtersState.filterMinDEF}
            onChange={(e) =>
              dispatch({
                type: 'SET_FILTER_MIN_DEF',
                payload: Number(e.target.value)
              })
            }
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label>Sp.ATK mínimo:</label>
          <input
            type="number"
            min="0"
            max="200"
            value={filtersState.filterMinSpATK}
            onChange={(e) =>
              dispatch({
                type: 'SET_FILTER_MIN_SPATK',
                payload: Number(e.target.value)
              })
            }
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label>Sp.DEF mínimo:</label>
          <input
            type="number"
            min="0"
            max="200"
            value={filtersState.filterMinSpDEF}
            onChange={(e) =>
              dispatch({
                type: 'SET_FILTER_MIN_SPDEF',
                payload: Number(e.target.value)
              })
            }
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label>SPEED mínimo:</label>
          <input
            type="number"
            min="0"
            max="200"
            value={filtersState.filterMinSpeed}
            onChange={(e) =>
              dispatch({
                type: 'SET_FILTER_MIN_SPEED',
                payload: Number(e.target.value)
              })
            }
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label>Vantagem contra:</label>
          <select
            value={filtersState.filterVantagem}
            onChange={(e) =>
              dispatch({
                type: 'SET_FILTER_VANTAGEM',
                payload: e.target.value
              })
            }
            className="filter-select"
          >
            <option value="">Nenhum</option>
            {tiposDisponiveis.map(tipo => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Fraco contra:</label>
          <select
            value={filtersState.filterFraqueza}
            onChange={(e) =>
              dispatch({
                type: 'SET_FILTER_FRAQUEZA',
                payload: e.target.value
              })
            }
            className="filter-select"
          >
            <option value="">Nenhum</option>
            {tiposDisponiveis.map(tipo => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>
        </div>

        <button
          onClick={limparFiltros}
          className="clear-filters-button"
        >
          Limpar Filtros
        </button>
      </div>
    </div>
  );
}

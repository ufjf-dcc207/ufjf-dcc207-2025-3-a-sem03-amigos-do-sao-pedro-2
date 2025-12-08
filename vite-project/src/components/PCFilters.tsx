import type { PokemonType } from '../pokedexData';
import './PCFilters.css';

interface PCFiltersProps {
  filterType: string;
  setFilterType: (tipo: string) => void;

  filterMinStat: number;
  setFilterMinStat: (valor: number) => void;
  
  filterVantagem: string;
  setFilterVantagem: (tipo: string) => void;

  filterFraqueza: string;
  setFilterFraqueza: (tipo: string) => void;
  
  limparFiltros: () => void;
}

export function PCFilters({
  filterType,
  setFilterType,
  filterMinStat,
  setFilterMinStat,
  filterVantagem,
  setFilterVantagem,
  filterFraqueza,
  setFilterFraqueza,
  limparFiltros
}: PCFiltersProps) {
  
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
          <label htmlFor="filter-type">Tipo:</label>
          <select 
            id="filter-type"
            value={filterType} 
            onChange={(e) => setFilterType(e.target.value)}
            className="filter-select"
          >
            <option value="">Todos</option>
            {tiposDisponiveis.map(tipo => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="filter-stat">Ataque mínimo:</label>
          <input 
            id="filter-stat"
            type="number" 
            min="0" 
            max="200"
            value={filterMinStat}
            onChange={(e) => setFilterMinStat(Number(e.target.value))}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="filter-vantagem">Vantagem contra:</label>
          <select 
            id="filter-vantagem"
            value={filterVantagem} 
            onChange={(e) => setFilterVantagem(e.target.value)}
            className="filter-select"
          >
            <option value="">Nenhum</option>
            {tiposDisponiveis.map(tipo => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="filter-fraqueza">Fraco contra:</label>
          <select 
            id="filter-fraqueza"
            value={filterFraqueza} 
            onChange={(e) => setFilterFraqueza(e.target.value)}
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

import { useReducer, useEffect } from 'react';
import './App.css';

import type { Pokemon } from './pokedexData';

import { DashboardColumn } from './components/DashboardColumn';
import { TeamPokemonCard } from './components/TeamPokemonCard';
import { PCPokemonIcon } from './components/PCPokemonIcon';
import { PCFilters } from './components/PCFilters';
import { Loading } from './components/Loading';
import { ErrorDisplay } from './components/ErrorDisplay';

import { filtersReducer, initialFiltersState } from './reducers/reducerFilters';
import { pokemonsReducer } from './reducers/reducerPokemons';
import { initialPokemonsState } from './reducers/reducerTypes';

import { fetchPokemons } from './services/pokeapi';

function App() {
  const [filtersState, filtersDispatch] = useReducer(
    filtersReducer,
    initialFiltersState
  );

  const [pokemonsState, pokemonsDispatch] = useReducer(
    pokemonsReducer,
    initialPokemonsState
  );

  // useEffect para carregar Pokémons do localStorage ou da API ao montar o componente
  useEffect(() => {
    const STORAGE_KEY = 'pokedex-pokemons';
    
    // Tentar carregar do localStorage primeiro
    const savedPokemons = localStorage.getItem(STORAGE_KEY);
    
    if (savedPokemons) {
      try {
        const parsedPokemons = JSON.parse(savedPokemons);
        pokemonsDispatch({ 
          type: 'LOAD_POKEMONS_SUCCESS', 
          payload: parsedPokemons 
        });
        return; // Se carregou do localStorage, não busca da API
      } catch (error) {
        console.error('Erro ao carregar do localStorage:', error);
        // Se falhar, continua para carregar da API
      }
    }

    // Se não há dados salvos, carrega da API
    async function loadPokemonsFromAPI() {
      pokemonsDispatch({ type: 'SET_LOADING', payload: true });

      try {
        const pokemonsData = await fetchPokemons(151, 0);
        
        pokemonsDispatch({ 
          type: 'LOAD_POKEMONS_SUCCESS', 
          payload: pokemonsData 
        });
      } catch (error) {
        const errorMessage = error instanceof Error 
          ? error.message 
          : 'Erro desconhecido ao carregar Pokémons';
        
        pokemonsDispatch({ 
          type: 'LOAD_POKEMONS_ERROR', 
          payload: errorMessage 
        });
      }
    }

    loadPokemonsFromAPI();
  }, []);

  // useEffect para salvar Pokémons no localStorage quando mudarem
  useEffect(() => {
    const STORAGE_KEY = 'pokedex-pokemons';
    
    // Só salva se não está carregando e não há erro
    if (!pokemonsState.loading && !pokemonsState.error && pokemonsState.pokemons.length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(pokemonsState.pokemons));
      } catch (error) {
        console.error('Erro ao salvar no localStorage:', error);
      }
    }
  }, [pokemonsState.pokemons, pokemonsState.loading, pokemonsState.error]); 

  function handleRetry() {
    pokemonsDispatch({ type: 'SET_ERROR', payload: null });
    
    async function retry() {
      pokemonsDispatch({ type: 'SET_LOADING', payload: true });
      
      try {
        const pokemonsData = await fetchPokemons(30, 0);
        pokemonsDispatch({ 
          type: 'LOAD_POKEMONS_SUCCESS', 
          payload: pokemonsData 
        });
      } catch (error) {
        const errorMessage = error instanceof Error 
          ? error.message 
          : 'Erro desconhecido ao carregar Pokémons';
        
        pokemonsDispatch({ 
          type: 'LOAD_POKEMONS_ERROR', 
          payload: errorMessage 
        });
      }
    }
    
    retry();
  }

  if (pokemonsState.loading) {
    return <Loading message="Carregando Pokémons da PokéAPI..." />;
  }

  if (pokemonsState.error) {
    return <ErrorDisplay message={pokemonsState.error} onRetry={handleRetry} />;
  }

  const pokemons = pokemonsState.pokemons;
  const equipePokemons = pokemons.filter((p: Pokemon) => p.selecionado);
  const boxPokemons = pokemons.filter((p: Pokemon) => !p.selecionado);

  const boxPokemonsFiltrados = boxPokemons.filter((pokemon: Pokemon) => {
    if (filtersState.filterBusca) {
      const busca = filtersState.filterBusca.toLowerCase();
      const nomeMatch = pokemon.nome.toLowerCase().includes(busca);
      const numeroMatch = pokemon.numero.toLowerCase().includes(busca);
      if (!nomeMatch && !numeroMatch) return false;
    }

    if (
      filtersState.filterType &&
      !pokemon.tipos.includes(filtersState.filterType as any)
    ) {
      return false;
    }

    const checks = [
      { nome: 'HP', min: filtersState.filterMinHP },
      { nome: 'ATK', min: filtersState.filterMinATK },
      { nome: 'DEF', min: filtersState.filterMinDEF },
      { nome: 'Sp.ATK', min: filtersState.filterMinSpATK },
      { nome: 'Sp.DEF', min: filtersState.filterMinSpDEF },
      { nome: 'SPEED', min: filtersState.filterMinSpeed }
    ];

    for (const check of checks) {
      if (check.min > 0) {
        const stat = pokemon.estatisticas.find(s => s.nome === check.nome);
        if (!stat || stat.valor < check.min) return false;
      }
    }

    if (
      filtersState.filterVantagem &&
      !pokemon.vantagens.includes(filtersState.filterVantagem as any)
    ) {
      return false;
    }

    if (
      filtersState.filterFraqueza &&
      !pokemon.fraquezas.includes(filtersState.filterFraqueza as any)
    ) {
      return false;
    }

    return true;
  });

  function limparFiltros() {
    filtersDispatch({ type: 'CLEAR_FILTERS' });
  }

  function moverPokemon(
    instanceId: number,
    destino: 'equipe' | 'box',
    origem: 'team' | 'box'
  ) {
    if (origem === 'team' && destino === 'box') {
      pokemonsDispatch({
        type: 'MOVE_POKEMON',
        payload: { instanceId, selecionado: false }
      });
      return;
    }

    if (destino === 'equipe' && equipePokemons.length >= 6) {
      alert('Equipe cheia! Máximo de 6 Pokémons na equipe.');
      return;
    }

    pokemonsDispatch({
      type: 'MOVE_POKEMON',
      payload: { instanceId, selecionado: destino === 'equipe' }
    });
  }

  return (
    <div className="dashboard-layout">
      <DashboardColumn
        titulo="PC (Box 1)"
        gridType="pc"
        onMoverPokemon={moverPokemon}
      >
        <PCFilters
  filtersState={filtersState}
  dispatch={filtersDispatch}
  limparFiltros={limparFiltros}
/>


        {boxPokemonsFiltrados.map((pokemon: Pokemon) => (
          <PCPokemonIcon
            key={pokemon.instanceId}
            instanceId={pokemon.instanceId}
            imagemUrl={pokemon.imagemUrl}
            nome={pokemon.nome}
          />
        ))}
      </DashboardColumn>

      <DashboardColumn
        titulo="Equipe Atual"
        gridType="time"
        onMoverPokemon={moverPokemon}
      >
        {Array.from({ length: 6 }).map((_, index) => {
          const pokemon = equipePokemons[index];

          return pokemon ? (
            <TeamPokemonCard
              key={pokemon.instanceId}
              {...pokemon}
            />
          ) : (
            <div key={`empty-${index}`} className="empty-slot" />
          );
        })}
      </DashboardColumn>
    </div>
  );
}

export default App;

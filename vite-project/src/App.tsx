import { useState } from 'react';
import './App.css';
import { todosPokemons } from './pokedexData';
import { DashboardColumn } from './components/DashboardColumn';
import { TeamPokemonCard } from './components/TeamPokemonCard';
import { PCPokemonIcon } from './components/PCPokemonIcon';
import { PCFilters } from './components/PCFilters';

function App() {
  const [pokemons, setPokemons] = useState(todosPokemons);
  
  const [filterType, setFilterType] = useState('');
  const [filterMinHP, setFilterMinHP] = useState(0);
  const [filterMinATK, setFilterMinATK] = useState(0);
  const [filterMinDEF, setFilterMinDEF] = useState(0);
  const [filterMinSpATK, setFilterMinSpATK] = useState(0);
  const [filterMinSpDEF, setFilterMinSpDEF] = useState(0);
  const [filterMinSpeed, setFilterMinSpeed] = useState(0);
  const [filterVantagem, setFilterVantagem] = useState('');
  const [filterFraqueza, setFilterFraqueza] = useState('');
  const [filterBusca, setFilterBusca] = useState('');
  
  const equipePokemons = pokemons.filter(p => p.selecionado);
  const boxPokemons = pokemons.filter(p => !p.selecionado);
  
  const boxPokemonsFiltrados = boxPokemons.filter(pokemon => {
    if (filterBusca) {
      const busca = filterBusca.toLowerCase();
      const nomeMatch = pokemon.nome.toLowerCase().includes(busca);
      const numeroMatch = pokemon.numero.toLowerCase().includes(busca);
      if (!nomeMatch && !numeroMatch) {
        return false;
      }
    }

    if (filterType && !pokemon.tipos.includes(filterType as any)) {
      return false;
    }

    if (filterMinHP > 0) {
      const stat = pokemon.estatisticas.find(s => s.nome === 'HP');
      if (!stat || stat.valor < filterMinHP) {
        return false;
      }
    }

    if (filterMinATK > 0) {
      const stat = pokemon.estatisticas.find(s => s.nome === 'ATK');
      if (!stat || stat.valor < filterMinATK) {
        return false;
      }
    }

    if (filterMinDEF > 0) {
      const stat = pokemon.estatisticas.find(s => s.nome === 'DEF');
      if (!stat || stat.valor < filterMinDEF) {
        return false;
      }
    }

    if (filterMinSpATK > 0) {
      const stat = pokemon.estatisticas.find(s => s.nome === 'Sp.ATK');
      if (!stat || stat.valor < filterMinSpATK) {
        return false;
      }
    }

    if (filterMinSpDEF > 0) {
      const stat = pokemon.estatisticas.find(s => s.nome === 'Sp.DEF');
      if (!stat || stat.valor < filterMinSpDEF) {
        return false;
      }
    }

    if (filterMinSpeed > 0) {
      const stat = pokemon.estatisticas.find(s => s.nome === 'SPEED');
      if (!stat || stat.valor < filterMinSpeed) {
        return false;
      }
    }

    if (filterVantagem && !pokemon.vantagens.includes(filterVantagem as any)) {
      return false;
    }

    if (filterFraqueza && !pokemon.fraquezas.includes(filterFraqueza as any)) {
      return false;
    }
   
    return true;
  });


  function limparFiltros() {
    setFilterType(''); 
    setFilterMinHP(0);
    setFilterMinATK(0);
    setFilterMinDEF(0);
    setFilterMinSpATK(0);
    setFilterMinSpDEF(0);
    setFilterMinSpeed(0);
    setFilterVantagem('');
    setFilterFraqueza('');
    setFilterBusca('');
  }

  function moverPokemon(instanceId: number, destino: 'equipe' | 'box') {
    if (destino === 'equipe' && equipePokemons.length >= 6) {
      alert('Equipe cheia! Máximo de 6 Pokémons na equipe.');
      return;
    }
    
    console.log(`Movendo pokémon ${instanceId} para ${destino}`);
    setPokemons(pokemonsAtuais => 
      pokemonsAtuais.map(p => 
        p.instanceId === instanceId 
          ? { ...p, selecionado: destino === 'equipe' }
          : p
      )
    );
  }

  return (
    <div className="dashboard-layout">
      
      <DashboardColumn titulo="PC (Box 1)" gridType="pc" onMoverPokemon={moverPokemon}>
        <PCFilters
          filterType={filterType}
          setFilterType={setFilterType}
          filterMinHP={filterMinHP}
          setFilterMinHP={setFilterMinHP}
          filterMinATK={filterMinATK}
          setFilterMinATK={setFilterMinATK}
          filterMinDEF={filterMinDEF}
          setFilterMinDEF={setFilterMinDEF}
          filterMinSpATK={filterMinSpATK}
          setFilterMinSpATK={setFilterMinSpATK}
          filterMinSpDEF={filterMinSpDEF}
          setFilterMinSpDEF={setFilterMinSpDEF}
          filterMinSpeed={filterMinSpeed}
          setFilterMinSpeed={setFilterMinSpeed}
          filterVantagem={filterVantagem}
          setFilterVantagem={setFilterVantagem}
          filterFraqueza={filterFraqueza}
          setFilterFraqueza={setFilterFraqueza}
          filterBusca={filterBusca}
          setFilterBusca={setFilterBusca}
          limparFiltros={limparFiltros}
        />
        
        {boxPokemonsFiltrados.map(pokemon => (
          <PCPokemonIcon
            key={pokemon.instanceId}
            instanceId={pokemon.instanceId}
            imagemUrl={pokemon.imagemUrl}
            nome={pokemon.nome}
          />
        ))}
      </DashboardColumn>

      <DashboardColumn titulo="Equipe Atual" gridType="time" onMoverPokemon={moverPokemon}>
        {Array.from({ length: 6 }).map((_, index) => {
          const pokemon = equipePokemons[index];
          return pokemon ? (
            <TeamPokemonCard 
              key={pokemon.instanceId} 
              id={pokemon.id}
              instanceId={pokemon.instanceId}
              imagemUrl={pokemon.imagemUrl}
              nome={pokemon.nome}
              numero={pokemon.numero}
              tipos={pokemon.tipos}
              estatisticas={pokemon.estatisticas}
              vantagens={pokemon.vantagens}
              fraquezas={pokemon.fraquezas}
              selecionado={pokemon.selecionado}
            />
          ) : (
            <div key={`empty-${index}`} className="empty-slot"></div>
          );
        })}
      </DashboardColumn>

    </div>
  );
}

export default App;
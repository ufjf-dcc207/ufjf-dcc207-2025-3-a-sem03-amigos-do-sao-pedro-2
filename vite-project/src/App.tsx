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
  const [filterMinStat, setFilterMinStat] = useState(0); 
  const [filterVantagem, setFilterVantagem] = useState('');
  const [filterFraqueza, setFilterFraqueza] = useState('');
  
  const equipePokemons = pokemons.filter(p => p.selecionado);
  const boxPokemons = pokemons.filter(p => !p.selecionado);
  
  const boxPokemonsFiltrados = boxPokemons.filter(pokemon => {
    if (filterType && !pokemon.tipos.includes(filterType as any)) {
      return false;
    }

    if (filterMinStat > 0) {
      const atkStat = pokemon.estatisticas.find(stat => stat.nome === 'ATK');
      if (!atkStat || atkStat.valor < filterMinStat) {
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
    setFilterMinStat(0); 
    setFilterVantagem('');
    setFilterFraqueza('');
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
          filterMinStat={filterMinStat}
          setFilterMinStat={setFilterMinStat}
          filterVantagem={filterVantagem}
          setFilterVantagem={setFilterVantagem}
          filterFraqueza={filterFraqueza}
          setFilterFraqueza={setFilterFraqueza}
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
        {equipePokemons.map(pokemon => (
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
        ))}
      </DashboardColumn>

    </div>
  );
}

export default App;
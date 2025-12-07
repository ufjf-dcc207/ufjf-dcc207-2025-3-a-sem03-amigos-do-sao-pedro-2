import { useState } from 'react';
import './App.css';
import { todosPokemons } from './pokedexData';
import { DashboardColumn } from './components/DashboardColumn';
import { TeamPokemonCard } from './components/TeamPokemonCard';
import { PCPokemonIcon } from './components/PCPokemonIcon';

function App() {
  const [pokemons, setPokemons] = useState(todosPokemons);
  
  const equipePokemons = pokemons.filter(p => p.selecionado);
  const boxPokemons = pokemons.filter(p => !p.selecionado);

  function moverPokemon(instanceId: number, destino: 'equipe' | 'box') {
    // Validação: impede adicionar mais de 6 pokémons na equipe
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
      
      <DashboardColumn titulo="PC (Box 1)" gridType="pc">
        {boxPokemons.map(pokemon => (
          <PCPokemonIcon
            key={pokemon.instanceId}
            imagemUrl={pokemon.imagemUrl}
            nome={pokemon.nome}
          />
        ))}
      </DashboardColumn>

      <DashboardColumn titulo="Equipe Atual" gridType="time">
        {equipePokemons.map(pokemon => (
          <TeamPokemonCard 
            key={pokemon.instanceId} 
            id={pokemon.id}
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
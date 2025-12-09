import type { Pokemon } from '../pokedexData';
import { TypeBadge } from './TypeBadge';
import { StatBar } from './StatBar';
import './TeamPokemonCard.css';

export function TeamPokemonCard(props: Pokemon) {
  return (
    <div 
      className="team-card" 
      draggable 
      onDragStart={(e) => { 
        e.dataTransfer.setData('instanceId', String(props.instanceId));
        e.dataTransfer.setData('text/plain', String(props.instanceId)); 
        e.dataTransfer.setData('pokemon', JSON.stringify(props));
        e.dataTransfer.setData('from', 'team');
      }} 
    >
            <div className="team-card-header">
            <img src={props.imagemUrl} alt={props.nome} />
            <h3>{props.numero} {props.nome}</h3>
            <div className="tipos-container">
                {props.tipos.map(t => <TypeBadge key={t} tipo={t} />)}
            </div>
          </div>

        <div className="team-card-body">
            <div className="card-secao">
              <h4>Status Base</h4>
              {props.estatisticas.map(s => (
                <StatBar key={s.nome} label={s.nome} valor={s.valor} />
              ))}
            </div>
            
            <div className="card-secao">
              <h4>Vantagens</h4>
              <div className="tipos-container">
                {props.vantagens.map(v => <TypeBadge key={v} tipo={v} />)}
              </div>
            </div>
            
            <div className="card-secao">
              <h4>Fraquezas</h4>
              <div className="tipos-container">
                {props.fraquezas.map(f => <TypeBadge key={f} tipo={f} />)}
              </div>
            </div>
          </div>
    </div>
  );
}
import './Loading.css';

interface LoadingProps {
  message?: string;
}

/**
 * Componente de loading exibido durante carregamento de dados da API
 */
export function Loading({ message = 'Carregando Pokémons...' }: LoadingProps) {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="pokeball-loader">
          <div className="pokeball-top"></div>
          <div className="pokeball-middle"></div>
          <div className="pokeball-bottom"></div>
        </div>
        <p className="loading-message">{message}</p>
      </div>
    </div>
  );
}

import './ErrorDisplay.css';

interface ErrorDisplayProps {
  message: string;
  onRetry?: () => void;
}

/**
 * Componente de erro exibido quando falha o carregamento de dados da API
 */
export function ErrorDisplay({ message, onRetry }: ErrorDisplayProps) {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon">
          <div className="pokeball-broken">
            <div className="pokeball-half pokeball-left"></div>
            <div className="pokeball-half pokeball-right"></div>
            <div className="lightning-bolt"></div>
          </div>
        </div>
        
        <h2 className="error-title">Ops! Algo deu errado</h2>
        <p className="error-message">{message}</p>
        
        {onRetry && (
          <button className="retry-button" onClick={onRetry}>
            <span className="retry-icon">↻</span>
            Tentar Novamente
          </button>
        )}
        
        <p className="error-hint">
          Verifique sua conexão com a internet e tente novamente.
        </p>
      </div>
    </div>
  );
}

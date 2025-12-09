import type { ReactNode } from 'react'; 
import './DashboardColumn.css';

interface ColumnProps {
  titulo: string;
  gridType: 'pc' | 'time';
  children: ReactNode;
  onMoverPokemon?: (instanceId: number, destino: 'equipe' | 'box', origem: 'team' | 'box') => void;
}

export function DashboardColumn({ titulo, gridType, children, onMoverPokemon }: ColumnProps) {
  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
  const raw1 = e.dataTransfer.getData('instanceId');
  const raw2 = e.dataTransfer.getData('text/plain');
  const raw3 = e.dataTransfer.getData('pokemon');

  let instanceId = NaN;

  if (raw1) instanceId = Number(raw1);
  else if (raw2) instanceId = Number(raw2);
  else if (raw3) {
    try {
      const parsed = JSON.parse(raw3);
      if (parsed && parsed.instanceId) instanceId = Number(parsed.instanceId);
    } catch {    }
  }

  const rawOrigem = e.dataTransfer.getData('from');
  const origem: 'team' | 'box' = rawOrigem === 'team' ? 'team' : 'box';
  const destino = gridType === 'time' ? 'equipe' : 'box';

  if (Number.isNaN(instanceId)) {
    console.warn('[DashboardColumn] handleDrop: instanceId inválido', { raw1, raw2, raw3, rawOrigem, destino });
    return;
  }
    onMoverPokemon?.(instanceId, destino, origem);
  }

  return (
    <section className="dashboard-column">
      <h2 className="column-titulo">{titulo}</h2>
      <div 
        className={gridType}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {children}
      </div>
    </section>
  );
}
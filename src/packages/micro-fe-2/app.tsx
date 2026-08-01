import { Widget } from './src/components/Widget';
import { useCounter } from './src/hooks/useCounter';

export function MicroFE2App() {
  const { count, increment, decrement } = useCounter();

  return (
    <div style={{ padding: 24 }}>
      <h1>Micro FE 2</h1>

      <p>
        Standalone micro frontend ready for local development or GitHub release
        download.
      </p>

      <Widget />

      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

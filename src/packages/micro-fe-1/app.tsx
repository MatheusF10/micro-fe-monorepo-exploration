import { Hello } from './src/components/Hello';
import { useToggle } from './src/hooks/useToggle';

export function MicroFE1App() {
  const { toggle, value } = useToggle(false);
  return (
    <div style={{ padding: 24 }}>
      <h1>Micro FE 1</h1>

      <p>
        Standalone micro frontend ready for local development or GitHub release
        download.
      </p>

      <Hello />

      <p>Toggle value: {value.toString()}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

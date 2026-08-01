import { useState } from 'react';

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    toggle: () => setValue((current) => !current),
  };
}

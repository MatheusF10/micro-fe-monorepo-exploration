import { useState } from 'react';

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  return {
    count,
    increment: () => setCount((current) => current + 1),
    decrement: () => setCount((current) => current - 1),
  };
}

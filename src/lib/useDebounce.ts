import { useState, useEffect, useRef } from "react";

export function useDebounce(value: string, delay: number): string {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    // Create a ref to store the timeout handler
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Cleanup function to clear the timeout when the component unmounts
    const cleanup = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    // Effect hook to update the debounced value after the delay
    useEffect(() => {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Create a new timeout to update the debounced value
      timeoutRef.current = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Add the cleanup function to the effect dependencies
      return cleanup;
    }, [value, delay]);

    // Return the cleanup function to be called on component unmount
    return cleanup;
  }, [value, delay]);

  return debouncedValue;
}

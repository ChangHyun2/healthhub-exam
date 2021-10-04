import { useState, useEffect, useRef } from "react";

const useMole: () => [
  {
    mole: boolean;
    invalid: boolean;
  },
  () => void
] = () => {
  // TODO
  const mountedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [mole, setMole] = useState(true);
  const [invalid, setInValid] = useState(false);

  const clearMole = () => {
    console.log("Mole hit!");

    setMole((prev) => false);
  };

  useEffect(() => {
    if (mole && mountedRef.current) {
      timeoutRef.current = setTimeout(() => setInValid(true), 2000);
    } else {
      timeoutRef.current && clearTimeout(timeoutRef.current);
      setTimeout(() => setMole(true), 1000 * (1 + 10 * Math.random()));
    }
  }, [mole]);

  useEffect(() => {
    mountedRef.current = true;
  }, []);

  return [{ mole, invalid }, clearMole];
};

export default useMole;

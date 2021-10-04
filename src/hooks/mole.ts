import { useState, useEffect } from "react";

const useMole: () => [boolean, () => void] = () => {
  // TODO
  const [mole, setMole] = useState(true);

  const clearMole = () => {
    console.log("Mole hit!");
    setMole((prev) => false);
  };

  useEffect(() => {
    !mole && setTimeout(() => setMole(true), 1 + 10 * Math.random());
  }, [mole]);

  return [mole, clearMole];
};
export default useMole;

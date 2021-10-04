import { useState } from "react";

const useMole: () => [boolean, () => void] = () => {
    // TODO
    const [mole] = useState(true);
    const clearMole = () => {
        console.log('Mole hit!');
    };

    return [mole, clearMole];
}
export default useMole;

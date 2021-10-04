import React, { useCallback } from "react";
import './Mole.scss';
import useMole from "../hooks/mole";

interface MoleProps {
    onHit(): void;
}
const Mole: React.FunctionComponent<MoleProps> = (props) => {
    const [mole, clearMole] = useMole();
    const { onHit } = props;

    const hitMole = useCallback(() => {
        clearMole();
        onHit();
    }, [onHit, clearMole]);

    const content = mole && (
        <div className="mole-up" onClick={hitMole}>
            Mole!
        </div>
    );

    return (
        <div className="mole-container">
            <div className="mole-cell">
                {content}
            </div>
        </div>
    );
};
export default Mole;

import React, { useCallback } from "react";
import "./Mole.scss";
import useMole from "../hooks/mole";

interface MoleProps {
  onHit: (id: number) => void;
  id: number;
}
const Mole: React.FunctionComponent<MoleProps> = (props) => {
  const [mole, clearMole] = useMole();
  const { onHit, id } = props;

  const hitMole = useCallback(() => {
    clearMole();
    onHit(id);
  }, [onHit, clearMole, id]);

  const content = mole && (
    <div className="mole-up" onClick={hitMole}>
      Mole!
    </div>
  );

  return (
    <div className="mole-container">
      <div className="mole-cell">{content}</div>
    </div>
  );
};
export default Mole;

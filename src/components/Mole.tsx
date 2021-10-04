import React, { useCallback } from "react";
import "./Mole.scss";
import useMole from "../hooks/mole";

interface MoleProps {
  onHit: (id: number) => void;
  id: number;
}
const Mole: React.FunctionComponent<MoleProps> = (props) => {
  const [{ mole, invalid }, clearMole] = useMole();
  const { onHit, id } = props;

  const hitMole = useCallback(() => {
    if (invalid) {
      return;
    }

    clearMole();
    onHit(id);
  }, [onHit, clearMole, id, invalid]);

  const content = invalid ? (
    <div className="mole-fail" onClick={hitMole}>
      invalid
    </div>
  ) : mole ? (
    <div className="mole-up" onClick={hitMole}>
      mole!
    </div>
  ) : null;

  return (
    <div className="mole-container">
      <div className="mole-cell">{content}</div>
    </div>
  );
};
export default Mole;

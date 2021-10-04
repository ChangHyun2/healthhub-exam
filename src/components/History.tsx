import React, { useState, useEffect } from "react";
import "./History.scss";

interface HistoryProps {
  hitTime: Array<Array<number>>;
}

const History: React.FunctionComponent<HistoryProps> = (props) => {
  const [moleId, setMoleId] = useState("");
  //   <li key={`${moleId}/${i}`}>{[moleId, time].join("/")}</li>

  let list = (
    <ul>
      {moleId === ""
        ? props.hitTime
            .map((moleHitTime, i) => [String(i + 1), moleHitTime])
            .filter(([moleId, moleHitTime]) => moleHitTime.length)
            .reduce((acc: Array<[string, number]>, [moleId, moleHitTime]) => {
              if (typeof moleHitTime === "string") return acc;

              return acc.concat(
                moleHitTime.map((time) => [moleId, time]) as Array<
                  [string, number]
                >
              );
            }, [])
            .sort((a, b) => a[1] - b[1])
            .map(([moleId, time]) => (
              <li key={`${moleId}/${time}`}>{[moleId, time].join("/")}</li>
            ))
        : 1 <= +moleId || +moleId <= 16
        ? props.hitTime[+moleId - 1].map((time, i) => (
            <li key={i}>{[moleId, time].join("/")}</li>
          ))
        : null}
    </ul>
  );

  // TODO
  return (
    <div className="history">
      <label>
        Filter
        <input
          type="text"
          value={moleId}
          onChange={(e) => setMoleId(e.target.value)}
        />
      </label>
      {list}
    </div>
  );
};
export default History;

import React, { useState } from "react";
import Trade from "./Trade";
import Decorate from "./Decorate";

const Demo = () => {
  const [wood, setWood] = useState(100);
  //   const;
  return (
    <div>
      <div className="eb-p-2 eb-border eb-border-green-600">
        <h3>{wood}個木頭可以做什麼？</h3>
        <button
          className="eb-bg-green-500 hover:eb-bg-green-700 eb-text-white eb-font-bold eb-py-2 eb-px-4 eb-rounded"
          onClick={() => {
            setWood(200);
          }}
        >
          加點木頭
        </button>
      </div>
      <div className="eb-flex">
        <div className="eb-p-2 eb-flex-1 eb-border eb-border-indigo-600">
          <Trade wood={wood / 2} />
        </div>
        <div className="eb-p-2 eb-flex-1 eb-border eb-border-red-600">
          <Decorate wood={wood / 2} />
        </div>
      </div>
    </div>
  );
};

export default Demo;

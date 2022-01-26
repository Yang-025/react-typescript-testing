import React from "react";

const Decorate = ({ wood }: { wood: number }) => {
  return (
    <div>
      <h3>{wood}個木頭拿去裝飾</h3>
      <div>拿去裝飾小花園的圍籬</div>
    </div>
  );
};

export default Decorate;

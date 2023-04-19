// import React from "react";

// const Quiza = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <h1 className="text-4xl font-bold text-center ">Hello, React</h1>
//     </div>
//   );
// };

// export default Quiza;

import React, { useState } from 'react';

function Quizb() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex justify-center items-center h-screen">
        <button
        className="px-4 py-2 bg-blue-100 text-black rounded-lg"
        onClick={decrement}
      >
        -
      </button>
      <span className="px-4 py-2 text-fuchsia-700 font-bold">{count}</span>
      <button
        className="px-4 py-2 bg-green-100 text-black rounded-lg"
        onClick={increment}
      >
        +
      </button>


    </div>
  );
}

export default Quizb;
// Hooks

import React, { useState } from "react";
import Header from "./Header";

const App = () => {
  const [liczba, zmianaStanu] = useState(0);

  return (
    <>
      <Header myProps={liczba}></Header>
      <div onClick={() => zmianaStanu(liczba - 1)}>-</div>
      <div onClick={() => zmianaStanu(liczba + 1)}>+</div>
      <div>{liczba}</div>
    </>
  );
};

export default App;

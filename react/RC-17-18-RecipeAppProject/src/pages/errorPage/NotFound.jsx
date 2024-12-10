import React, { useState } from "react";
import Main from "./NotFoundStyle";

const NotFound = () => {
  const [counter, setCounter] = useState(5);

  return (
    <Main>
      <h3>Something went wrong</h3>
      <p>
        Within <strong>{counter}</strong>seconds, you will be directed to the
        home page!
      </p>
    </Main>
  );
};

export default NotFound;

import React, { useState } from "react";

const Titulo = () => {
  const [mensaje, setMensaje] = useStat("from changed state");

  return (
    <article>
      <h1>Hello my friend</h1>
    </article>
  );
};

export default Titulo;

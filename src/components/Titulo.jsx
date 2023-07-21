import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Titulo = () => {
  const [mensaje, setMensaje] = useState("");

  return (
    <article className="text-center">
      <h1>Hello my friend {mensaje}</h1>
      <Button
        variant="primary"
        onClick={() => setMensaje("from changed state")}
      >
        Primary
      </Button>
    </article>
  );
};

export default Titulo;

import { useState } from "react";
import TextInput from "./TextInput";
import Output from "./Output";

function Decoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleDecode = () => {
    // Exemplo simples de decodificação Base64
    try {
      const decoded = atob(input); // Decodifica Base64
      setOutput(decoded);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setOutput("Erro ao decodificar o texto!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <TextInput value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleDecode}>Decodificar</button>
      <Output value={output} />
    </div>
  );
}

export default Decoder;

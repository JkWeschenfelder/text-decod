import { useRef } from "react";

// eslint-disable-next-line react/prop-types
function TextInput({ value, onChange }) {
  const textareaRef = useRef(null);

  // Função para ajustar a altura do textarea
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Redefine a altura para recalcular
      textarea.style.height = `${textarea.scrollHeight}px`; // Ajusta para o conteúdo
    }
  };

  // Chama o ajuste sempre que o texto mudar
  const handleInputChange = (e) => {
    onChange(e);
    adjustHeight();
  };

  return (
    <div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleInputChange}
        rows="1" // Altura mínima
        placeholder="Insira o texto para decodificar"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          resize: "none", // Desabilita o redimensionamento manual
          overflow: "hidden", // Remove barra de rolagem vertical
        }}
      />
    </div>
  );
}

export default TextInput;

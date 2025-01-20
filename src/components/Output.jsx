import "react";

// eslint-disable-next-line react/prop-types
function Output({ value }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Texto Decodificado:</h3>
      <p>{value}</p>
    </div>
  );
}

export default Output;

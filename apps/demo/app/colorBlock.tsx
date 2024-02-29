import ColorContextual from "./context/ColorContextual";

export default function ColorBlock() {
  const color = ColorContextual.get();

  console.log(color);

  return (
    <div
      style={{ width: "500px", height: "500px", backgroundColor: color === "light" ? "#D3D3D3" : "#A9A9A9" }}
    ></div>
  );
}

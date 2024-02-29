import ColorBlock from "./colorBlock";
import ColorContextual from "./context/ColorContextual";

export default function Page(): JSX.Element {
  return (
    <div>
      <ColorContextual.Provider value="light">
        <h1>Contextual Demo</h1>
        <p>Example Next.js using a server rendered Contextual Provider</p>

        <ColorBlock />
      </ColorContextual.Provider>
    </div>
  );
}

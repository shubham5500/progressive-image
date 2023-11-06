import { ProgressiveImage } from "./ProgressiveImage";
import "./styles.css";
import LargeImage from "./images/big.jpg";
import SmallImage from "./images/tiny.jpg";

export default function App() {
  return (
    <div className="App">
      <h1>Progressive Image</h1>
      <ProgressiveImage
        src={LargeImage}
        placeholderImg={SmallImage}
        height={450}
        width={450}
      />
    </div>
  );
}

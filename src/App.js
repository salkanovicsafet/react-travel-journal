import Destination from "./components/Destination";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container main">
        <Destination />
      </div>
    </div>
  );
}

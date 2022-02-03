import Destination from "./components/Destination";
import Navbar from "./components/Navbar";
import destinationsData from "./data.js";

const destinations = destinationsData.map((x) => (
  <Destination key={x.title} item={x} />
));

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container main">{destinations}</div>
    </div>
  );
}

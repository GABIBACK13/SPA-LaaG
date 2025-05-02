import "./App.css";
import MyRoutes from "../routes";
import Header from "../components/Header";
import ThemeInitializer from "../components/ThemeInitializer";
import { Navigation } from "../components/Navigation";

function App() {
  return (
    <div>
      <ThemeInitializer />
      <Header />
      <Navigation />
      <MyRoutes />
    </div>
  );
}

export default App;

import "./App.css";
import MainBox from "./components/MainBox";
import ReadingProgress from "./components/ReadingProgress";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="header-title">
        Welcome Everyone To My Humble Books Archive
      </div>
      <ReadingProgress />
      <MainBox />
      <Footer />
    </div>
  );
}

export default App;

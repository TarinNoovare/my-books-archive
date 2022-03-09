import "./App.css";
import MainBox from "./components/BooksArchive/MainBox";
import ReadingProgress from "./components/BooksArchive/ReadingProgress";
import Footer from "./components/UI/Footer";

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

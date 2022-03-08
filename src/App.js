import "./App.css";
import MainBox from "./components/MainBox";

function App() {

  const booksList = {
    "History": ["Book1", "Book2", "Book3", "Book4", "Book5", "Book6", "Book7"],
    "Non-Fiction": ["Book1", "Book2", "Book3", "Book4", "Book5"],
    "Fiction": ["Book1", "Book2", "Book3", "Book4", "Book5", "Book6", "Book7", "Book8"],
    "Science": ["Book1", "Book2", "Book3", "Book4", "Book5", "Book6", "Book7", "Book8", "Book9"]
  }
  return (
    <div className="App">
      <div className="header-title">Welcome Everyone To My Humble Books Archive</div>
      <MainBox />
    </div>
  );
}

export default App;

import "./MainBox.css";
import FlipCard from "../UI/FlipCard";

function MainBox() {
  return (
    <div className="main-box">
      <FlipCard className="main-box__book" bookTitle={1}></FlipCard>
      <FlipCard className="main-box__book" bookTitle={2}></FlipCard>
      <FlipCard className="main-box__book" bookTitle={3}></FlipCard>
      <FlipCard className="main-box__book" bookTitle={4}></FlipCard>
      <FlipCard className="main-box__book" bookTitle={5}></FlipCard>
      <FlipCard className="main-box__book" bookTitle={6}></FlipCard>
      <FlipCard className="main-box__book" bookTitle={7}></FlipCard>
      <FlipCard className="main-box__book" bookTitle={8}></FlipCard>
      <FlipCard className="main-box__book" bookTitle={9}></FlipCard>
      <FlipCard className="main-box__book" bookTitle={10}></FlipCard>
    </div>
  );
}

export default MainBox;

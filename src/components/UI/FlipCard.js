import "./FlipCard.css";

function FlipCard(props) {
  const flipCardClasses = "flip-card " + props.className;
  const flipCardInnerClasses = "flip-card-inner " + props.className;
  const flipCardFrontClasses = "flip-card-front " + props.className;
  const flipCardBackClasses = "flip-card-back " + props.className;

  return (
    <div className={flipCardClasses}>
      <div className={flipCardInnerClasses}>
        <div className={flipCardFrontClasses}>{props.bookTitle}</div>
        <div className={flipCardBackClasses}>
          <h2>{props.bookTitle}</h2>
          <p>Book Description</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;

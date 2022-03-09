import "./ReadingProgress.css";

// TODO: (Adjust) Break component especially in grid container into smaller components
// TODO: (Fix) When scrolling size down, the grid is hidden in the browser rather than hidden in
// its container 
function ReadingProgress() {
  const numberOfDays = 365;
  const gridItems = [];

  const readingProgressIndicator = {
    1: 1,
    100: 2,
    101: 3,
    102: 1,
    104: 3,
    105: 3,
  };
  const readingProgressColor = {
    1: "#466D1D",
    2: "#74B72E",
    3: "#B0FC38",
  };

  for (var i = 1; i < numberOfDays + 1; i++) {
    const colorBackground = {
      background: readingProgressColor[readingProgressIndicator[i]] || "gray",
    };
    console.log(colorBackground);
    gridItems.push(
      <div
        title={i}
        className="read-progress-summar__grid-item"
        style={colorBackground}
      ></div>
    );
  }

  return (
    <div className="read-progress-summary">
      <div className="read-progress-summar__tilte">My Reading Progress</div>
      <div className="read-progress-summar__sidebar"></div>
      <div className="read-progress-summar__grid-container">{gridItems}</div>
    </div>
  );
}

export default ReadingProgress;

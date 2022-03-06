import "./BooksTile.css";

function BooksTile(props) {

  const elements = props.bookNamesList;
  const items = [];

  for (const [_, value] of elements.entries()) {
    items.push(<div className="book-box">{value}</div>);
  }

  console.log(items);
  return (
    <div className="books-tile">
      <div className="tile-title">{props.categoryTitle}</div>
      <div className="tile-list">
        {items}
      </div>
    </div>
  );
}

export default BooksTile;

import BooksTile from "./BooksTile";
import './BooksArchive.css'

function BooksArchive(props) {

  const booksList = props.booksList;

  const items = [];

  for (const [key, value] of Object.entries(booksList)) {
    console.log(key, value);
    items.push(<BooksTile className="books-tile" categoryTitle={key} bookNamesList={value}/>);
  }

  return (
    <div className="main-books-arhive">
        {items}
    </div>
  );
}

export default BooksArchive;

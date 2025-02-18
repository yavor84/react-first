import FavBooks from "./FavBooks";
import BookList from "./BookList";

const App = () => {
  return (
    <>
	  <h1>Books of the week</h1>
      <BookList books={FavBooks} />
    </>
  );
};

export default App;
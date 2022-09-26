import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const url = "https://api.quotable.io/random";

  const toggleFav = () => {
    setIsFavorite((prev) => !prev);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  }, []);

  const newQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));

    setIsFavorite((prev) => !prev);
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes.content} - ${quotes.author}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <div className="App">
      <div className="quote-div">
        <p className="quote">{quotes.content}</p>
        <p className="author">{quotes.author}</p>
        <div className="bottom">
          <div>
            <i onClick={tweetQuote} className="fa-brands fa-twitter"></i>
            <button className="fav" onClick={toggleFav}>
              {isFavorite ? (
                <i class="fa-regular fa-heart"></i>
              ) : (
                <i class="fa-solid fa-heart"></i>
              )}
            </button>
          </div>

          <button className="new-quote" onClick={newQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

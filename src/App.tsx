import { useState } from 'react';
import quotes from './assets/quotes.json';
import Header from './components/Header';
import QuoteCard from './components/QuoteCard';
// import NewQuoteButton from '../components/new-quote-button';
import "./App.css";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getBgColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  return `rgb(${red}, ${green}, ${blue})`;
};

const transition = 'all 2s';

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [bgColor, setBgColor] = useState<string>(getBgColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setBgColor(getBgColor());
  };

  return (
    <div
      className="background"
      style={{ backgroundColor: bgColor, transition }}
    >
      <div className="quote-layout">
        <Header title="Quote of the Day" />
        <QuoteCard
          quote={quote.quote}
          author={quote.author}
          accentColor={bgColor}
          transition={transition}
          onNewQuote={changeQuote}
        />
      </div>
    </div>
  );
}

export default App;

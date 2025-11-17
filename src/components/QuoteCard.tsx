'use client';

import { FaQuoteLeft, FaQuoteRight, FaTwitter } from 'react-icons/fa';

interface QuoteCardProps {
  quote: string;
  author: string;
  accentColor: string;
  transition?: string;
  onNewQuote: () => void;
}

export default function QuoteCard({
  quote,
  author,
  accentColor,
  transition = 'all 1s',
  onNewQuote,
}: QuoteCardProps) {
  const tweetHref = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote}`;

  return (
    <div id="quote-box">
      <div
        className="quote-content"
        style={{ color: accentColor, transition }}
      >
        <h2 id="text">
          <FaQuoteLeft size="30" style={{ marginRight: '10px' }} />
          {quote}
          <FaQuoteRight size="30" style={{ marginLeft: '10px' }} />
        </h2>
        <h3 id="author">- {author}</h3>
      </div>

      <div className="buttons">
        <a
          id="tweet-quote"
          href={tweetHref}
          style={{
            backgroundColor: accentColor,
            marginRight: '10px',
            transition,
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter color="white" />
        </a>

        <button
          id="new-quote"
          onClick={onNewQuote}
          style={{ backgroundColor: accentColor, transition }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import QuoteData from './QuoteData.json';
import './quote.css'; // Import CSS file

const Quote = () => {
  // Extract quotes array from quotesData
  const { quotes } = QuoteData;

  return (
    <div className="container"> {/* Add className for styling */}
      
      {quotes.map((quote, index) => (
        <div className="quote-box" key={index}> {/* Add className for styling */}
          <blockquote>
            <p>{quote.text}</p>
            <p className='author'>{quote.author}</p>
          </blockquote>
        </div>
      ))}
    </div>
  );
};

export default Quote;

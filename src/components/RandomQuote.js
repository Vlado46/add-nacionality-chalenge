import React, { useState, useEffect } from "react";
import "./RandomQuote.css";
import * as ReactBootStrap from "react-bootstrap";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote[0].quote);
        setAuthor(quote[0].author);
        console.log(quote);
      });
  }, []);

  const fetchNewQuote = () => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote[0].quote);
        setAuthor(quote[0].author);
      });
  };

  return (
    <div className="container">
      <div className="quote">
        <h2>{quote}</h2>
        <h4>-{author}-</h4>
      </div>
      <br />
      <ReactBootStrap.Button className="btn" onClick={fetchNewQuote}>
        Generate New Quote
      </ReactBootStrap.Button>
      <ReactBootStrap.Button href="/">Back</ReactBootStrap.Button>
    </div>
  );
};

export default RandomQuote;

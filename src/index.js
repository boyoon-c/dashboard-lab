import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import NavBar from './NavBar';
import Reviews from './Reviews';
import AverageRating from './AverageRating';
import SentimentAnalysis from './SentimentAnalysis';
import WebsiteVisitors from './WebsiteVisitors';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <div class="wrapper">
    <NavBar />
    <Reviews />
    <AverageRating />
    <SentimentAnalysis />
    <WebsiteVisitors />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

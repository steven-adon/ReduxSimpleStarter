import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';
// Create a new Component . This componnet should produce some HTML.

const API_KEY = 'AIzaSyCtUwBXY-YN9cNYGCN-XMYeGZpzAxMELmA';

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
};

const foo = 5;

// Take this component's generated HTML and put it on the page(in the DOM).
ReactDom.render(
  <App/>, document.querySelector('.container'));

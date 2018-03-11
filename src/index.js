import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
// Create a new Component . This componnet should produce some HTML.

const API_KEY = 'AIzaSyB9Zzb0wJxoYg7IP2sCzrX8d1KbiRdkvS4';


YTSearch({
  key: API_KEY,
  term: 'surfboards'
}, function(data) {
  console.log(data)
});


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

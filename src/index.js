import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// Create a new Component . This componnet should produce some HTML.

const API_KEY = 'AIzaSyB9Zzb0wJxoYg7IP2sCzrX8d1KbiRdkvS4';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };

    YTSearch({
      key: API_KEY,
      term: 'mx music'
    }, (data) =>  {
      this.setState({
        videos: data
      });
    });

  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }

};

const foo = 5;

// Take this component's generated HTML and put it on the page(in the DOM).
ReactDom.render(
  <App/>, document.querySelector('.container'));

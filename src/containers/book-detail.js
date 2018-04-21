import React, { Component } from 'react';
import { connect }  from 'react-redux';

class BookDetail extends Comment {
  render() {
    return (
      <div>Book Detail!</div>
    );
  }
} 

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookList);
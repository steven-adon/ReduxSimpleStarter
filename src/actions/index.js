 export function selectBook(book) {
  //  selectBook is a ActionCreator, it need to return a action ,
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
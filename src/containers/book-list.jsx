import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
// Smart Component 
class BookList extends Component {
  renderList() {
    return this.props.books.map( book => {
      return (
        <li 
          key={ book.title } 
          className="list-group-item"
          onClick={ () => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as
  // props inside of BookList
  return {
    books: state.books,
  };
}


// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBoo is called the result should be passed
  // to all our reducers

  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote bookList from a component to a container it needs to know
// about this new dispatch method, selectBook. Make it avaliable 
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
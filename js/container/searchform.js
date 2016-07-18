import {connect} from 'react-redux';
import {fetchGitPeople} from '../redux/actions/git';
import React from 'react';
import {Component} from 'react';
import KeywordInput from './keywordinput';
import LocPicker from './locpicker';

import FormStyle from '../../scss/searchform.scss';


class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    const {dispatch, keys} = this.props;
    dispatch(fetchGitPeople(keys));
  }
  render() {
    return (
      <form className={FormStyle.Form} onSubmit={this.handleFormSubmit}>
        <LocPicker/>
        <KeywordInput/>
        <input className={FormStyle.SearchButton} type="submit" value="Search"/>
      </form>
    );
  }
}


SearchForm.propTypes = {
  keys: React.PropTypes.arrayOf(React.PropTypes.string),
  dispatch: React.PropTypes.func.required
};

const mapStateToProps = (state) => ({
  keys: state.keywords
});


const SearchFormContainer = connect(
  mapStateToProps
)(SearchForm);

export default SearchFormContainer;

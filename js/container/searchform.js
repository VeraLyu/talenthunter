import {connect} from 'react-redux';
import React from 'react';
import {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import KeywordInput from './keywordinput';
import LocPicker from './locpicker';
import {fetchGitPeople} from '../redux/actions/git';

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
        <Grid>
          <Row>
            <Col xs={4}>
              <LocPicker/>
            </Col>
            <Col xs={4}>
              <KeywordInput/>
            </Col>
            <Col xs={2}>
              <input className={FormStyle.SearchButton} type="submit" value="Search"/>
              <a href="/talent/my">This is a link</a>
            </Col>
          </Row>
        </Grid>
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

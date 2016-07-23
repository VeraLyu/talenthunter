import {Component} from 'react';
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Provider} from 'react-redux';

import KeywordInput from '../container/keywordinput';
import LocPicker from '../container/locpicker';
import store from '../redux/store';

import SearchResults from '../container/searchresults';

import FormStyle from '../../scss/searchform.scss';


export class Results extends Component {
  render() {
    return (
      <Provider store={store}>
        <Grid>
          <Row>
            <Col xs={4}>
              <LocPicker/>
              <KeywordInput/>
              <input className={FormStyle.SearchButton} type="submit" value="Search"/>
            </Col>
            <Col xs={6}>
              <SearchResults/>
            </Col>
          </Row>
        </Grid>
      </Provider>
    );
  }
}

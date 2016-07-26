import {KeywordInput} from '../components/keywordinput';
import {connect} from 'react-redux';
import {addKeyword, removeKeyword} from '../redux/actions/keywords';

const mapStateToProps = ((state) => {
  return {
    keywords: state.keywords
  };
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange: (event)=> {
      if (event.keyCode === 13) {
        dispatch(addKeyword(event.target.value));
        event.target.value = '';
        event.preventDefault();
      }
    },
    handleKeyDelete: (key) => {
      dispatch(removeKeyword(key));
    }
  };
};


const KeywordInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeywordInput);

export default KeywordInputContainer;

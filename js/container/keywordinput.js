import {KeywordInput} from '../components/keywordinput';
import {connect} from 'react-redux';
import {addKeyword} from '../redux/actions/keywords';


const mapStateToProps = (state) => ({
  keywords: state.keywords
});


const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange: (event)=> {
      if (event.keyCode === 13) {
        dispatch(addKeyword(event.target.value));
        event.preventDefault();
      }
    }
  };
};


const KeywordInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeywordInput);

export default KeywordInputContainer;

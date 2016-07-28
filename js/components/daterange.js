import React, {Component} from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

class DateRange extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DatePicker
          selected={this.props.startDate} selectsStart
          startDate={this.props.startDate}
          endDate={this.props.endDate} onChange={this.props.handleStartDate}/>
         <DatePicker
          selected={this.props.endDate} selectsEnd
          startDate={this.props.startDate}
          endDate={this.props.endDate} onChange={this.props.handleEndDate}/>
      </div>);
  }
}

DateRange.propTypes = {
  handleStartDate: React.PropTypes.function,
  handleEndDate: React.PropTypes.function,
  startDate: React.PropTypes.object,
  endDate: React.PropTypes.object
};

export default DateRange;

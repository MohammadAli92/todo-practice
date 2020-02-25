import React from "react";
import { DatePicker } from "react-advance-jalaali-datepicker";

export default class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      myDate:''
    }
  }
  change=(unix, formatted)=> {
    console.log('---->',unix); // returns timestamp of the selected value, for example.
    console.log('------>',formatted); // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
    this.setState({
      myDate: formatted
    })
    this.props.onRecieveDate(this.state.myDate)
  }

 
  

  DatePickerInput(props) {
    return <input className="form-control form-control-sm" {...props} />;
  }
  render() {
    return (
      <div className="datePicker">
        <DatePicker
          inputComponent={this.DatePickerInput}
          placeholder="انتخاب تاریخ"
          format="jYYYY/jMM/jDD"
          onChange={this.change}
          id="myDate"
          preSelected="1396/05/15"
        />
      </div>
    );
  }
}
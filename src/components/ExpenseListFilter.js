import React from "react";
import { connect } from "react-redux";
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "../actions/filters";
import { DateRangePicker }  from "react-dates";
import { v4 as uuid } from "uuid";

class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={ this.props.filters.text }
                    onChange={ (e => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }) }
                />
                <select value={ this.props.filters.sortBy } onChange={ (e) => {
                    const sortBy = e.target.value;
                    if( sortBy === "date" ) {
                        this.props.dispatch(sortByDate());
                    } else {
                        this.props.dispatch(sortByAmount());
                    }
                } }>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={ this.props.filters.startDate } // momentPropTypes.momentObj or null,
                    startDateId={ uuid() } // PropTypes.string.isRequired,
                    endDate={ this.props.filters.endDate } // momentPropTypes.momentObj or null,
                    endDateId={ uuid() } // PropTypes.string.isRequired,
                    onDatesChange={ ({ startDate, endDate }) => {
                        this.props.dispatch(setStartDate(startDate));
                        this.props.dispatch(setEndDate(endDate));
                    } } // PropTypes.func.isRequired,
                    focusedInput={ this.state.calendarFocused } // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={ calendarFocused => this.setState({ calendarFocused }) } // PropTypes.func.isRequired,
                    showClearDates={ true }
                    numberOfMonths={ 1 }
                    isOutsideRange={ () => false }
                />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilter);

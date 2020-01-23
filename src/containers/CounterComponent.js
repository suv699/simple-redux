import React, { Component } from 'react';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/index';

class CounterComponent extends Component {

    handleBtnActionIncrement = () => {
        this.props.onIncrementClick(this.props.count);
    };
    handleBtnActionDecrement = () => {
        this.props.onDecrementClick(this.props.count);
    };

    render() {
        const { count } = this.props;
        return (
            <div>
                <h1>Count : {count}</h1>
                <Button action={this.handleBtnActionIncrement} buttonTitle='+' />
                <Button action={this.handleBtnActionDecrement} buttonTitle='-' />   
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementClick: (count) => {
            dispatch(increment(count));
        },
        onDecrementClick: (count) => {
            if(count !== 0) 
            dispatch(decrement(count));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
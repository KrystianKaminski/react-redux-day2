import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from './state/counter'

const Counter = (props) => (
    <div>
        <h1>
            {props.counterValue}
        </h1>
        <button
            onClick={() => props.increment()}
        >
            +
        </button>
        <button
            onClick={() => props.decrement()}
        >
            -
        </button>
        <button
            onClick={() => props.reset()}
        >
            RESET
        </button>
    </div>
)


const mapStateToProps = state => ({
    counterValue: state.counter.number
})

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
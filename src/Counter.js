import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './state/counter'

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
    </div>
)


const mapStateToProps = state => ({
    counterValue: state.counter.number
})

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
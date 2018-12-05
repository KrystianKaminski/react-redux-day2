import React from 'react'
import { connect } from 'react-redux'

const RandomUsers = (props) => (
    <div>
        {(props._isError) ? <div>Error</div>
            :
                (props._isFetching) ?
                    <div>Ładowanie...</div>
                     :


            props._users.map(
                user =>
                    <div>{user.name.first}</div>
            )
        }
    </div>
)

const mapStateToProps = state => ({
    _users: state.randomUsers.users,
    _isFetching: state.randomUsers.isFetching,
    _isError: state.randomUsers.isError
})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RandomUsers)
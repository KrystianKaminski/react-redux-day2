import React from 'react'


import { connect } from 'react-redux'
import { fetchUsersAsyncAction } from './state/randomUsers'

class RandomUsers extends React.Component {

    componentDidMount() {
        this.props._fetchUsersAsyncAction(
            'https://randomuser.me/api'
        )
    }

    render() {
        return (
            <div>
                {
                    (this.props._isError) ?
                        <div>Error</div>
                        :
                        (this.props._isFetching) ?
                            <div>Ładowanie...</div>
                            :
                            this.props._users.map(
                                user =>
                                    <div>{user.name.first}</div>
                            )
                }
            </div>

        )
    }
}


const mapStateToProps = state => ({
    _users: state.randomUsers.users,
    _isFetching: state.randomUsers.isFetching,
    _isError: state.randomUsers.isError
})

const mapDispatchToProps = dispatch => ({
    _fetchUsersAsyncAction: url => dispatch(fetchUsersAsyncAction(url))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RandomUsers)
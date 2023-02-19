import React from 'react'
import {
  changePage,
  follow, requestUsers,
  setCurrentPage, setToggle,
  setTotalUsersCount,
  setUsers, unfollow
} from '../../redux/userReducer'
import Users from './Users'
import { connect } from 'react-redux'
import Preloader from '../common/preloader/Preloader'
import { compose } from 'redux'
import {
  getCurrentPage,
  getIsFetching,
  getPageSize,
  getSendingDataInProgress,
  getTotalUsersCount, getUsers
} from '../../redux/usersSelectors'

class UsersContainer extends React.Component {
  componentDidMount () {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.changePage(pageNumber, this.props.pageSize)
  }

  render () {

    return <>
      {this.props.isFetching ? <Preloader/> :
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               sendingDataInProgress={this.props.sendingDataInProgress}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
        />
      }
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    sendingDataInProgress: getSendingDataInProgress(state)
  }
}
export default compose(connect(mapStateToProps, {
  requestUsers,
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setToggle,
  changePage
}))(UsersContainer)
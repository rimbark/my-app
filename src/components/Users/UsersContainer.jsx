import React from 'react'
import {
  changePage,
  follow, getUsers,
  setCurrentPage, setToggle,
  setTotalUsersCount,
  setUsers, unfollow
} from '../../redux/userReducer'
import Users from './Users'
import { connect } from 'react-redux'
import Preloader from '../common/preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class UsersContainer extends React.Component {
  componentDidMount () {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
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
    users: state.userReducer.users,
    pageSize: state.userReducer.pageSize,
    totalUsersCount: state.userReducer.totalUsersCount,
    currentPage: state.userReducer.currentPage,
    isFetching: state.userReducer.isFetching,
    sendingDataInProgress: state.userReducer.sendingDataInProgress
  }
}
export default compose(connect(mapStateToProps, {
  getUsers,
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setToggle,
  changePage
}), withAuthRedirect)(UsersContainer)
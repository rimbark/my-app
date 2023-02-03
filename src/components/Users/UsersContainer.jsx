import React from 'react'
import {
  follow, sendingFollowedData,
  setCurrentPage, setToggle,
  setTotalUsersCount,
  setUsers,
  unFollow
} from '../../redux/userReducer'
import Users from './Users'
import { connect } from 'react-redux'
import Preloader from '../common/preloader/Preloader'
import { userDataAPI } from '../../api/api'

class UsersContainer extends React.Component {
  componentDidMount () {
    this.props.setToggle(true)
    userDataAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setToggle(false)
      this.props.setUsers(data.items)
      this.props.setTotalUsersCount(data.totalCount)
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.setToggle(true)
    userDataAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.setToggle(false)
      this.props.setUsers(data.items)
    })
  }

  render () {
    return <>
      { this.props.isFetching ? <Preloader/> :
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             follow={this.props.follow}
             unFollow={this.props.unFollow}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             sendingFollowedData={this.props.sendingFollowedData}
             sendingDataInProgress={this.props.sendingDataInProgress}/>
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

export default connect(mapStateToProps, { follow, sendingFollowedData, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setToggle })(UsersContainer)

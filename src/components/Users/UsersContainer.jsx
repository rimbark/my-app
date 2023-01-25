import React from 'react'
import {
  follow,
  setCurrentPage, setToggle,
  setTotalUsersCount,
  setUsers,
  unFollow
} from '../../redux/userReducer'
import Users from './Users'
import { connect } from 'react-redux'
import axios from 'axios'
import Preloader from '../common/preloader/Preloader'

class UsersContainer extends React.Component {
  componentDidMount () {
    this.props.setToggle(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setToggle(false)
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.setToggle(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setToggle(false)
      this.props.setUsers(response.data.items)
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
             users={this.props.users}/>
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
    isFetching: state.userReducer.isFetching
  }
}

export default connect(mapStateToProps, { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setToggle })(UsersContainer)

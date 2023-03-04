import React from 'react'
import {
    changePage,
    follow, requestUsers, unfollow
} from '../../redux/userReducer'
import Users from './Users'
import {connect} from 'react-redux'
import Preloader from '../common/preloader/Preloader'
import {compose} from 'redux'
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getSendingDataInProgress,
    getTotalUsersCount, getUsers
} from '../../redux/usersSelectors'
import {AppStateType} from "../../redux/redux-store";
import {UsersType} from "../../redux/Types";

type MapDispatchPropsType = {
    changePage: (pageNumber: number, pageSize: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

type MapStatePropsType = {
    users: Array<UsersType>
    currentPage: number
    isFetching: boolean
    totalUsersCount: number
    sendingDataInProgress: Array<number>
    pageSize: number
}

type OwnPropsType = {
    pageSize: number
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber: number) => {
        this.props.changePage(pageNumber, this.props.pageSize)
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users {...this.props}
                       onPageChanged={this.onPageChanged}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                />
            }
        </>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        sendingDataInProgress: getSendingDataInProgress(state)
    }
}
export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        requestUsers,
        follow,
        unfollow,
        changePage
    }))(UsersContainer)
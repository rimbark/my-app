export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      photo: 'https://avatars.mds.yandex.net/i?id=575d15707fbc9908a3b873f45db36aa7b9112739-6002742-images-thumbs&n=13',
      fullName: 'Iliya',
      status: 'I am learn React',
      location: { country: 'Russia', city: 'NSK' }
    },
    {
      id: 2,
      followed: true,
      photo: 'https://avatars.mds.yandex.net/i?id=122cd3b9add9207fe88f104c1534e7a5e88a97c1-5305509-images-thumbs&n=13',
      fullName: 'Dmitro',
      status: 'I am learn PHP',
      location: { country: 'Thailand', city: 'PK' }
    },
    {
      id: 3,
      followed: false,
      photo: 'https://avatars.mds.yandex.net/i?id=9a2804dbf4b3e0356367203443aa24b64ae5f74b-5329285-images-thumbs&n=13',
      fullName: 'Vasya',
      status: 'I am learn OOP',
      location: { country: 'USA', city: 'NY' }
    }
  ]
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId)
            return { ...u, followed: true }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId)
            return { ...u, followed: false }
          return u
        })
      }
    case SET_USERS:
      return { ...state, users: [...state.users, ...state.users] }
    default:
      return state
  }
}

export default userReducer

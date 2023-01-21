// import React from 'react'
// import style from './User.module.css'
//
// const User = (props) => {
//   return (
//     <div className={style.container}>
//       <div className={style.subscribe}>
//         <div><img src={props.u.photo} alt="ava"/></div>
//         <div>{props.u.followed ? <button onClick={() => {props.userReducer.follow(props.u.id)}}>FOLLOW</button> :
//                                  <button onClick={() => {props.userReducer.unFollow(props.u.id)}}>UNFOLLOW</button>}</div>
//       </div>
//       <div className={style.about}>
//         <div>{props.u.fullName}</div>
//         <div>{props.u.status}</div>
//       </div>
//       <div className={style.about}>
//         <div>{props.u.location.country}</div>
//         <div>{props.u.location.city}</div>
//       </div>
//     </div>
//   )
// }

export default User
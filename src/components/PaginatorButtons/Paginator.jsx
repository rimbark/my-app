import React from 'react'
import style from '../Users/User/User.module.css'
import { createPages } from '../Users/pagesCreator'

const Paginator = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []

  createPages(pages, pagesCount, props.currentPage)

  return (
    <div>
      <button onClick={() => {
        props.onPageChanged(props.currentPage > 10
          ? props.currentPage - 10
          : props.currentPage - (props.currentPage - 1))
      }}>-10
      </button>
      {pages.map(p => {
        return <span key={p} className={props.currentPage === p
          ? style.selectedPage
          : style.commonPage}
                     onClick={() => {props.onPageChanged(p)}}>{p}</span>
      })}
      <button onClick={() => {
        props.onPageChanged((props.currentPage + 10) <= pagesCount
          ? props.currentPage + 10
          : pagesCount)
      }}>+10
      </button>
    </div>
  )
}

export default Paginator
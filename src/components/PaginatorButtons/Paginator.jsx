import React from 'react'
import style from '../Users/User/User.module.css'
import { createPages } from '../Users/pagesCreator'

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize)

  let pages = []

  createPages(pages, pagesCount, currentPage)

  return (
    <div>
      <button onClick={() => {
        onPageChanged(currentPage > 10
          ? currentPage - 10
          : currentPage - (currentPage - 1))
      }}>-10
      </button>
      {pages.map(p => {
        return <span key={p} className={currentPage === p
          ? style.selectedPage
          : style.commonPage}
                     onClick={() => {onPageChanged(p)}}>{p}</span>
      })}
      <button onClick={() => {
        onPageChanged((currentPage + 10) <= pagesCount
          ? currentPage + 10
          : pagesCount)
      }}>+10
      </button>
    </div>
  )
}

export default Paginator
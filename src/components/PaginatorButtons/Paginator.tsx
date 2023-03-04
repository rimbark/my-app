import React from 'react'
import style from '../Users/User/User.module.css'
import { createPages } from '../Users/pagesCreator'

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}
const Paginator: React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

  const pagesCount = Math.ceil(totalUsersCount / pageSize)

  const pages: Array<number> = []

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
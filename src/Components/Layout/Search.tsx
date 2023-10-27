import { useState } from 'react'
import { useAppDispatch } from '../../hooks'
import {
  resetPagination,
  searchPagination,
} from '../../slices/productPaginationSlice'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')
  const dispatch = useAppDispatch()

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (keyword.trim()) {
      dispatch(searchPagination({ search: keyword }))
    } else {
      dispatch(resetPagination())
    }

    navigate('/')
  }

  return (
    <form onSubmit={searchHandler} data-testid="search">
      <div className="input-group w-100">
        <input
          type="text"
          className="form-control"
          placeholder="Search Products..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <div className="input-group-append">
          <button id="search_btn" className="btn">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </form>
  )
}

export default Search

import React from 'react'

export default function SearchBox({searchHandler}) {
  return (
    <input
    placeholder="search .. "
    type="search"
    className=""
    onChange={searchHandler}
  />
  )
}

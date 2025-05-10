import React from 'react'

const searchPage = async ({searchParams}:{searchParams:{
    query:String;
}}) => {
    const {query} = await  searchParams
  return (
    <div>searchPage for {query}</div>
  )
}

export default searchPage
import { Search } from 'lucide-react'
import React, { useState } from 'react'

const SearchBar = () => {
 

  
  
  return (
    <div className='search-container'>
      
     <form action={'/search'}>
     <input type="text"
      className='search-bar'
      placeholder='Search any item' 
      name='query'/>
     </form>
      <div className="search-icon">
        <button type='submit' >
        <Search/>
        </button>
        
        
      </div>
    </div>
  )
}

export default SearchBar
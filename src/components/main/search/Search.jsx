import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className='search-container'>
        <div style={{marginTop:'50px'}} className="box__container">
            <div className="box__item1">
                <h5 style={{marginRight:'35px'}}>Поиск по  номеру</h5>
                <h5 style={{marginRight:'35px'}}>Поиск по марке</h5>
                <h5 style={{marginRight:'35px'}}>Поиск по названию товара</h5>
            </div>
            <div className="box__item2">
                <input type="text"placeholder='Введите марку ' />
                <button>искать</button>
            </div>
        </div>
    </div>
  )
}

export default Search
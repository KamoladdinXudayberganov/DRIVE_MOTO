import React from 'react'
import Bigbanner from './big-banner/Bigbanner'
import Search from './search/Search'
import Catigoria from './catigoria/catigoria'
import { Products } from './products1/Products'
import Smallbanner from './samallbanner/Smallbanner'
import Catigoria2 from './catigoria2/Catigoria2'

const Main = () => {
  return (
    <div>
        <Bigbanner/>
        <Search/>
        <Catigoria/>
        <Products/>
        <Smallbanner/>
        <Catigoria2/>

    </div>
  )
}

export default Main
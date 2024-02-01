import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

import Banner from './Banner'
import Item from './Item'

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Header/>

        <Banner/>
        <Item/>

        <Footer/>
        
      </div>
    )
  }
}



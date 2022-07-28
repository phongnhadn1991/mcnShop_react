import React, { Component } from 'react'
import Item from './Item'

export default class ListItem extends Component {
  render() {
    return (
      <div className='list_item'>
          <Item />
          <Item />
          <Item />
          <Item />
      </div>
    )
  }
}

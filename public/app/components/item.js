//noinspection JSUnresolvedVariable
import React, {Component, PropTypes} from 'react'

export default class Item extends Component {

  render() {
    console.log(this.props.j_data)
    var comment = this.props.j_data.map(function (data) {
      return (
        <p>{data.id}:{data.author}</p>
      )
    })
    return (
      <div>
        {comment}
      </div>
    )
  }
}
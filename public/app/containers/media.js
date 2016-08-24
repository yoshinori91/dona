import React, {Component, PropTypes} from "react"
import Item from '../components/item'

const json_data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

export default class Media extends Component {
  render() {
    return (
      <div>
        <Item j_data={json_data}/>
        <h6>app@!!</h6>
        <form className="commentForm">
          <input type="submit" value="Post"/>
        </form>
      </div>
    )
  }
}
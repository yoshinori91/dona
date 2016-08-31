import React from 'react'
import {connect} from 'react-redux'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

import fetchMediaData from './actions'
import {FETCH_MEDIA_DATA} from './constans'
import Navigation from '../../components/Navigation'

const jsonData = {data: []}

export function mediaPageReducer(state, action) {
  console.log('mediaPageReducer 33')
  console.log(state)
  switch (action.type) {
    case FETCH_MEDIA_DATA:
      console.log(' -> fetch')
      return Object.assign({}, state, {
        value: 'hogehoge'
      })
      return state('something', 'somethingA')
    default:
      console.log(' -> default')
      return state
  }
}

export class MediaPage extends React.Component {

  componentDidMount() {
    console.log('media page ajax')
    $.ajax({
      url: '/media',
      dataType: 'json',
      cache: false,
      success: function (data) {
        // this.setState({data: data.results})
        console.log(data)
        jsonData.data = data.results
        console.log(jsonData)
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  }

  send(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <Navigation />
        Media Page
        <BootstrapTable data={jsonData.data}>
          <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="media">Media Name</TableHeaderColumn>
          <TableHeaderColumn dataField="frame">Frame Name</TableHeaderColumn>
          <TableHeaderColumn dataField="dist">Dist</TableHeaderColumn>
          <TableHeaderColumn dataField="size">Size</TableHeaderColumn>
          <TableHeaderColumn dataField="position">Position</TableHeaderColumn>
        </BootstrapTable>
        <button onClick={() => this.props.handleClick2()}>{this.props.value}</button>
      </div>
    )
  }
}

MediaPage.propTypes = {
  handleClick2: React.PropTypes.func.isRequired,
}

// Connect to Redux
function mapStateToProps(state) {
  return state
}

function mapDispatchToState(dispatch) {
  console.log('mapDispatch')
  return {
    handleClick2: () => dispatch(fetchMediaData())
  }
}

export default connect(mapStateToProps, mapDispatchToState)(MediaPage)

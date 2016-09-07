import React from 'react'
import {connect} from 'react-redux'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

import {sagaData} from '../actions/mediaPage'
import Navigation from '../components/Navigation'
import {callApi} from '../services/api'

const jsonData = {data: []}

export class MediaPage extends React.Component {

  componentDidMount() {
    callApi("/media")
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
        {this.props.hoge}
        <button onClick={() => this.props.handleClick2()}>Button</button>
      </div>
    )
  }
}

MediaPage.propTypes = {
  hoge: React.PropTypes.string,
  handleClick2: React.PropTypes.func.isRequired,
}

// Connect to Redux
function mapStateToProps(state) {
  console.log('called mapStateToProps : ' + state.hoge)
  return {
    hoge: state.mediaPageReducer.hoge,
  }
}

function mapDispatchToState(dispatch) {
  console.log('mapDispatch')
  return {
    handleClick2: () => dispatch(sagaData())
  }
}

export default connect(mapStateToProps, mapDispatchToState)(MediaPage)

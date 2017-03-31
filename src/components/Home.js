import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/count'

function Home({ number, increase, decrease }) {
  return (
    <div>
      Some state changes:
      {number}
      <br />
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
    </div>
  )
}

Home.propTypes = {
  number: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
}

export default connect(
  state => ({ number: state.count.number }),
  actions
)(Home)

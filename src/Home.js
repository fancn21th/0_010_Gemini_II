import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from './count'

function Home({ number, increase, decrease }) {
  return (
    <div>
      Some state changes:
      {number}
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
    </div>
  )
}

Home.propTypes = {
  number: PropTypes.object.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
}

export default connect(
  state => ({ number: state.number }),
  actions
)(Home)

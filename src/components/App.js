import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default function App({ children }) {
  return (
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">爱工作</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">首页</Link></li>
              <li><Link to="/login">登录</Link></li>
              <li><Link to="/foo">注册</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired,
}


import React from 'react'
import { Link } from "react-router-dom"
import { Menu } from "semantic-ui-react"

const Nav = props => {

  return (
    <Menu>
      <Link to="/chatrooms" className="items">
        Chatrooms
      </Link>
      { !props.currentUser ?
        <Menu.Menu position="right">
          <Link to="/signup" className="item">
            Sign Up
          </Link>
          <Link to="/login" className="item">
            Log In
          </Link>
        </Menu.Menu>
        :
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to={`/users/${props.currentUser.id}`}>
              {`Welcome ${props.currentUser.username}! Click here to view profile`}
            </Link>
          </Menu.Item>
          <Menu.Item onClick={props.logout}>
            Log out
          </Menu.Item>
        </Menu.Menu>
      }
    </Menu>
  )

}

export default Nav

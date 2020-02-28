import React from 'react'
import Aux from '../../hoc/Aux'
import Toolbar from '../UI/Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer'

const layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
}

export default layout
import React, { Component} from 'react'
import Aux from '../../hoc/Aux'
import Toolbar from '../UI/Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  } 

  sideDrawerTogglerHandler = () =>{
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render(){
    return(
      <Aux>
        <Toolbar drawerTogglerClicked={this.sideDrawerTogglerHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
} 

export default Layout
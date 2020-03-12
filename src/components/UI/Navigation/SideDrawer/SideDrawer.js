import React from 'react'
import Logo from '../../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import styles from './SideDrawer.module.css'
import Backdrop from '../../Backdrop/Backdrop'
import Aux from '../../../../hoc/Aux'

const sideDrawer = (props) => {
  let attachedClass = [styles.SideDrawer, styles.Close]
  if(props.open){
    attachedClass = [styles.SideDrawer, styles.Open]
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClass.join(' ')}>  
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
    )
}

export default sideDrawer
import React from 'react'
import styles from'./DrawerToggler.module.css'

const drawerToggler = (props) => (
  <div 
    onClick={props.clicked}
    className={styles.DrawerToggle}
  >
    <div />
    <div />
    <div />
  </div>
)

export default drawerToggler
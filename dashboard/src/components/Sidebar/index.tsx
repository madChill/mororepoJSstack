import React from 'react'
import { Icon, Image, Menu, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import classes from './style.module.css'

const SidebarExampleVisible = () => (
  <>
    <nav className={classes.nav}>
      <div className={classes.contentFlui}>
        <div className={classes.logoLayout}>
          <img className="avatar flex-shrink-0 mb-3 mr-3 mb-md-0 mr-md-4"
            src="https://avatars.githubusercontent.com/u/31360611?s=200&amp;v=4" width="100" height="100" alt="@guardrailsio" />
          <div>Dash board</div>
        </div>
        <List className={classes.navbar}>
          <List.Item className={classes.navbarItem}>
            <List.Icon name='add' />
            <List.Content>
              <List.Header><Link to='/new'>Scan add</Link></List.Header>
              <List.Description>
                Add a new scan
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item className={classes.navbarItem}>
            <List.Icon name='folder' />
            <List.Content>
              <List.Header><Link to='/'>Scan list</Link></List.Header>
              <List.Description>
                List avaiable scans
              </List.Description>
            </List.Content>
          </List.Item>
        </List>

      </div>
    </nav>
    <nav className={classes.navBackground}></nav>
  </>
)

export default SidebarExampleVisible
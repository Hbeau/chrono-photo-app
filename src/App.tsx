import { useState } from 'react'
import photo from './assets/photo.jpg'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import {Button,Image, Label,Menu} from 'semantic-ui-react'

function App() {
 return (
  <div className="app">
    <Menu secondary>
      <Menu.Item>
        Round 3
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Label color='yellow' className='scoreLabel'>3200 pts</Label>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    <div className='imageContainer'>
        <Image src={photo} size='large' />
    </div>
    <div className="form">
          <Button>Guess</Button>
    </div>
  </div>
 )
}

export default App

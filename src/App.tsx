import { useState } from 'react'
import photo from './assets/photo.jpg'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import {Button,Container,GridRow,Image, Label,Menu} from 'semantic-ui-react'
import ReactSlider from 'react-slider';

function App() {
  const [year, setYear] = useState(1960);
 return (
  <div className="app">
    <Menu secondary className='header ele'>
      <Menu.Item>
        <Label>Round 3</Label>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Label color='purple' className='scoreLabel'>3200 pts</Label>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    <Container className='middle aligned centered grid'>
      <GridRow>
        <Image src={photo} size='massive' className='photography'/>
      </GridRow>
        <GridRow>
          
        <Label circular basic color='purple' size='big'>{year}</Label>
        </GridRow>
      <GridRow >
      <ReactSlider
      className="year-guess-slider"
      thumbClassName="thumb"
      trackClassName="year-guess-track"
      marks={[1900, 1920, 1940, 1960, 1980, 2000, 2020]}
      markClassName="years-marks"
      renderMark={(props) =><div {...props}><span className='milestone'></span><span className='year-label'>{props.key}</span></div>}
      min={1900}
      max={2023}
      onChange= {(value)=> setYear(value)}
      />
      </GridRow>
      <GridRow>
      <Button color='purple'>Guess</Button>
      </GridRow>
    </Container>
  </div>
 )
}

export default App

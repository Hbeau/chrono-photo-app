import { Dispatch, SetStateAction, createContext, useContext, useRef, useState } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import {Button,ButtonProps,Container,GridRow,Image, Label,Menu} from 'semantic-ui-react'
import { Photography } from './components/photography'
import { YearGuessSlider } from './components/year-guess-slider';
import { YearSlider } from './components/year-slider';
import game from './assets/game.json';

interface Round {
  number:number;
  year_to_guess:number;
  image_link:string;
}
function Slider(props : {round:Round,setRound : Function}){
  const [step, setStep] = useState("guess");
  const [year, setYear] = useState(1960);
  const handleNextStepButton = function(){
    setStep("guess");
    console.log(props.round.number + 1);
    setYear(1960);
    props.setRound(game.rounds[props.round.number + 1]);
  }
  const handleGuessButton = function(){
    setStep("result");
    const {score, setScore} = useContext(ScoreContext);
    setScore(score + 300);
  }
  if(step === "guess"){ 
  return <Container className='middle aligned centered grid'>
    <GridRow>
        <Label circular basic color='violet' size='big'>{year}</Label>
    </GridRow>
    <GridRow>
      <YearSlider
      year={year}
      onChange={(value: number)=> setYear(value)}
    ></YearSlider>
    </GridRow>
    <GridRow>
      <Button color='violet' size='big' onClick={handleGuessButton}>Guess</Button>
      </GridRow>
</Container>
}
let sliderColor ="default";
    const distance = Math.abs(props.round.year_to_guess-year);
    if(distance < 10) {
        sliderColor="green"
    } else if(distance < 20) {
        sliderColor="yellow"
    } else {
        sliderColor="red"
    }
  return <Container className='middle aligned centered grid'>
     <GridRow>
        <Label circular basic className={sliderColor} size='big'>{year}</Label>

    </GridRow>
    <GridRow>
      <YearGuessSlider
      yearToGuess={props.round.year_to_guess}
      guessedYear={year}
      color={sliderColor}
    ></YearGuessSlider>
    </GridRow>
    <GridRow>
      <Button basic size='big' className={sliderColor} onClick={handleNextStepButton}>Next Round</Button>
    </GridRow>
  </Container>
}
interface ScoreHook {score:number, setScore :Dispatch<SetStateAction<number>>};
const ScoreContext = createContext<ScoreHook>({} as ScoreHook);

function App() {
  const [round, setRound] = useState(game.rounds[0]);
  const [score,setScore] = useState(0);
 return (
  <ScoreContext.Provider value={
    {score,setScore}
    }>
    <div className="app">
      <Menu secondary className='header'>
        <Menu.Item>
          <Label>Round {round.number}</Label>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Label color='violet' className='scoreLabel'>{score} pts</Label>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Container className='middle aligned centered grid'>
        <GridRow>
          <Photography link={round.image_link}></Photography>
        </GridRow>    
      </Container>
        <Slider
        round={round}
        setRound={setRound}
        ></Slider>
    </div>
  </ScoreContext.Provider>

 )
}

export default App

import { useState } from "react";
import ReactSlider from "react-slider"

export function YearGuessSlider(properties: {yearToGuess : number , guessedYear : number, color: string}){
    let  sliderValue : number | number[] = properties.guessedYear;
        sliderValue = [properties.yearToGuess,properties.guessedYear].sort();
    return <ReactSlider
        disabled
        className="year-guess-slider"
        trackClassName="year-guess-track"
        thumbClassName='thumb'
        marks={[1900, 1920, 1940, 1960, 1980, 2000, 2020]}
        markClassName="years-marks"
        renderMark={(props) =><div {...props}><span className='milestone'></span><span className='year-label'>{props.key}</span></div>}
        renderThumb={(props,state)=>{
            if (state.valueNow == properties.yearToGuess) {
                return <div {...props} className={`landmark ${properties.color} ${props.className}`} />
            } 
            return <div {...props} className={`${properties.color} ${props.className}`}/>
            }
        }
        renderTrack={
            (props,state)=>{
                console.log(state);
            if(state.index ===1 && Array.isArray(state.value)) {
                return <div {...props} className={`${properties.color} ${props.className}`} />
            }
            return <div {...props} />
            }
        }
        min={1900}
        max={2023}
        value={sliderValue}
        />
    }
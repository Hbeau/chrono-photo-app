import { forwardRef, useState } from "react";
import ReactSlider from "react-slider";

export function YearSlider(props : {year: number,onChange: any}) {
    return <ReactSlider
    className="year-guess-slider"
    trackClassName="year-guess-track"
    marks={[1900, 1920, 1940, 1960, 1980, 2000, 2020]}
    markClassName="years-marks"
    thumbClassName='thumb default'
    renderMark={(props) =><div {...props}><span className='milestone'></span><span className='year-label'>{props.key}</span></div>}
    min={1900}
    max={2023}
    value={props.year}
    onChange={props.onChange}
    />
}

import { Image, List } from 'semantic-ui-react'
 
 export function Photography(props:{link : string}) {
   console.log(props.link);
    return <Image src={props.link} size='massive' className='photography'/>
 }

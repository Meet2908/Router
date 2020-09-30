import React,{Component} from 'react'
import {useParams} from "react-router-dom";



class Service extends Component{
    
    
    render(props){
        return(
            <div>
                <h1>we are providing best {this.props.Name} Service</h1>
            </div>
        )
    }

}
export default Service;



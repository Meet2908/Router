import React,{Component} from 'react';
import {BrowserRouter as Router , Link , NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import Feature from './Feature';
import Service from './Service';


 export const User = ({match}) => {
  return(<h1>welcome user {match.params.username}</h1>)
  
}



class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      name : 'consultancy'
    }
  }
  
  render(){
    return(
      <Router>
        <div>
              <NavLink to="/contact" exact activeStyle={{color : 'green'}}>contact</NavLink><br/>
              <NavLink to="/about" exact activeStyle={{color : 'red'}}>About</NavLink><br/>
              <NavLink to="/user/meet" exact  activeStyle={{color : 'blue'}}>  meet</NavLink><br/>
              <NavLink to="/user/amit" exact activeStyle={{color : 'grey'}}> amit</NavLink><br/>
              <NavLink to="/service" exact activeStyle={{color : 'blue'}}> Service</NavLink><br/>
               <NavLink to="/feature" exact activeStyle={{color : 'red'}}>Feature</NavLink>
              <Route exact strict path="/about" render={
                () => {
                  return(<h1>welcome about</h1>)
                }
              }/>
              
             
              <Route exact strict path="/contact" render={
                () => {
                  return(<h1>welcome to contact</h1>)
                }
              }/>
            
             
              <Route exact strict path="/user/:username" component={ User}/>

              <Route exact strict path="/Service" component={(props) => (<Service Name={this.state.name}/>)} />
       
           <Route exact strict path="/feature" component={Feature}/>
              
       </div>
      </Router>
      
    )
  }
}

export default App;


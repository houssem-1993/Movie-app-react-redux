import React from 'react'
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import MovieApp from '../components/MovieApp'
import Descripition from '../components/Descripition'
 const AppRouter = ()=> (

    <Router>
    <Switch>
    <Route path="/" exact component={MovieApp} />
    <Route path="/description/:id" exact component={Descripition}/>
    
    
    
    </Switch>




    </Router>
 )
    

export default AppRouter
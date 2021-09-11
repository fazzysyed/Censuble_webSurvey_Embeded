import React,{useState} from 'react';
import Survey from './survey';
import Single from './Components/Single';
import TakeSurvey from './Components/TakeSurvey';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App({deviceToken}) {
  const [survey,setSurvey] = useState(false);
  return (
    
 <Router>   
 <>
 
   <Survey userKey = "BHSK" deviceToken ={deviceToken}     close = {()=>setSurvey(false)} />
    </>

  </Router>
   
  )
}

export default App;

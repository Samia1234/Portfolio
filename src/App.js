
import { useState,useEffect } from 'react';
import {  BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import Works from './components/Works';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar'
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Loading from './components/Loading';
import Work from './components/works/Work';
function App() {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
      const loadData=async()=>{
          await new Promise((r)=>setTimeout(r,2006));
          setLoading((loading)=>!loading)
      }
      loadData();
  },[])
  if (loading) {
      return <Loading/>
  }
    
  // If page is not in loading state, display page.
  else {
  return (
    
    <Router>
  
      <Navbar/>
      <Switch>
      <Route  path='/Portfolio' exact component={Home} />
      <Route  path='/about' component={About} />
     <Route  path='/works' component={Work}/>
     <Route  path='/skills' component={Skills}/>
     <Route  path='/contact' component={Contact}/>
     </Switch>
<Footer/>
    </Router>
  
  );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import Resume from './react-resume-builder/index'
import './app.sass';
import Footer from'./footer'
import data from './resumeSchema'
const App = ()=>{
    
  return (
        <div class="section">
            <Resume data={data} onSave={(x)=>{console.log(x)}} />
            <Footer />
        </div>
  );
  }
export default App;

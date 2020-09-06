import React from 'react';
import logo from './logo.svg';

import Resume from './resume/newone'
import './app.sass';
const App = ()=>{
    const _data= {
        resume:{
            data:[
                {
                    name:"basic",
                    description:"blablabla",
                    unique:true,
                    deletable:false,
                    fields:[
                       [ {
                            type:"text",
                            name:"Name",
                            value:"asdf",
                            pattern:/^[A-Za-z]+$/i,
                            placeholder:"Enter your name",
                            
                        },
                        {
                            type:"text",
                            name:"Mobile-Number",
                            value:"",
                            pattern:/^(\+\d{1,3}[- ]?)?\d{10}$/,
                            placeholder:"Enter your Mobile Number",
                            
                        },
                        {
                            type:"text",
                            name:"Email-Address",
                            value:"",
                            pattern:/\S+@\S+\.\S+/,
                            placeholder:"Enter your Email Address",
                            
                        },
                        {
                            type:"textarea",
                            name:"Present-Address",
                            value:"",
                            placeholder:"Enter your Present Address",
                            
                        },
                        {
                            type:"textarea",
                            name:"About",
                            value:"",
                            placeholder:"Describe Yourself in one sentence",
                            
                        },]
    
                    ]
              
                },
                {
                    name:"Educatoin & Certification",
                    description:"blablabla",
                    unique:false,
                    deletable:false,
                    fields:[
                        [{
                            type:"text",
                            name:"Company-Name",
                            value:"",
                            pattern:/^[A-Za-z]+$/i,
                            placeholder:"School / College / University",
                            
                        },
                        {
                            type:"text",
                            name:"Company-Location",
                            value:"",
                            pattern:/^[A-Za-z]+$/i,
                            placeholder:"Degree",
                            
                        },
                        {
                            type:"text",
                            name:"Designation",
                            value:"",
                            pattern:/^[A-Za-z]+$/i,
                            placeholder:"Grade",
                            
                        },
                        {
                            type:"datepicker",
                            name:"Date",
                            value:"",
                            pattern:/^[A-Za-z]+$/i,
                            placeholder:"Date",
                            
                        },]
                        
                    ]
                },
                {
                    name:"Work & Professional Experience",
                    description:"blablabla",
                    unique:false,
                    deletable:false,
                    fields:[
                        [{
                            type:"text",
                            name:"Company-Name",
                            value:"google",
                            pattern:/^[A-Za-z]+$/i,
                            placeholder:"Company / Organization Name",
                            
                        },
                        {
                            type:"text",
                            name:"Company-Location",
                            value:"Azamgarh",
                            pattern:/^[A-Za-z]+$/i,
                            placeholder:"Company Location",
                            
                        },
                        {
                            type:"text",
                            name:"Designation",
                            value:"",
                            pattern:/^[A-Za-z]+$/i,
                            placeholder:"Designation",
                            
                        },
                        {
                            type:"datepicker",
                            name:"Starting-Date",
                            value:"",
                            pattern:/^[A-Za-z]+$/i,
                            placeholder:"Designation",
                            
                        },
                        {
                            type:"datepicker",
                            name:"End-Date",
                            value:"",
                            pattern:/^[A-Za-z]+$/i,
                            placeholder:"Designation",
                            
                        },]
                    ]
                },
                {
                    name:"Achivements   ",
                    description:"blablabla",
                    unique:true,
                    deletable:false,
                    fields:[
                        [{
                            type:"tag",
                            name:"Achivements",
                            value:['adsf','dd','e','f'],
                            vertical:true,
                            pattern:/^[A-Za-z]+$/i,
                            placeholder:"....",
                            
                        },]
                    ]
                },
                {
                    name:"Language Known   ",
                    description:"blablabla",
                    unique:true,
                    deletable:false,
                    fields:[
                        [{
                            type:"tag",
                            name:"Languange-Known",
                            value:['adsf','dd','e','f'],
                            pattern:/^[A-Za-z]+$/i,
                            placeholder:"....",
    
                            
                        },]
                    ]
                },
                {
                    name:"Intrests Hobbies",
                    description:"blablabla",
                    unique:true,
                    deletable:false,
                    fields:[
                        [{
                            type:"tag",
                            name:"Intrests",
                            value:['i dont have any'],
                            pattern:/^[A-Za-z]+$/i,
                            placeholder:"....",
    
                            
                        },]
                    ]
                }
            ]
        }
    }
  return (
    <div class="section">
    
      <Resume _data={_data}/>
    </div>
  );
  }

export default App;

import React from 'react';
import logo from './logo.svg';
import Resume from './react-resume-builder/index'
import './app.sass';
const App = ()=>{
    const _data= {
        resume:{
            data:[
                {
                    name:"basic",
                    description:"Employers will use this information to contact you.",
                    unique:true,
                    deletable:false,
                    fields:[
                       [ {
                            type:"text",
                            name:"name",
                            value:"",
                            required: true,
                            pattern:/^[a-z][a-z '-.,]{0,31}$|^$/i,
                            placeholder:"Enter your name",
                            
                        },
                        {
                            type:"text",
                            name:"mobile-number",
                            value:"",
                            required: true,
                            pattern:/^(\+\d{1,3}[- ]?)?\d{10}$/,
                            placeholder:"Enter your Mobile Number",
                            
                        },
                        {
                            type:"text",
                            name:"email-address",
                            value:"",
                            required: true,
                            pattern:/\S+@\S+\.\S+/,
                            placeholder:"Enter your Email Address",
                            
                        },
                        {
                            type:"textarea",
                            name:"present-address",
                            value:"",
                            required: true,
                            placeholder:"Enter your Present Address",
                            
                        },
                        {
                            type:"textarea",
                            name:"about",
                            value:"",
                            required: true,
                            placeholder:"Describe Yourself in one sentence",
                            
                        },]
    
                    ]
              
                },
                {
                    name:"education-and-certification",
                    description:"Add information about your educational background. Start off by listing your degrees/certificates from most recent to oldest.",
                    unique:false,
                    deletable:false,
                    fields:[
                        [{
                            type:"text",
                            name:"college",
                            value:"",
                            required: true,
                            pattern:/^[a-z][a-z '-.,]{0,31}$|^$/i,
                            placeholder:"School / College / University",
                            
                        },
                        {
                            type:"text",
                            name:"degree",
                            value:"",
                            required: true,
                            pattern:/^[a-z][a-z '-.,]{0,31}$|^$/i,
                            placeholder:"Degree / certificate",
                            
                        },
                        {
                            type:"text",
                            name:"grade",
                            value:"",
                            required: true,
                            pattern:/^[A-Za-z]+$/i,
                            placeholder:"Grade",
                            
                        },
                        {
                            type:"datepicker",
                            name:"date",
                            required: true,
                            value:"",
                            placeholder:"Date",
                            
                        },]
                        
                    ]
                },
                {
                    name:"work-and-professional-experience",
                    description:"Your most recent or current job/experience should be listed first. Then, work in reverse chronological order, from your newest to your oldest jobs.",
                    unique:false,
                    deletable:false,
                    fields:[
                        [{
                            type:"text",
                            name:"company-name",
                            value:"",
                            pattern:/^[a-z][a-z '-.,]{0,31}$|^$/i,
                            placeholder:"Company / Organization Name",
                            
                        },
                        {
                            type:"text",
                            name:"company-location",
                            value:"",
                            pattern:/^[a-z][a-z '-.,]{0,31}$|^$/i,
                            placeholder:"Company Location",
                            
                        },
                        {
                            type:"text",
                            name:"designation",
                            value:"",
                            pattern:/^[a-z][a-z '-.,]{0,31}$|^$/i,
                            placeholder:"Designation",
                            
                        },
                        {
                            type:"datepicker",
                            name:"starting-date",
                            value:"",
                            placeholder:"Designation",
                            
                        },
                        {
                            type:"datepicker",
                            name:"end-date",
                            value:"",
                            placeholder:"Designation",
                            
                        },]
                    ]
                },
                {
                    name:"links",
                    description:"",
                    unique:true,
                    deletable:false,
                    fields:[
                        [{
                            type:"text",
                            name:"github",
                            value:"",
                            pattern:/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i,
                            placeholder:"Github Url",
                            
                        }
                        ,
                        {
                            type:"text",
                            name:"linkedin",
                            value:"",
                            pattern:/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i,
                            placeholder:"linkedin Url",
                            
                        }]
                        
                    ]
                },
                {
                    name:"project",
                    description:"Add information about your Projects",
                    unique:false,
                    deletable:false,
                    fields:[
                        [{
                            type:"text",
                            name:"project-name",
                            value:"",
                            pattern:/^[a-z][a-z '-.,]{0,31}$|^$/i,
                            placeholder:"Project Title",
                            
                        },
                        {
                            type:"text",
                            name:"about-project",
                            value:"",
                            placeholder:"Project Description",
                            
                        },
                        {
                            type:"text",
                            name:"project-link",
                            value:"",
                            pattern:/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i,
                            placeholder:"Project Link",
                            
                        },
                        ]
                    ]
                },
                {
                    name:"achivements",
                    description:"",
                    unique:true,
                    deletable:false,
                    fields:[
                        [{
                            type:"tag",
                            name:"achivements",
                            value:"",
                            vertical:true,
                            pattern:/^[a-z][a-z '-.,]{0,31}$|^$/i,
                            placeholder:"....",
                            
                        },]
                    ]
                },
                {
                    name:"language-known",
                    description:"",
                    unique:true,
                    deletable:false,
                    fields:[
                        [{
                            type:"tag",
                            name:"languange-known",
                            value:"",
                            required: true,
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
            <Resume data={_data} onSave={(x)=>{console.log(x)}} />
        </div>
  );
  }
export default App;

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
                    description:"blablabla",
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
                    description:"blablabla",
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
                    description:"blablabla",
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
                    description:"blablabla",
                    unique:true,
                    deletable:false,
                    fields:[
                        [{
                            type:"text",
                            name:"home-page",
                            value:"",
                            pattern:/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i,
                            placeholder:"Personal Website",
                            
                        },
                        {
                            type:"text",
                            name:"github",
                            value:"",
                            pattern:/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i,
                            placeholder:"Github Url",
                            
                        }
                        ,
                        {
                            type:"text",
                            name:"linkdin",
                            value:"",
                            pattern:/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i,
                            placeholder:"Linkdin Url",
                            
                        }
                        ,
                        {
                            type:"text",
                            name:"blog",
                            value:"",
                            pattern:/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i,
                            placeholder:"Blog Url",
                            
                        }
                        ]
                        
                    ]
                },
                {
                    name:"project",
                    description:"blablabla",
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
                    description:"blablabla",
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
                    description:"blablabla",
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
                },
                {
                    name:"intrests-hobbies",
                    description:"blablabla",
                    unique:true,
                    deletable:false,
                    fields:[
                        [{
                            type:"tag",
                            name:"intrests",
                            value:"",
                            pattern:/^[a-z][a-z '-.,]{0,31}$|^$/i,
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

/*
schema sample
data= {
    resume:{
        data:[
            
            {
                name:"basic",//RESUME HEADING
                description:"you know what it is xD",
                unique:true, //if false you can create duplicate fields using `add another` button
                fields:[
                   [ {
                        type:"text",//input type. there are 3 inpue  types right now(text,textarea,datepicker,tag)
                        name:"name",
                        value:"", //default value
                        required: true,
                        pattern:/^[a-z][a-z '-.,]{0,31}$|^$/i, //valid inputs
                        placeholder:"Enter your name", //input placeholder
                        
                    }
                    //....more imput fields
                    ]

                ]
          
            }
           // ..... more 
            ]
    }
}
*/
let data= {
    resume:{
        data:[
            {
                name:"basic",
                description:"Employers will use this information to contact you.",
                unique:true,
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
                name:"education",
                description:"Add information about your educational background. Start off by listing your degrees/certificates from most recent to oldest.",
                unique:false,
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
                name:"certificate",
                description:" Start off by listing your certificates from most recent to oldest.",
                unique:false,
                fields:[
                    [{
                        type:"text",
                        name:"certificate",
                        value:"",
                        required: true,
                        pattern:/^[a-z][a-z '-.,]{0,31}$|^$/i,
                        placeholder:"Certificate",
                        
                    },
                    {
                        type:"text",
                        name:"issuer",
                        value:"",
                        required: true,
                        pattern:/^[a-z][a-z '-.,]{0,31}$|^$/i,
                        placeholder:"issued by",
                        
                    },
                    ]
                    
                ]
            },
            {
                name:"work-and-professional-experience",
                description:"Your most recent or current job/experience should be listed first. Then, work in reverse chronological order, from your newest to your oldest jobs.",
                unique:false,
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
                fields:[
                    [{
                        type:"text",
                        name:"link1",
                        value:"",
                        pattern:/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i,
                        placeholder:"i.e. Github Url",
                        
                    }
                    ,
                    {
                        type:"text",
                        name:"link2",
                        value:"",
                        pattern:/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i,
                        placeholder:"i.e. linkedin Url",
                        
                    },
                    {
                        type:"text",
                        name:"link3",
                        value:"",
                        pattern:/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i,
                        placeholder:"",
                        
                    }
                    ]
                    
                ]
            },
            {
                name:"project",
                description:"Add information about your Projects",
                unique:false,
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
export default data;
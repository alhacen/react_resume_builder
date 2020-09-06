import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Tag from "./elms/tag"
const KeyCodes = {
    comma: 188,
    enter: 13,
  };

const delimiters = [KeyCodes.comma, KeyCodes.enter];
const Resume = ({_data}) =>{
    // console.log(_data)
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    
    const handleForms = (e,input,y,di,fi) =>{
        // console.log(x.target.value,input)
        let tmpstr=Object.assign({}, structure);
        tmpstr.resume.data[di].fields[fi]['value']=e.target.value;
        setStructure(tmpstr);
    }
    const createInput = (input,y,di,fi) =>{
        const handleDate = (e,input,y,di,fi) =>{
            let tmpstr=Object.assign({}, structure);
            tmpstr.resume.data[di].fields[fi]['value']=e;
            setStructure(tmpstr);
            console.log(tmpstr)
        }
        const handleTag = (e,input,y,di,fi) =>{
            let tmpstr=Object.assign({}, structure);
            tmpstr.resume.data[di].fields[fi]['value']=e;
            setStructure(tmpstr);
            console.log(tmpstr)
        }
        switch(input.type){
            case "text":
                return <input type="text" class="input" name={input.name} value={input.value}  placeholder={input.placeholder} onChange={(e)=>{handleForms(e,input,y,di,fi);}} ref={register({ pattern: input.pattern })} />
                break;
            case "textarea":
                return <textarea class="input" name={input.name} value={input.value}  placeholder={input.placeholder} onChange={(e)=>{handleForms(e,input,y,di,fi);}} ref={register({ pattern: input.pattern })} style={{'height':'60px'}}></textarea>
                break;
            case "datepicker":
                return <DatePicker className="input"
                    selected={Date.parse(input.value)}
                    onChange={(e)=>{handleDate(e,input,y,di,fi)}}
                />
                break;
            case "tag":
                return <Tag callback={(data)=>{handleTag(data,input,y,di,fi)}} vertical={input.vertical} data={input.value}/>
                break;

        }
        // return <input type="text" class="input"  />
    }
    const [structure,setStructure]=useState(_data);
   window.x=structure

   const createAnother = (index,elm)=>{
        let tmp={...structure}; 
        let newData={...structure.resume.data[index]};
// console.log(x)
        // tmp.resume.data.splice(index+1, 0, newData);
        newData=JSON.stringify(newData)
        newData=JSON.parse(newData)
        console.log(newData)
        newData.fields.map(x=>{
            x.value=""//empty all input of that data
        }) 
        newData.deletable=true;
        tmp.resume.data.splice(index+1, 0, newData);
        setStructure(tmp)
        console.log(elm)
       /*
        // let tmp=Object.assign({}, structure); 
        // let newData=Object.assign({}, structure.resume.data[index]);
        let tmp = {...structure};
        let newData={...structure.resume.data[index]}
        window.n=tmp
        console.log(newData)
        
        newData.deletable=true;
        newData.value='asdf'
        // newData=createEmtyForm(newData)
        // newData.fields.map(x=>{
        //     x.value=""//empty all input of that data
        // }) 
        tmp.resume.data.splice(index+1, 0, newData);
        setStructure(tmp)
        console.log(newData)
        */
   }
   const deleteData = (index) =>{
    if (index > -1) {
        let tmp=Object.assign({}, structure); 
        tmp.resume.data.splice(index, 1);
       setStructure(tmp)

      }
   }
    return(
    <div>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}

        {
    structure.resume.data.map((data,datai)=>{
        return(
            <>
        <div class="columns is-tablet dataFields ">
            <div class="column is-5">
                <h1 class="title ">{data.name}</h1>
                <p class="bold bold">{data.description}</p>
            </div>
            <div class="column ">
                {
                    data.fields.map((input,fieldi)=>{
                        return(
                            <div className="padding15">
                                <p className="font20 marginBottom5" >{input.name.replace("-"," ")}</p>
                                {createInput(input,data,datai,fieldi)}
                                
                            </div>
                        )
                    })
                }
                
                <div class="columns is-mobile padding15" style={{'height':'70px'}}>
                    <p class="column center">
                    {
                        (!data.unique)?<button onClick={()=>{createAnother(datai,data)}} class="button animatex hidden addAnotherbtn">Add Another</button>:null
                    }
                    </p>
                    <p class="column center">
                    {
                        (data.deletable)?<a onClick={()=>{deleteData(datai)}} class="button hidden addAnotherbtn noborder">delete</a>:null
                    }
                    </p>
                </div>
            </div>
        </div>
      <hr className="hr1"/>

        </>
        )
    })
}
<input type="submit" />
            {/* </form> */}
            
    </div>
            
    )
}


export default Resume;
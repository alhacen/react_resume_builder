import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Template} from './downloadTemplate'
import Tag from "./elms/tag"
const KeyCodes = {
    comma: 188,
    enter: 13,
  };
const delimiters = [KeyCodes.comma, KeyCodes.enter];
const objSize = (obj) =>{
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}
const saveLocal = (data) =>{
    localStorage.setItem('data', JSON.stringify(data));
}
const Resume = ({data,onSave}) =>{
    const { register, handleSubmit } = useForm();
    const onSubmit = () => onSave(structure);
    const createInput = (input,y,di,index,fi) =>{
        const handleForms = (e,input,y,di,index,fi) =>{
            // console.log(x.target.value,input)
            let tmpstr=Object.assign({}, structure);
            tmpstr.resume.data[di].fields[index][fi]['value']=e.target.value;
            setStructure(tmpstr);
            saveLocal(structure);
        }
        const handleDate = (e,input,y,di,index,fi) =>{
            let tmpstr=Object.assign({}, structure);
            tmpstr.resume.data[di].fields[index][fi]['value']=e;
            setStructure(tmpstr);
            console.log(tmpstr);
            saveLocal(structure);
        }
        const handleTag = (e,input,y,di,index,fi) =>{
            let tmpstr=Object.assign({}, structure);
            tmpstr.resume.data[di].fields[index][fi]['value']=e;
            setStructure(tmpstr);
            console.log(tmpstr);
            saveLocal(structure);
        }
        switch(input.type){
            case "text":
                return <input type="text" class="input" name={input.name} value={input.value}  placeholder={input.placeholder} onChange={(e)=>{handleForms(e,input,y,di,index,fi);}} ref={register({ pattern: input.pattern,required:input.required })} />
                break;
            case "textarea":
                return <textarea class="input" name={input.name} value={input.value}  placeholder={input.placeholder} onChange={(e)=>{handleForms(e,input,y,di,index,fi);}} ref={register({ pattern: input.pattern })} style={{'height':'60px'}}></textarea>
                break;
            case "datepicker":
                return <DatePicker className="input"
                    selected={Date.parse(input.value)}
                    onChange={(e)=>{handleDate(e,input,y,di,index,fi)}}
                />
                break;
            case "tag":
                return <Tag callback={(data)=>{handleTag(data,input,y,di,index,fi)}} vertical={input.vertical} data={input.value}/>
                break;
        }
    }
    const [structure,setStructure]=useState(data);
    const createAnother = (index,elm)=>{
        let tmp={...structure}; 
        let newData={...structure.resume.data[index]};
        newData=JSON.stringify(newData)
        newData=JSON.parse(newData)
        newData.fields[0].map(x=>{
            x.value=""//empty all input of that data
        })
        tmp.resume.data[index].fields.push(newData.fields[0])
        console.log(tmp)
        setStructure(tmp)
    }
    const deleteData = (datai,index) =>{
        if (index > -1) {
            let tmp=Object.assign({}, structure); 
            tmp.resume.data[datai].fields.splice(index, 1);
        setStructure(tmp)

        }
    }
    return(
    <div>
        

        {
    structure.resume.data.map((data,datai)=>{
        // console.log(data)
        return(
            <>
        <div class="columns is-tablet dataFields ">
            <div class="column is-5">
                <h1 class="title ">{data.name.replaceAll("-"," ").toUpperCase()}</h1>
                <p class="bold bold" style={{'color':'#b5b5b5'}}>{data.description}</p>
            </div>
            <div class="column " style={{'position':'relative'}}>
                {
                    data.fields.map((input,index)=>{
                       return(
                           <>
                            {
                                input.map((input,fieldi)=>{
                                    return(
                                        <div className="padding15">
                                            <p className="font20 marginBottom5" >{input.name.replaceAll("-"," ").toUpperCase()}</p>
                                            {createInput(input,data,datai,index,fieldi)}
                                        </div>
                                        )
                                })
                            }
                        <div class="columns is-mobile padding15" style={{'height':'70px'}}>
                            <p class="column">
                            {
                                (data.fields.length>1)?<a style={{'position':'absolute', 'marginLeft':'320px'}} onClick={()=>{deleteData(datai,index)}} class="button addAnotherbtn is-danger noborder">delete</a>:null
                            }
                            </p>
                            
                            
                        </div>
                        
                {(objSize(data.fields)-index-1)?<hr className="hr1"/>:null}
                           </>
                       )
                    })

                }
                <p class="column center" style={{'position':'absolute', 'marginTop':'-65px','marginLeft':'180px'}}>
                            {
                                (!data.unique)?<button onClick={()=>{createAnother(datai,data)}} class="button animatex addAnotherbtn">Add Another</button>:null
                            }
                            </p>

            </div>
        </div>
      <hr className="hr1"/>
        </>
        )
    })
}
<p class="column center">
    
    {/* <button onClick={handleSubmit(onSubmit)} class="button animatex addAnotherbtn margin5">Save</button> */}
    
    <button onClick={()=>{window.open("").document.write(Template(structure))}} class="button animatex addAnotherbtn margin5">Download</button>
</p>
    </div>
            
    )
}


export default Resume;

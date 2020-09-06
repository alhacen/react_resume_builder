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
const objSize = (obj) =>{
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}
const Resume = ({_data}) =>{
    // console.log(_data)
    const { register, handleSubmit } = useForm();
  const onSubmit = () => console.log(structure);
    

    const createInput = (input,y,di,index,fi) =>{
        const handleForms = (e,input,y,di,index,fi) =>{
            // console.log(x.target.value,input)
            let tmpstr=Object.assign({}, structure);
            tmpstr.resume.data[di].fields[index][fi]['value']=e.target.value;
            setStructure(tmpstr);
        }
        const handleDate = (e,input,y,di,index,fi) =>{
            let tmpstr=Object.assign({}, structure);
            tmpstr.resume.data[di].fields[index][fi]['value']=e;
            setStructure(tmpstr);
            console.log(tmpstr)
        }
        const handleTag = (e,input,y,di,index,fi) =>{
            let tmpstr=Object.assign({}, structure);
            tmpstr.resume.data[di].fields[index][fi]['value']=e;
            setStructure(tmpstr);
            console.log(tmpstr)
        }
        switch(input.type){
            case "text":
                return <input type="text" class="input" name={input.name} value={input.value}  placeholder={input.placeholder} onChange={(e)=>{handleForms(e,input,y,di,index,fi);}} ref={register({ pattern: input.pattern })} />
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
        // return <input type="text" class="input"  />
    }
    const [structure,setStructure]=useState(_data);
   window.x=structure

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
            {/* <form onSubmit={return false;}> */}

        {
    structure.resume.data.map((data,datai)=>{
        // console.log(data)
        return(
            <>
        <div class="columns is-tablet dataFields ">
            <div class="column is-5">
                <h1 class="title ">{data.name}</h1>
                <p class="bold bold">{data.description}</p>
            </div>
            <div class="column ">
                {
                    data.fields.map((input,index)=>{
                       return(
                           <>
                            {
                                input.map((input,fieldi)=>{
                                    return(
                                        <div className="padding15">
                                            <p className="font20 marginBottom5" >{input.name.replace("-"," ")}</p>
                                            {createInput(input,data,datai,index,fieldi)}
                                        </div>
                                        )
                                })
                            }
                            <div class="columns is-mobile padding15" style={{'height':'70px'}}>
                    <p class="column center">
                    {
                        (!data.unique)?<button onClick={()=>{createAnother(datai,data)}} class="button animatex addAnotherbtn">Add Another</button>:null
                    }
                    </p>
                    <p class="column center">
                    {
                        (data.fields.length>1)?<a onClick={()=>{deleteData(datai,index)}} class="button addAnotherbtn noborder">delete</a>:null
                    }
                    </p>
                    
                </div>
                
                {(objSize(data.fields)-index-1)?<hr className="hr1"/>:null}
                           </>
                       )
                    })

                }

            </div>
        </div>
      <hr className="hr1"/>

        </>
        )
    })
}
<p class="column center">
    <button onClick={handleSubmit(onSubmit)} class="button animatex addAnotherbtn">Save</button>
</p>
            {/* </form> */}
            
    </div>
            
    )
}


export default Resume;
import React, {useState} from 'react';
const Tag = ({callback,data,vertical}) =>{
    if(!Array.isArray(data)){
        data=[]
    }
    const [_data,setData]=useState(data);
    const [inputValue,setInputValue] = useState("");
    const addTag = () =>{
        if(inputValue==="")
            return null
        console.log(inputValue)
        setData([..._data,inputValue])
        setInputValue("");
        console.log(data)
        
        callback([..._data,inputValue])
    }
    const handleInput = (e) =>{
        setInputValue(e.target.value);
    }
    const deleteTag = (i) =>{
        let tmp=[..._data];
        console.log(i)
        tmp.splice(i,1);
        setData(tmp)
        callback(tmp)
    }
    return(
        <div>
            <div>
                {
                    _data.map((x,index)=>{
                        return (
                            <>
                            <span class="tag margin5  is-medium">
                                <button class="delete is-rounded is-small" style={{'marginLeft':'0px',"marginRight":'10px','borderRadius':'50px','border':'2px'}} onClick={()=>{deleteTag(index)}}>x</button>
                            {x}
                            
                            {/* {index} */}
                            {/* {console.log(index)} */}
                            
                            </span>
                            {
                                (vertical)?<br />:null
                            }
                            </>
                        )
                    })
                }
            </div>
            <div class="columns is-mobile padding15" style={{'height':'70px'}}>
                    <p class="column center">
                        <input type="text" class="input" value={inputValue} onChange={(e)=>{handleInput(e)}} />
                    </p>
                    <p class="column center">
                        <a onClick={()=>{addTag()}} class="button addAnotherbtn ">Add</a>
                    </p>
                </div>
        </div>
    )
}
export default Tag;
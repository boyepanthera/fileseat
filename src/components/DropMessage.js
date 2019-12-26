import React , {useState, useEffect} from 'react';


 const DropMessage = (props)=> {
    const [loading, setLoading] = useState(false);
    const {file} = props;

    useEffect(() => {
        if(!props.file){ 
            return null
        } 
        
            setLoading(true);
            let reader =  new FileReader();
            reader.onloadend = ()=> {
                setLoading(false)
            }
            reader.readAsDataURL(props.file);
        
         },[props.file])
    return (
        <p>{file.name}</p>
    )
}


export default DropMessage;
import{useState,useEffect} from 'react';
import axios from 'axios';
import NotFound from './NotFound';

function GetStarted(){
    const [value, setValue] = useState("");

    useEffect(()=>{
        const getData = async()=>{
            const response = await axios.get('http://localhost:3000/user/getStarted');
            setValue(response.data);
        }
        getData();
    }, [value]);
    if(typeof value != 'undefined'){
        return(
            <>
                <h1>Working</h1>
            </>
        )
    }else{
        return(
            <NotFound/>
        )
    }
}

export default GetStarted;
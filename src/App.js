import React, {useState} from 'react';
import {Users} from "./components/Users";
import {Posts} from "./components/Posts";

const App = () => {
    const [flag, setFlag] = useState(true);
    return (
        <div>
            {flag&&<Posts/>}
            <button onClick={()=>setFlag(prevState => !prevState)}>hide</button>
        </div>
    );
};

export default App;

import React, { useState } from 'react';
// import ReactCustomeHook from '../components/ReactCustomeHook';
import ReduxTest from '../components/ReduxTest';


const TestPage = () => {
    const [count, setCount] = useState(0);
    return (
        <React.Fragment>
            {count}
            <button onClick={() => setCount(pre => pre + 1)}>+</button>
            {/* <ReactCustomeHook />  */}
            <ReduxTest />

        </React.Fragment>
    );
};

export default TestPage;
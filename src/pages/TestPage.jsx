import React, { useState } from 'react';
import ReactCustomeHook from '../components/ReactCustomeHook';


const TestPage = () => {
    const [count, setCount] = useState(0);
    return (
        <React.Fragment>
            {count}
            <button onClick={() => setCount(pre => pre + 1)}>+</button>
            <ReactCustomeHook />
        </React.Fragment>
    );
};

export default TestPage;
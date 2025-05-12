import React, { memo, useState } from 'react';
import { users as data } from '../data/index'
import UserLists from '../components/UserLists';

const UserPage = memo(() => {
    console.count('render in UserLists');
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(data);
    return (
        <React.Fragment>
            <h1>Users Page {count}</h1>
            <button onClick={() => setCount(pre => pre + 1)}> + </button>
            <UserLists users={users} setUsers={setUsers} count={count} />
        </React.Fragment>
    );
});

export default UserPage;
import React, { memo, useCallback, useMemo } from 'react';
import UserList from './UserList';

const UserLists = memo(({ users, setUsers, count }) => {

    const heavyLoad = (count) => {
        let total = 0;
        for (let i = 0; i < 1000000; i++) {
            total += count;
        }
        return total;
    };

    const result = useMemo(() => heavyLoad(count), [count]);

    const deleteUser = useCallback((id) => {
        setUsers(users => users.filter(user => user.id !== id));
    }, [users]);


    return (
        <React.Fragment>
            <p>{result}</p>
            <div className="overflow-x-auto mx-10">
                <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr className="*:font-medium *:text-gray-900 dark:*:text-white">
                            <th className="px-3 py-2 whitespace-nowrap">No</th>
                            <th className="px-3 py-2 whitespace-nowrap">Name</th>
                            <th className="px-3 py-2 whitespace-nowrap">Age</th>
                            <th className="px-3 py-2 whitespace-nowrap">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            users.map(user => {
                                return <UserList deleteUser={deleteUser} user={user} key={user.id} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
});

export default UserLists;
import React, { memo } from 'react';

const UserList = memo(({ user, deleteUser }) => {
    return (
        <React.Fragment>
            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
                <td className="px-3 py-2 whitespace-nowrap">{user.id}</td>
                <td className="px-3 py-2 whitespace-nowrap">{user.name}</td>
                <td className="px-3 py-2 whitespace-nowrap">{user.age}</td>
                <td className="px-3 py-2 whitespace-nowrap">
                    <button className='px-2 py-1 rounded bg-red-600' onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
            </tr>
        </React.Fragment>
    );
});

export default UserList;
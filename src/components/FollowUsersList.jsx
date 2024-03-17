import React from "react";

const FollowUsersList = ({ userList }) => {
  return (
    <div className="bg-gray-500 text-black w-1/3 text-2xl mb-10 rounded-lg">
      <table className="w-full border-collapse">
        <tbody>
          {userList.map((user, index) => (
            <tr key={index} onClick={()=>{window.location.href=`/profile?uid=${user.id}`}}> 
              <td className="border border-black px-4 py-2">{user.name}</td>
              {/* Add more table cells for other user properties */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FollowUsersList;

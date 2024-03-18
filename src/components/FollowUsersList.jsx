import React from "react";

const FollowUsersList = ({ userList }) => {
  return (
    <div className="bg-gray-100 text-black w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg mt-5 mb-5">
      <table className="w-full border-collapse">
        <tbody>
          {userList.map((user, index) => (
            <tr key={index} onClick={() => { window.location.href = `/profile?uid=${user.id}` }}>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FollowUsersList;

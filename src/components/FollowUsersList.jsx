import React from "react";
import { useNavigate } from "react-router-dom";

const FollowUsersList = ({ userList }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 text-black w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg mt-5 mb-5">
      <table className="w-full border-collapse">
        <tbody>
          {userList.map((user, index) => (
            <tr key={index} onClick={() => { navigate(`/profile?uid=${user.id}`)}}>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FollowUsersList;

import React from "react";
import { useNavigate } from "react-router-dom";
import pfpimg from "../assets/empty_pfp.jpg"; // Import your pfp image

const StartupDetailTile = ({userObj}) => {

  const navigate = useNavigate();

  const GoToProfile = () =>{
    navigate(`/profile?uid=${userObj.id}`)
  }

  return (
    <div className="bg-white text-black p-3 m-1 text-center w-3/4" onClick={GoToProfile}>
      <table className="w-full table-fixed">
        <tbody>
          <tr>
            <td className="w-1/5">
              <img src={pfpimg} width={150} alt="Profile" />
            </td>
            <td className="pl-10 pr-10 w-1/4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold pb-3">{userObj.name}</span>
                <span className="text-3xl">{userObj.startupName}</span>
                <span className="text-2xl">{userObj.role}</span>
              </div>
            </td>
            <td className="pl-10 w-40">
              <div className="flex flex-col text-center w-full">
                <span className="font-semibold text-center">About Me - </span>
                <span className="text-center">{userObj.selfOneLine}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StartupDetailTile;

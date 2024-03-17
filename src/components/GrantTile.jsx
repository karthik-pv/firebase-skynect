import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GrantTile = ({ grantObj }) => {
  const navigate = useNavigate();

  const goToGrant = () => {
    navigate(`/grant?id=${grantObj.id}`);
  };

  return (
    <div className="bg-white text-black p-3 m-1 text-center w-3/4" onClick={goToGrant}>
      <table className="w-full table-fixed">
        <tbody>
          <tr>
            <td className="pl-10 pr-10 w-1/4">
              <div className="flex flex-col justify-center items-center">
                <span className="text-2xl flex flex-row pb-5">
                  <span className="font-bold">Amount :</span>
                  {grantObj.amt}
                </span>
                <span className="text-2xl">
                  <span className="font-bold">Grant By:</span>
                  {grantObj.by}
                </span>
              </div>
            </td>
            <td className="pl-10 w-1/3">
              <div className="flex flex-col text-center w-full">
                <span className="font-semibold text-center">Eligibility:</span>
                <span className="text-xl">{grantObj.eligibility}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GrantTile;

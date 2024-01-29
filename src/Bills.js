import { useState } from "react";

export function Bills({
  getActiveUserName,
  bill,
  handleBill,
  setBill,
  setStatus,
}) {
  const [yourBill, setYourBill] = useState("");
  const [selectedOption, setSelectedOption] = useState("You");

  function handleYourBill(e) {
    setYourBill(e.target.value);
  }

  const friendsBill = Number(bill) - Number(yourBill);

  return (
    <>
      {getActiveUserName && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let newOwes = "";
            if (selectedOption === "You") {
              newOwes = `${getActiveUserName} owes you ${friendsBill}$`;
            } else if (selectedOption === getActiveUserName) {
              newOwes = `You owe ${getActiveUserName} ${bill - yourBill}$`;
            }

            setStatus((prevStatus) => ({
              ...prevStatus,
              [getActiveUserName]: newOwes,
            }));
            setYourBill("");
            setBill("");
          }}
        >
          <div className="bills-container">
            <h2>Split a bill with {getActiveUserName}</h2>
            <div className="label-space">
              <label>🤑 Bill value</label>
              <input type="text" value={bill} onChange={handleBill} required />
            </div>
            <div className="label-space">
              <label>😫 Your expense</label>
              <input
                type="text"
                value={yourBill}
                onChange={handleYourBill}
                required
              />
            </div>
            <div className="label-space">
              <label>😋 {getActiveUserName} expense</label>
              <input
                type="text"
                value={friendsBill}
                className="readonly"
                readOnly
              />
            </div>
            <div className="label-space">
              <label>😱 Who is paing the bill</label>
              <select
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              >
                <option value="You">You</option>
                <option value={getActiveUserName}>{getActiveUserName}</option>
              </select>
            </div>
            <button className="split-button">Split bills</button>
          </div>
        </form>
      )}
    </>
  );
}
export default Bills;

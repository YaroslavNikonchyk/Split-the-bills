import { App } from "./App";

export function Bills() {
  return (
    <div className="bills-container">
      <h2>Split a bill with X</h2>
      <div className="label-space">
        <label>🤑 Bill value</label>
        <input type="text"></input>
      </div>
      <div className="label-space">
        <label>😫 Your expense</label>
        <input type="text"></input>
      </div>
      <div className="label-space">
        <label>😋 X expense</label>
        <input type="text" readOnly className="readonly"></input>
      </div>
      <div className="label-space">
        <label>😱 Who is paing the bill</label>
        <select>
          <option>You</option>
          <option>X</option>
        </select>
      </div>
      <button className="split"> Split bills</button>
    </div>
  );
}
export default Bills;

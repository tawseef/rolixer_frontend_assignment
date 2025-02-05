import React from "react";
import styles from "./dashboard.module.css";

function Dashboard() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.topTitle}>Transaction Dashboard</div>;
      </div>
      <div>
        <button className={styles.buttons}> Search Transaction </button>
        <div>
        <label className={styles.lables}>Select Month: </label>
            <select name="month" id="month">
                <option value="jan">January</option>
                <option value="feb">Febuary</option>
                <option selected value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="jun">June</option>
                <option value="jul">July</option>
                <option value="aug">August</option>
                <option value="sep">September</option>
                <option value="oct">October</option>
                <option value="nov">November</option>
                <option value="dec">December</option>
            </select>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./dashboard.module.css";
import Table from "../Table/table";

function Dashboard() {
  const [data, setData] = useState();
  const [selectedMonth, setSelectedMonth] = useState("mar");
  const [dataForSelectedMonth, setDataForSelectedMonth] = useState([]);

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    if (data && selectedMonth) {
      filterByMonth(data, selectedMonth);
    }
  }, [data, selectedMonth, dataForSelectedMonth]);

  const callApi = async () => {
    const res = await axios.get("https://rolixer-l6mh.onrender.com/v1/getall");
    if (res.status === 200) setData(res.data);
  };

  const filterByMonth = (data, selectedMonth) => {
    const monthMap = {
      jan: 0,
      feb: 1,
      mar: 2,
      apr: 3,
      may: 4,
      jun: 5,
      jul: 6,
      aug: 7,
      sep: 8,
      oct: 9,
      nov: 10,
      dec: 11,
    };

    const filteredData = data.filter((item) => {
      const itemMonth = new Date(item.dateOfSale).getMonth();
      return itemMonth === monthMap[selectedMonth.toLowerCase()];
    });

    setDataForSelectedMonth(filteredData);
  };

  

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.topTitle}>Transaction Dashboard</div>;
      </div>
      <div className={styles.buttonDiv}>
        <button className={styles.buttons}> Search Transaction </button>
        <div>
          <label className={styles.lables}>Select Month: </label>
          <select
  name="month"
  id="month"
  value={selectedMonth}
  onChange={(e) => setSelectedMonth(e.target.value)}
>
            <option value="jan">January</option>
            <option value="feb">Febuary</option>
            <option  value="mar">
              March
            </option>
            <option value="apr">April</option>
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
      <div className={styles.tableDiv}>
      <Table data={dataForSelectedMonth} />
      </div>
    </div>
  );
}

export default Dashboard;

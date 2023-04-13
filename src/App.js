import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  // const [data, setData] = useState([]);
  const [restotal, setResTotal] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
//어드민으로는 원본데이터 + 관리자가 추가한값
  useEffect(() => {
    async function getFoodData() {
      const result = await axios.get(
        "/kor/api/tasty.html?mode=json&addr=%EC%A4%91%EA%B5%AC"
      );
      // setData(result.data)
      setResTotal(result.data.total);
      setRestaurant(result.data.data);
      console.log(result.data);
      console.log("total" + result.data.total);
      console.log("레스토랑" + result.data.data);
    }
    getFoodData();
  }, []);

  return (
    <div id="app">
      <h3>가게</h3>

      {restaurant.map((item) => (
        <div key={item.PENDATA_ID}>{item.BZ_NM}</div>
      ))}
    </div>
  );
}

export default App;

import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  // const [data, setData] = useState([]);
  const [restotal, setResTotal] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [localSearch, setlocalSearch] = useState(null);
  //어드민으로는 원본데이터 + 관리자가 추가한값

  useEffect(() => {}, []);

  async function getFoodData(inputValue) {
    const result = await axios
      .get(`/kor/api/tasty.html?mode=json&addr=${inputValue}`)
      .then((res) => {
        // setResTotal(result.data.total);
        setRestaurant(res.data.data);
        // console.log(result.data);
        // console.log("total" + result.data.total);
        // console.log("레스토랑" + result.data.data);
        console.log("res", res.data.data);
      });
    // setData(result.data)
  }

  return (
    <div id="app">
      <h3>가게</h3>
      <input
        type="text"
        name="store"
        onChange={(e) => {
          setlocalSearch(e.target.value);
        }}
      />
      <button
        onClick={() => {
          getFoodData(localSearch);
        }}
      >
        검색
      </button>
      {/* db에서 category 를 떙겨서 12개 ? 배열을 가져온다 
       12개 배열을 map돌려서 html로 뿌려준다 => option
        dbCategory 는 useState 로 값 할당 
       const optionValue = dbCategory.map(
        (data) => (
          <option value=`${data}`>data</option>
        )
       )
      */}

      <select>
        <option value="value1">중식</option>
        <option value="value2">한식</option>
        <option value="value3">일식</option>
        {/* {optionValue} */}
      </select>

      {restaurant.map((item) => (
        <div key={item.PENDATA_ID}>{item.BZ_NM}</div>
      ))}
    </div>
  );
}

export default App;
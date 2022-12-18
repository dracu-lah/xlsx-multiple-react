import React, { useEffect, useState } from "react";
import { ExportToExcel } from "./ExcelFile";
function App() {
  const [productData, setProductData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [finalDataSend, setFinalDataSend] = useState([]);
  useEffect(() => {
    //Product Api
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          const res = [];
          res.push({
            category: "product",
            data: json,
          });
          setProductData(res);
        }, 1000);
      });
  }, []);
  useEffect(() => {
    //User Api
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          const res = [...productData];
          res.push({
            category: "user",
            data: json,
          });
          setFinalData(res);
        }, 1000);
      });
  }, [productData]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          const res = [...finalData];

          res.push({
            category: "Comment",
            data: json,
          });
          setFinalDataSend(res);
        }, 1000);
      });
  }, [finalData]);

  return (
    <div className="App">
      {/* {console.log(finalDataSend)} */}
      <ExportToExcel finalDataDetail={finalDataSend} />
    </div>
  );
}

export default App;

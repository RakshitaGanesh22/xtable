import logo from './logo.svg';
import './App.css';
import react, {useState} from "react";
function App() {
  let data=
  [
  
      { date: "2022-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-02", views: 150, article: "Article 2" },
  
      { date: "2023-09-02", views: 120, article: "Article 3" },
  
      { date: "2020-09-03", views: 200, article: "Article 4" }
  
  ]
  let[showData,setData]=useState(data);
  
  function handleDate(){
    data.sort((a, b) => new Date(a.date) - new Date(b.date));
    setData(data);
  }
  function handleViews(){
    data.sort((a, b) => a.views - b.views);
    setData(data);
  }
  
  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={handleDate}>Sort By Date</button>
      <button onClick={handleViews}>Sort By views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Articles</th>
          </tr>
         </thead>
         <tbody>
          {showData.map((ele)=>{return <tr><td>{ele.date}</td><td>{ele.views}</td><td>{ele.article}</td></tr>})}
         </tbody>
      </table>
    </div>
  );
}

export default App;

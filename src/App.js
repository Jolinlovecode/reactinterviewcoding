import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


// const UserName = {
//   first: " ",
//   last: " ",
//   title: " "
// }

// const UserInfo = {
//   name: UserName,
//    picture: ''
// }

// const getFullUserName = (userInfo) => {
//   const {name:{first, last}} = userInfo;
//   return `${first} ${last}`;
// }

function App() {
  const [counter, setCounter] = useState(0);
  const [nextPageNumber, setNextPageNumber] = useState(1);
  const [userInfos, setUserInfos] = useState([]);
  const [randomUserData, setRandomUserData] = useState(" ");

 const fetchRandomData = (pageNumber) => {
   return axios.get(`https://randomuser.me/api?page=${pageNumber}`)
   .then((data) => {
     console.log("data",data);
     console.log('result',data.data.info);
    return data;
   })
   .catch(err => console.error(err));
 }

 const fetchNextUser = () => {
  fetchRandomData(nextPageNumber).then((randomData)=>{
    setRandomUserData(JSON.stringify(randomData,null,2) || 'No user data');
    if (randomData === undefined) return;
    const newUserInfos = [
      ...userInfos,
      ...randomData.results
    ]
    setUserInfos(newUserInfos);
    setNextPageNumber(randomData.info.page + 1);
  })

 }

  useEffect(()=> {
    fetchNextUser();
  },[]);

  return (
    <div className="App">
      <h1>Hello Code</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p> {counter} </p>
      <button onClick={() => {setCounter(counter + 1);console.log('foo');}} >Increase Counter</button>
      <pre>{randomUserData}</pre>
      
    </div>
  );
}

export default App;

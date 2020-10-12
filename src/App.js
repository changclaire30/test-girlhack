import React, { useState, useEffect } from 'react';
import './App.css';
import Topic from './Topic';

function App() {
  const [topics, setTopics] = useState([]);
  // const age = "20";
  // const gender = "male";

  const [age, setAge] = useState("20");
  const [gender, setGender] = useState("male");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getTopics();
  }, [age, gender])

  const getTopics = async () => {
    const response = await fetch (`https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?age=${age}&sex=${gender}`)
    const data = await response.json();
    console.log(data);
    setTopics(data.Result.Resources.All.Resource);
  }

  const updateAge = e => {
    setAge(e.target.value);
  }
  const updateGender = e => {
    // e.preventDefault();
    setGender(e.target.value);
  }
  const topicChange = e => {
    setSearch(e.target.value);
  };

  const filteredTopics = topics.filter(topic => 
    topic.Title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="App">
      <h1 className="title">MyHealthFinder</h1>
      <div className="search-form">
        <div className="search-age">
          <h3>Age</h3>
          <p>{age}</p>
          <input type="range" min="0" max="100" value={age} className="slider-age" onChange={updateAge}/>
        </div>
        <div className="search-gender" >
          <h3>Gender</h3>

          <div className="buttons-gender" onChange={updateGender}>
            <input type="radio" value="male" name="gender" id="radio1" />
            <label for="radio1" className="radio-button">Male</label>
            <input type="radio" value="female" name="gender" id="radio2" />
            <label for="radio2" className="radio-button">Female</label>
          </div>
        </div>
      </div>

      <div className="search-topic">
        <p>Search <input className="search-bar" type="text" placeholder="topic" onChange={topicChange} /> for {age}-year-old {gender}</p>
        
      </div>
      
      <div className="topic-section">
        {filteredTopics.map(topic => (
          <Topic
          Title = {topic.Title}
          MyHFDescription = {topic.MyHFDescription}
          // ImageUrl = {topic.ImageUrl}
          AccessibleVersion = {topic.AccessibleVersion} />
        ))}
        
      </div>


    </div>
  );
}

export default App;

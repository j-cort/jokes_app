import React, { useState, useEffect } from "react";
import express from "../apis/express";
import Joke from "./Joke"

const JokesList = () => {

const [jokeList, setJokeList] = useState("")

useEffect(() => {
  getJokes()
}, [])


const getJokes = async () => {
  const { data } = await express.get('/jokes')
  setJokeList(data)
}

const generateJokeList = () => {
  if(jokeList) {
  
    let list = jokeList.map(joke => <Joke key={joke._id} id={joke._id} content={joke.content} getJokes={getJokes} />)
    return list.reverse()
  } else {
    return []
  }
}

const renderedList = generateJokeList()

  return (
    <h1 className="ui center aligned container">
      <div className="ui one cards main-item-list">
      {renderedList}
      </div>
    </h1>
  )

}

export default JokesList
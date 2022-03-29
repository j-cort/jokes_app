import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import express from "../apis/express";

const Main = () => {

const [randomJoke, setRandomJoke] = useState("")

useEffect(() => {
  getRandomJoke()
}, [])

const getRandomJoke = async () => {
  const { data } = await express.get('/jokes-rand')
  setRandomJoke(data)
}

  return (
    <h1 class="ui center aligned icon massive header">
      <Link to='#'><i class="sync icon blue" onClick={getRandomJoke}></i></Link>
      {randomJoke.content}
    </h1>
  )

}

export default Main
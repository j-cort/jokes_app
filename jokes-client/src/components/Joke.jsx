import React, {useState} from "react";
import express from "../apis/express";

const Joke = ({id, content, getJokes}) => {

  const [updatedJoke, setUpdatedJoke] = useState(content)

  const deleteJoke = async () => {
    await express.delete(`/jokes/${id}`)
    getJokes()
  }

  const updateJoke = async () => {
    const {data} = await express.put(`/jokes/${id}`, {
      content: updatedJoke
    })
    console.log(data)
    getJokes()
  }

  return (
    <div className="card">
    <div className="content">
     
      <div className="description">
        {content}
      </div>
    </div>
    <div className="extra content">
      <div className="ui button">
        <div className="ui basic red button" onClick={deleteJoke}>Delete</div>
      </div>
      <br/>
      <br/>
      <form className="ui form">
          <div className="field">
            <textarea value={updatedJoke} onChange={e => setUpdatedJoke(e.target.value)}></textarea>
          </div>
          <div className="ui basic blue button" onClick={updateJoke}>Update</div>
      </form>
    </div>
  </div>
  )
}

export default Joke
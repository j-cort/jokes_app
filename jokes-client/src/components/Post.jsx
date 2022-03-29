import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import express from "../apis/express";

const Post = () => {

  const navigate = useNavigate();
  const [newJoke, setNewJoke] = useState('')


  const onFormSubmit = async (event) => {
    event.preventDefault();
    await express.post('/jokes', {
      content: newJoke
    })
    navigate('/alljokes');
  }  

  return (
    <form onSubmit={onFormSubmit} className="ui form new-post">
      <div className="field">
        <textarea value={newJoke} onChange={e => setNewJoke(e.target.value)} placeholder="Add a new joke!"></textarea>
      </div>
      <button><i className="plus circle icon massive blue"></i></button>
    </form>
  )

}

export default Post




 



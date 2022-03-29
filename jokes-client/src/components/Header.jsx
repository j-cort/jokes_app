import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div className="ui huge fluid three item stackable menu">
      <Link to="/" className="item" alt="">
        <em data-emoji="black_joker" className="medium"></em>
        Random Joke
      </Link>
      <Link to="/alljokes" className="item" alt="">
        <em data-emoji="scroll" className="medium"></em>
        All Jokes
      </Link>
      <Link to="/newjoke" className="item" alt="">
        <em data-emoji="pencil" className="medium"></em>
        New Joke
      </Link>
  

    </div>
  )

}

export default Header
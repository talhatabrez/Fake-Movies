import React from 'react'

const Movie = (props) => {
  return (
    <div className = "movie">
        <img src={props.img} alt=""></img>
        <p>{props.Title}</p>
        <p>Year: {props.Year}</p>
    </div>
  )
}

export default Movie
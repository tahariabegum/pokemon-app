import React from 'react'

export default function Show ( {pokemon} ) {
    return (
        <div>
            <h1> Gotta Catch 'Em All! </h1>
            <h2> {pokemon.name} </h2>
            <img src = {`${pokemon.img}.jpg`} />
            <br/><br/>
            <a href = '/pokemon'> Back </a>
        </div>
    )
}
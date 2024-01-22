import React from 'react'

export default function Index( {pokemon} ) {
    return (
        <div>
            <h1> See All the Pokemon! </h1>
            <ul>
                {pokemon.map((pokemon,i) => 
                <li key = {i}>
                    <a href = {`/pokemon/${i}`}> 
                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}
                    </a>
                </li>
                )}
            </ul>
        </div>
    )
}
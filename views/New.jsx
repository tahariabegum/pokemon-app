import React from 'react' 

export default function New () {
    return (
        <div> 
            <h1> Add New Pokemon </h1>
            <form action = "/pokemon" method = 'POST'>
                Name: <input type = 'text' name = 'name' /> 
                <br/> <br/>
                Image: <input type = 'file' />
                <br/> <br/>
                <input type = 'Submit' name = '' value = 'Create Pokemon' />
                <br/><br/>
            </form>
        </div>
    )
}
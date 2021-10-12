import React from 'react'

const Notes = ({user}) => {
    const userName = user.name;

    return (
        <div>
            <h1 className="app-name">LABNOTES</h1>
            <h1 className="app-name">{userName}</h1>
        </div>
    )
}

export default Notes

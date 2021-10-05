import React, {useContext} from 'react'
import { UserContext } from '../../context/UserContext';

const Notes = () => {
    const { user } = useContext(UserContext);
    const userName = user.name;

    return (
        <div>
            <h1 className="app-name">LABNOTES</h1>
            <h1 className="app-name">{userName}</h1>
        </div>
    )
}

export default Notes

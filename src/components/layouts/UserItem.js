import React from "react";
import {Link} from "react-router-dom" ;

const  UserItem = (props) =>{
   // desctructuring
const {login , avatar_url ,html_url} = props.user ;

        return (
            <div className="card text-center">
                <img src={avatar_url} style={{ width: "60px" }} />
                <h3>{login}</h3>
                <div>
                  

                    <Link to={`/user/${login}`}>More </Link>
                </div>

            </div>
        )
    
}

export default UserItem;
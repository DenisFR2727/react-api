import React,{useEffect,useState} from "react";
import "./cards.css"
const UsersList = ()=>{
const [users,setUsers] = useState([])

    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5') 
    .then(function(response) { return response.json(); }) 
    .then(data=> setUsers(data))


    return(
       <div>
           <Cards />
       </div>
    )
}
export default UsersList;
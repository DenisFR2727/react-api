import React,{useEffect,useState} from "react";
import "./cards.css"
const Cards = ()=>{
const [users,setUsers] = useState([])

    const getProfile = async () => {
        const response = await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6");
        const data = await response.json();
        setUsers(data.users);
        
      };
useEffect(() => {
    getProfile()    
}, []);

console.log(users)
    return(
        <section className="section_users">
              <h1 className="h1_get_request">Working with GET request</h1>
              <div className="block_users1">
               {users.map(item=>(<div>
                            <div key={item.id} className="card">
                                    <img src={item.photo} alt="" />
                                    <p className="p1_card">{item.name}</p>
                                    <div className="card_p_three">
                                        <p>{item.position}</p>
                                        <p>{item.email}</p>
                                        <p>{item.phone}</p>
                                    </div>   
                            </div>
               </div>))}
              </div>
              <button type="submit" className="button_show_more">Show more</button>
        </section>
    )
}
export default Cards;
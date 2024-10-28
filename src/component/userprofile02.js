import React from "react";

function UserProfile02(props){
    const {userinfo}=props;
    
    return(
        <>
        <h2>My name is {userinfo.name} and I'm {userinfo.age} years old and your are {userinfo.age >=18?<>Adult</>:<>Minor</>}
        {userinfo.email!==undefined?`,User Email Id: ${userinfo.email}`:null}.  

        </h2>
        </>
    )
}

export default UserProfile02;
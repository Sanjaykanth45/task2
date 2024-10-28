

function UserProfile(props){
    const {userinfo} = props;

    return(
        <>
        <h2>My name is {userinfo.name}, I'm {userinfo.age} years old{userinfo.location!==undefined?`,and i am from ${userinfo.location}`:null }.
            User Status : {userinfo.isActive?<>Active User</>:<>InActive User</>}</h2>
        </>
    )
}
export default UserProfile;
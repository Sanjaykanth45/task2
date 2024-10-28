
import Products from "./userproducts";
import UserProfile from "./userprofile";
import UserProfile02 from "./userprofile02";


 function Userdetails(){
    const userinfo = [
        {name:'Sanjay',age:23,location:'Sathy',email:'sanjay@gmail.com',isActive:true},
        {name:'Manoj',age:25,isActive:false},
        {name:'Arun',age:17,location:'coimbatore',email:'arun@gmail.com',isActive:true},

    ];

    const userproducts=[
        {name:'Face wash',price:150,isStock:true},
        {name:'Face serum',price:120,isStock:true},
        {name:'Face Moisturizer',price:90,isStock:false},
        {name:'Sunscreen',price:80,isStock:false},
    ]

    return(
        <>
        <h1>Task 1</h1>
        {userinfo.map((value)=>(<UserProfile userinfo={value}/>))}
        
        
        <h1>Task 2</h1>
        {userinfo.map((value)=>(<UserProfile02 userinfo={value}/>))}
        
        <h1>Task 3</h1>
        {userproducts.map((value)=>(<Products userproducts={value}/>))}
      
        </>
    
    

)
 }
export default Userdetails;
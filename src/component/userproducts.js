import React from "react";

function Products(props){
     const {userproducts} = props;

     return(
        <>
        <h2>It is {userproducts.name} and its price {userproducts.price},
        Stock:{userproducts.isStock?<>In Stock</>:<>Out of Stock</>}.
        {userproducts.price > 100?<>It's a Premium product.</>:null}

        </h2>
        </>
     )
}

export default Products;
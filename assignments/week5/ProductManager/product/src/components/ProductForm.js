import React, { useState } from 'react'
import axios from 'axios';


const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [productList, setProductList] = useState([]);


    //handler when the form is submitted
    // handle refresh
    // submit a post request
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/create/products', {
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
                setProductList([...productList, res.data.productList]);
        })
            .catch(err=>console.log(err));
    }
    
    return (
        <div>

            <form onSubmit={submitHandler}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
        
    )
}
export default ProductForm;



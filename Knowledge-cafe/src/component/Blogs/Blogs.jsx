import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
const[blogs,setBlogs] = useState([]);
useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=> setBlogs(data))
},[])
    return (
        <div className=" w-2/3">
            <div className="h1 text-4xl">Blogs:{blogs.length}</div>
        </div>
    );
};

export default Blogs;
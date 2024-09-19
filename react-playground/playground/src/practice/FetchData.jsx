import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";


const FetchData = () => {
    //define the states
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    //define the useeffect to fetch the data
    useEffect(() => {
        //fetch the data using a function
        const fetchData = async () => {
            //use axios to fetch the data
            const result = await axios("https://jsonplaceholder.typicode.com/posts");
            //set the data to the result
            setData(result.data);
            //set loading to false
            setLoading(false);
        };
        //call the function
        fetchData();
    }, []);

    //return the map of the jsx
    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    )
}

export default FetchData;
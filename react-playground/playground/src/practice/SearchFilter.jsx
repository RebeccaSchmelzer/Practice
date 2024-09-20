import React, {useState} from "react";

const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple'];

const SearchFilter = () => {
    //set state for search term
    const [searchTerm, setSearchterm] = useState([]);

    //create function for filtering the items
    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //return a search bar and the results in a list of unordered items
    return (
        <div>
            <input type="text" placeholder="Search Bar" value={searchTerm} onChange={(e) => setSearchterm(e.target.value)}
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchFilter
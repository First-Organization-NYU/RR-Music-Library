import { useState } from 'react'
//using an interdace since our props is more complex then a string
interface SearchBarProps {
    handleSearch: any;
}

function SearchBar(props: SearchBarProps){
    let [searchTerm, setSearchTerm] = useState('')

    return (
            <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                <input type="text" placeholder="Search Here" onChange={(e) => setSearchTerm(e.target.value)} />
                <input type="submit" />
            </form>
    )
}

export default SearchBar

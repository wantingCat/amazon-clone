import { useLocation } from "react-router-dom";

function SearchResults() {
    const location = useLocation();
    const data = location.state.data;

    console.log(data);

    return (
        <h1>results</h1>
    )
}

export default SearchResults;
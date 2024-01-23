import { useLocation } from "react-router-dom";

import SearchResultCard from "../components/UI/searchDisplay/SearchResultCard";
import Product from "../utils/Product";

function SearchResults() {
    const location = useLocation();
    const data: Product[] = location.state.data;

    console.log(data);

    return (
        <>
            <SearchResultCard products={data} />
        </>
    )
}

export default SearchResults;
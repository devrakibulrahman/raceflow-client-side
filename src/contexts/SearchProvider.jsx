import { createContext } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const SearchContext = createContext(null);

const SearchProvider = ({children}) => {
    const [search, setSearch] = useState('');

    const state = {
        search, setSearch
    };

    return(
        <SearchContext.Provider value={state}>
            {children}
        </SearchContext.Provider>
    );
};

SearchProvider.propTypes = {
    children: PropTypes.node
}

export { SearchContext, SearchProvider };
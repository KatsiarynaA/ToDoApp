import React from "react";

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };

    return <input
        style={searchStyle}
        placeholder={searchText}
        disabled //disabled={true}
    />;
};

export default SearchPanel;

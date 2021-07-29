import React from "react";

function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockChange}) {
    const handleFilterTextChange = (e) => {
        onFilterTextChange(e.target.value);
    };
    const handleInStockChange = (e) => {
        onInStockChange(e.target.checked);
    };
    return (
        <form>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    value={filterText}
                    onChange={handleFilterTextChange}/>
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={inStockOnly}
                    onChange={handleInStockChange}/>
                <label className="form-check-label">Only show products in stock</label>
            </div>
        </form>
    );
}

export default SearchBar;
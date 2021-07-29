import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({products, filterText, inStockOnly}) {
    const rows = [];
    let lastCategory = null;
    products.forEach(product => {
        if (product.name.indexOf(filterText) === -1) {
            return;
        }
        if (inStockOnly && !products.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow key={product.category} category={product.category}/>
            );
        }
        rows.push(
            <ProductRow key={product.name} product={product}/>
        );
        lastCategory = product.category;
    });
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default ProductTable;
import React from "react";

function ProductCategoryRow({category}) {
    return (
        <tr>
            <th scope="col" colSpan={2}>{category}</th>
        </tr>
    );
}

export default ProductCategoryRow;
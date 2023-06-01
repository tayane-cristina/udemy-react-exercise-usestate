import React from "react";

const PropertyDetails = ({title, category, launch, favority}) => {
    return(
        <div>
            <h3>{title}</h3>
            <ul>
                <li><strong>Title:</strong> {title}</li>
                <li><strong>Category:</strong> {category}</li>
                <li><strong>Launch:</strong> {launch}</li>
                {favority && (<li><strong>5 estrelas</strong></li>)}
            </ul>
        </div>
    )
}
export default PropertyDetails;

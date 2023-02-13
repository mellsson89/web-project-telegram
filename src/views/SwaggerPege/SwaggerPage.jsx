import React from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const SwaggerPage = () => {
    return (
        <div>
            <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
        </div>
    );
};

export default SwaggerPage;
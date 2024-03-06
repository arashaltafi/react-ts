import "swagger-ui/dist/swagger-ui.css";
import SwaggerUI from "swagger-ui";
import { useEffect } from "react";

const Swagger = () => {

    useEffect(() => {
        SwaggerUI({
            dom_id: "#swaggerUIApp",
            url: 'https://petstore.swagger.io/v2/swagger.json'
        });
    }, [])

    return (
        <div className="my-swagger-ui-container" id="swaggerUIApp" />
    )
}

export default Swagger
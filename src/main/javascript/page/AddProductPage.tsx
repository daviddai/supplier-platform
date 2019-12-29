import React from 'react';
import ProductForm from "../component/ProductForm";
import { Container } from "react-bootstrap";

class AddProductPage extends React.Component {

    addProduct = (values: string) => {
        console.log(JSON.stringify(values));
    };

    render() {
        return (
            <Container>
                <h1 className="text-center">Add New Product</h1>
                <ProductForm name=""
                             description=""
                             formHandler={this.addProduct}
                />
            </Container>
        )
    }

}

export default AddProductPage;
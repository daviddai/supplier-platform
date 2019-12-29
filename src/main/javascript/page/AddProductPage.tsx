import React from 'react';
import ProductForm from "../component/ProductForm";

class AddProductPage extends React.Component {

    addProduct = (values: string) => {
        console.log(JSON.stringify(values));
    };

    render() {
        return (
            <div>
                <ProductForm name=""
                             description=""
                             formHandler={this.addProduct}
                />
            </div>
        )
    }

}

export default AddProductPage;
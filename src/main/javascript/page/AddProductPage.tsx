import React from 'react';


export interface AddProductProps {
    name: string,
    description: string
}

class AddProductPage extends React.Component<AddProductProps> {

    render() {
        return (
            <div>
                Add Product
            </div>
        )
    }

}

export default AddProductPage;
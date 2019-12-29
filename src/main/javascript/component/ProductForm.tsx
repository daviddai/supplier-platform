import React from 'react';
import { useFormik } from 'formik';

export interface ProductFormProps {
    name: string,
    description: string
}

const ProductForm = (props: ProductFormProps) => {

    const formik = useFormik({
        initialValues: {
            name: props.name,
            description: props.description
        },
        onSubmit: (values: object) => {
            console.log(JSON.stringify(values));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label>Name:&nbsp;</label>
            <input id="name"
                   name="name"
                   onChange={formik.handleChange}
                   value={formik.values.name}
            />
            <br/><br/>
            <label>Description:&nbsp;</label>
            <input id="description"
                   name="description"
                   onChange={formik.handleChange}
                   value={formik.values.description}
            />
            <br/><br/>
            <button type="submit">Submit</button>
        </form>
    );

};

export default ProductForm;
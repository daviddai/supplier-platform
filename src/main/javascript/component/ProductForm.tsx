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
            <label>Name:</label>
            <input id="name"
                   name="name"
                   value={formik.values.name}
            />
            <label>Description:</label>
            <input id="description"
                   name="description"
                   value={formik.values.description}
            />
            <button type="submit">Submit</button>
        </form>
    );

};
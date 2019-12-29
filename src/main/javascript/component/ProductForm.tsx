import React from 'react';
import { useFormik } from 'formik';

import { Button, Form } from 'react-bootstrap';

export interface ProductFormProps {
    name: string,
    description: string,
    formHandler: Function,
}

const ProductForm = (props: ProductFormProps) => {

    const formik = useFormik({
        initialValues: {
            name: props.name,
            description: props.description
        },
        onSubmit: (values: object) => {
            props.formHandler(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control id="name"
                                  name="name"
                                  onChange={formik.handleChange}
                                  value={formik.values.name}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control id="description"
                                  name="description"
                                  as="textarea"
                                  onChange={formik.handleChange}
                                  value={formik.values.description}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </form>
    );

};

export default ProductForm;
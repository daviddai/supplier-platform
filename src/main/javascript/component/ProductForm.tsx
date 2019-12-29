import React from 'react';
import { useFormik } from 'formik';

import { Button, Form } from 'react-bootstrap';

export interface ProductFormProps {
    name: string,
    description: string,
    formHandler: Function,
}

const ProductForm = (props: ProductFormProps) => {

    const validate = (values: any) => {
        const errors: any = {};
        
        if (!values.name) {
           errors.name = 'Product name cannot be empty';
        }

        if (!values.description) {
            errors.description = 'Product description cannot be empty';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: props.name,
            description: props.description
        },
        validate,
        onSubmit: (values: any) => {
            props.formHandler(values);
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control id="name"
                              name="name"
                              onChange={formik.handleChange}
                              value={formik.values.name}
                />
                {
                    formik.errors.name ? <Form.Text className="text-muted">{formik.errors.name}</Form.Text> : null
                }
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control id="description"
                              name="description"
                              as="textarea"
                              onChange={formik.handleChange}
                              value={formik.values.description}
                />
                {
                    formik.errors.description ? <Form.Text className="text-muted">{formik.errors.description}</Form.Text> : null
                }
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );

};

export default ProductForm;
import React from 'react';
import { useFormik } from 'formik';

import { Button, Form, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

export interface AvailabilityRule {
    startDate: string,
    endDate: string
}

export interface ProductFormProps {
    name?: string,
    description?: string,
    availabilityRules?: Array<AvailabilityRule>,
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
        
        if (values.availabilityRules) {
            errors.availabilityRules = {};

            values.availabilityRules.map((rule: AvailabilityRule, index: number) => {

                if (!rule.startDate) {
                    errors.availabilityRules['ar_' + index + '_startDate'] = 'Start date cannot be empty';
                }

                if (!rule.endDate) {
                    errors.availabilityRules['ar_' + index + '_endDate'] = 'End date cannot be empty';
                }
            });

            if (Object.keys(errors.availabilityRules).length === 0) {
                delete errors['availabilityRules'];
            }
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: props.name,
            description: props.description,
            availabilityRules: props.availabilityRules || []
        },
        validate,
        onSubmit: (values: any) => {
            props.formHandler(values);
        },
    });

    const addNewAvailabilityRuleField = () => {
        let newAvailabilityRule: AvailabilityRule = {
            startDate: "",
            endDate: ""
        };

        formik.values.availabilityRules.push(newAvailabilityRule);
    };

    const removeAvailabilityRuleField = (event: any) => {

    };

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
            <Form.Group>
                <Form.Label>Availability Rules</Form.Label>
                {
                    formik.values.availabilityRules &&
                    formik.values.availabilityRules.map((rule: AvailabilityRule, index: number) =>
                        <Form.Row key={"ar_" + index}>
                            <Col md={5}>
                                <Form.Group>
                                    <Form.Control name={"availabilityRules[" + index + "]['startDate']"}
                                                  onChange={formik.handleChange}
                                                  value={rule.startDate}
                                                  placeholder="Start date (dd-mm-yyyy)"
                                    />
                                    {
                                        formik.errors.availabilityRules &&
                                        formik.errors.availabilityRules['ar_' + index + '_startDate'] ?
                                            <Form.Text className="text-muted">{formik.errors.availabilityRules['ar_' + index + '_startDate']}</Form.Text> : null
                                    }
                                </Form.Group>
                            </Col>
                            <Col md={5}>
                                <Form.Group>
                                        <Form.Control name={"availabilityRules[" + index + "]['endDate']"}
                                                      onChange={formik.handleChange}
                                                      value={rule.endDate}
                                                      placeholder="End date (dd-mm-yyyy)"
                                        />
                                        {
                                            formik.errors.availabilityRules &&
                                            formik.errors.availabilityRules['ar_' + index + '_endDate'] ?
                                                <Form.Text className="text-muted">{formik.errors.availabilityRules['ar_' + index + '_endDate']}</Form.Text> : null
                                        }
                                </Form.Group>
                            </Col>
                            <Form.Group as={Col} className="p-2">
                                <FontAwesomeIcon icon={faWindowClose} onClick={removeAvailabilityRuleField} key={index}/>
                            </Form.Group>
                        </Form.Row>
                    )
                }
                <div>
                    <a href="#" onClick={addNewAvailabilityRuleField}>Add new rule</a>
                </div>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );

};

export default ProductForm;
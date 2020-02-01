import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import './product-form.css';

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

    const [name, setName] = useState(props.name || '');
    const [description, setDescription] = useState(props.description || '');
    const [availabilityRules, setAvailabilityRules] = useState(props.availabilityRules || Array<AvailabilityRule>());
    const [errors, setErrors] = useState(new Map());

    const submitProductForm = (evt: any) => {
        evt.preventDefault();

        if (validate()) {
            props.formHandler({
                name: name,
                description: description,
                availabilityRules: availabilityRules
            });
        }
    };

    const validate = (): boolean => {
        let newErrors = new Map();

        if (name === '') {
            newErrors.set('name', 'Product name is required');
        }

        if (description === '') {
            newErrors.set('description', 'Product description is required');
        }

        availabilityRules.map((rule: AvailabilityRule, index: number) => {


            if (!rule.startDate) {
                newErrors.set('ar_' + index + '_startDate', 'Start date is required');
            }

            if (!rule.endDate) {
                newErrors.set('ar_' + index + '_endDate', 'End date is required');
            }
        });

        setErrors(newErrors);

        return newErrors.size == 0;
    };

    return (
        <form onSubmit={submitProductForm} method="post">
            <div className="form-group">
                <label>Name</label>
                <input name="name"
                       className='form-control'
                       onChange={(evt: any) => {
                           setName(evt.target.value);
                           validate();
                       }}
                       value={name}
                />
                {errors.get('name') && <small className="form-text text-muted">{errors.get('name')}</small>}
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea name="description"
                          className='form-control'
                          onChange={(evt: any) => {
                              setDescription(evt.target.value);
                              validate();
                          }}
                          value={description}
                />
                {errors.get('description') && <small className="form-text text-muted">{errors.get('description')}</small>}
            </div>
            <div className="form-group">
                <label>Availability Rules</label>
                {
                    availabilityRules && availabilityRules.map((rule: AvailabilityRule, index: number) => (
                        <div key={"ar_" + index} className="row">
                            <div className="col-5">
                                <div className="form-group">
                                    <input name={"availabilityRules[" + index + "]['startDate']"}
                                           className="form-control"
                                           onChange={(evt: any) => {
                                               availabilityRules[index].startDate = evt.target.value;
                                               setAvailabilityRules([...availabilityRules])
                                           }}
                                           value={rule.startDate}
                                           placeholder="Start date (dd-mm-yyyy)"
                                    />
                                    {
                                        errors.get('ar_' + index + '_startDate') &&
                                        <small className="form-text text-muted">{errors.get('ar_' + index + '_startDate')}</small>
                                    }
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="form-group">
                                    <input name={"availabilityRules[" + index + "]['endDate']"}
                                           className="form-control"
                                           onChange={(evt: any) => {
                                               availabilityRules[index].endDate = evt.target.value;
                                               setAvailabilityRules([...availabilityRules])
                                           }}
                                           value={rule.endDate}
                                           placeholder="End date (dd-mm-yyyy)"
                                    />
                                    {
                                        errors.get('ar_' + index + '_endDate') &&
                                        <small className="form-text text-muted">{errors.get('ar_' + index + '_endDate')}</small>
                                    }
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="form-group p-2">
                                    <span onClick={() => {
                                        availabilityRules.splice(index, 1);
                                        setAvailabilityRules([...availabilityRules]);
                                    }}>
                                        <FontAwesomeIcon icon={faWindowClose}
                                                         className="remove-availability-rule-icon"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div>
                    <a href="#"
                       onClick={() => {
                           let newRule: AvailabilityRule = {
                               startDate: '',
                               endDate: ''
                           };
                           availabilityRules.push(newRule);
                           setAvailabilityRules([...availabilityRules]);
                       }}>
                        Add new rule
                    </a>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default ProductForm;
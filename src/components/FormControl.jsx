import { Form, Label, FormGroup, Input, Button, Card, FormFeedback } from 'reactstrap'
import React from 'react'


const FormControl = () => {
    const object = {
        email: '',
        password: '',
        username: '',
        gender: { key: 'male', value: 'male' },
        gender2: '',
    };

    const [currentValue, setCurrentValue] = React.useState({
        ...object
    })
    const [currentValueInput, setCurrentValueInput] = React.useState([]);
    const [errors, setErrors] = React.useState({});


    const RenderListItem = currentValueInput.map(object => {
        return <Card key={object.email}>
            <div>email: {object.email}</div>
            <div>password: {object.password}</div>
            <div>username: {object.username}</div>
            <div>gender: {object.gender.value}</div>
        </Card>
    })

    const handleOnChange = (event) => {
        const type = event.target.type;
        switch (type) {
            case 'email':
            case 'password':
            case 'text':
                {
                    const { value, name } = event.target;
                    setCurrentValue({ ...currentValue, [name]: value });
                    if (!!errors[name]) setErrors({ ...errors, [name]: null })
                }
                break;
            case 'radio':
                {
                    const { value, name, checked } = event.target;
                    setCurrentValue({ ...currentValue, [name]: { key: value, value: value } });
                    if (!!errors[name]) setErrors({ ...errors, [name]: null })
                }
                break;
            default: break;
        }

    }

    const validateForm = () => {
        const { email, password, username, gender, gender2 } = currentValue;
        const newError = {};

        if (!email) newError.email = 'Please enter your email';
        if (!password) newError.password = 'Please enter your password';
        if (!username) newError.username = 'Please enter your username';
        if (!gender) newError.gender = 'Please enter your gender';
        return newError;
    }

    const handleOnSubmit = event => {
        event.preventDefault();

        const formErrors = validateForm();
        console.log(Object.keys(formErrors));
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setCurrentValueInput(prev => {
                return prev.concat(currentValue);
            });
            setCurrentValue(object);
        }
    }


    return (
        <Form onSubmit={handleOnSubmit}>
            <FormGroup id="email">
                <Label for="exampleEmail" sm={2}>
                    Email
                </Label>
                <Input
                    onChange={handleOnChange}
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                    value={currentValue.email}
                />
                <div>{errors.email}</div>
            </FormGroup>
            <FormGroup id="password">
                <Label for="examplePassword" sm={2}>
                    Password
                </Label>
                <Input
                    onChange={handleOnChange}
                    id="examplePassword"
                    name="password"
                    placeholder="password placeholder"
                    type="password"
                    value={currentValue.password}
                />
                <div>{errors.password}</div>
            </FormGroup>
            <FormGroup>
                <Label for="exampleUsername" sm={2}>
                    Username
                </Label>
                <Input
                    onChange={handleOnChange}
                    id="exampleUsername"
                    name="username"
                    placeholder="username placeholder"
                    type="text"
                    value={currentValue.username}
                />
                <div>{errors.username}</div>
            </FormGroup>
            <FormGroup>
                <Input
                    id="exampleSelect"
                    name="gender"
                    type="select"
                    onChange={handleOnChange}
                >
                    {['male', 'female'].map(number => {
                        return <option value={number} key={number}>{number}</option>
                    })}
                </Input>
            </FormGroup>


            {[{ key: 'male', value: 'male' }, { key: 'female', value: 'female' }].map((item, index) => {
                const checked = currentValue.gender.key === item.key ? true : false;
                return (
                    <FormGroup key={index}>
                        <Input
                            checked={checked}
                            onChange={handleOnChange}
                            id={item.key}
                            name="gender"
                            value={item.value}
                            type="radio">
                        </Input>
                        <Label htmlFor={item.key} check={checked}>
                            {item.value}
                        </Label>
                    </FormGroup>)
            })}

            <FormGroup>
                {RenderListItem}
            </FormGroup>
            <FormGroup>
                <Button>
                    Submit
                </Button>
            </FormGroup>
        </Form >
    );
}

export default FormControl;
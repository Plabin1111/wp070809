import React from 'react'
import { Form, Field } from 'react-advanced-form'
import { Input, Button } from 'react-advanced-form-addons'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default class RegistrationForm extends React.Component {
  registerUser = ({ serialized, fields, form }) => {
    return fetch('https://backend.dev', {
      body: JSON.stringify(serialized)
    })
  }
  
  render() {
    return (
      <Form
        action={this.registerUser}
        onSubmitStart={this.props.onSubmitStart}>
           <Field.Group name="primaryInfo">
          <Input
            name="firstName"
            label="First name"
            required={({ get }) => {
              return !!get(['primaryInfo', 'lastName', 'value'])
            }} />
          <Input
            name="lastName"
            label="Last name"
            required={({ get }) => {
              return !!get(['primaryInfo', 'firstName', 'value'])
            }} />
        </Field.Group>

<FormControl>
     <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
     >
       <FormControlLabel value="female" control={<Radio />} label="Female" />
       <FormControlLabel value="male" control={<Radio />} label="Male" />
       <FormControlLabel value="other" control={<Radio />} label="Other" />
       <FormControlLabel
         value="disabled"
         disabled
         control={<Radio />}
         label="male"
       />
     </RadioGroup>
   </FormControl>

        <Field.Group name="primaryInfo">
          <Input
            name="userEmail"
            type="email"
            label="E-mail"
            required />
        </Field.Group>

       

       

        <Button primary>Register</Button>
      </Form>
    );
  }
}

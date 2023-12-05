
import * as React from "react"; 
import { Button, TextField } from "@material-ui/core"; 
import { Form, Formik } from "formik";
     
interface Values{
    Name: string;
    Phone: number;
    email: string;
}

interface Props {
onSubmit: (values: Values) => void;
}
                
export const MyForm: React. FC<Props> = (onSubmit) => {


    return (
  
    <Formik  initialValues={{Name:'',Phone:'',email:''}} onSubmit={(values)=>{

    onSubmit(values);
    }}>
        {({values,handleChange,handleBlur}) => (
            <Form>
                <div>
                <TextField 
                placeholder="Name"
                name="Name"
                value={values.Name}
                onChange={handleChange}
                onBlur={handleBlur}
                />
               </div>
               <div>
                 <TextField 
                 placeholder="Phone Number"
                name="Phone"
                value={values.Phone}
                onChange={handleChange}
                onBlur={handleBlur}
                />
               </div>
               <div>
                 <TextField 
                 placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                </div>

                <Button type="submit">SUBMIT</Button>
                <pre>
                    {JSON.stringify(values,null ,2)}
                </pre>
            </Form>

        )}
    </Formik>
);
};
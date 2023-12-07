import * as React from "react";
import { Button, TextField, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

interface Values {
  Name: string;
  Phone: string;
  email: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({  }) => {
  const navigate = useNavigate();

  const handleFormSubmit = (values: Values) => {
    // Check if all details are entered
    if (values.Name.trim() !== '' && values.Phone.trim() !== '' && values.email.trim() !== '') {
      // Save to localStorage
      localStorage.setItem("name", values.Name);
      localStorage.setItem("phone", values.Phone);
      localStorage.setItem("email", values.email);

      // Redirect to the next page
      navigate('/SecondPage');
    } else {
      // Display a message or handle the case where not all details are entered
      alert('Please enter all details.');
    }
  };

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Formik initialValues={{ Name: '', Phone: '', email: '' }} onSubmit={values => handleFormSubmit(values)}>
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <h1>Enter Your Details </h1>
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
              <Button
                type="submit"
                style={{
                  backgroundColor: '#2196F3',
                  color: '#fff',
                  borderRadius: '4px',
                  padding: '10px 20px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  margin: '10px',
                }}
              >
                SUBMIT
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </>
  );
};















// import * as React from "react"; 
// import { Button, TextField } from "@material-ui/core"; 
// import { Form, Formik } from "formik";
// import {  useNavigate } from "react-router-dom";


     
// interface Values{
//     Name: string;
//     Phone: number;
//     email: string;
// }

// interface Props {
//     onSubmit: (values: Values) => void;
// }
                
// export const MyForm: React. FC<Props> = (onSubmit: any) => {
//     const navigate = useNavigate();
//     const handleFormSubmit = (values: any) => {
//         // onSubmit(values);
//         event?.preventDefault();

//         localStorage.setItem("name",values.Name);
//         localStorage.setItem("phone",values.Phone);
//         localStorage.setItem("email",values.email);
//         if(values.Name!.length!=0 && values.Name != null) {
//             navigate('/SecondPage')
//         }
// }

//     return (
        
//     <Formik  initialValues={{Name:'',Phone:'',email:''}} onSubmit={
//         (values)=>{
//             handleFormSubmit(values);
//     }}>
//         {({values,handleChange,handleBlur}) => (
//             <Form>
//                 <div>
//                 <TextField 
//                 placeholder="Name"
//                 name="Name"
//                 value={values.Name}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 />
//                </div>
//                <div>
//                  <TextField 
//                  placeholder="Phone Number"
//                 name="Phone"
//                 value={values.Phone}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 />
//                </div>
//                <div>
//                  <TextField 
//                  placeholder="Email"
//                 name="email"
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 />
//                 </div>

//                 <Button type="submit">SUBMIT</Button>
//                 <pre>
//                     {JSON.stringify(values,null ,2)}
//                 </pre>
//             </Form>

//         )}
//     </Formik>
// );
// };
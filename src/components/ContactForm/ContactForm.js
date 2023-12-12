import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Button, ErrorMsg, Label, StyledForm } from './ContactForm.styled';

const contactsSchema = Yup.object().shape({
  name: Yup.string()
  .min(3, 'Too Short!')
  .required('Required'),
  number: Yup.number()
    .positive('Must be positive!')
    .required('Required'),
});

export const ContactForm = ({addForm}) => {
    return (
    <Formik
       initialValues={{ name: '', number: '' }}
       validationSchema = {contactsSchema}
       onSubmit={(values, actions) => {
        addForm(values);
        actions.resetForm();
      }}
     >
       {() => (
         <StyledForm>
          <Label>
            Name
            <Field type="text" name="name" />
            <ErrorMsg name="name" component="div" />
          </Label>
           <Label>
            Number 
           <Field type="tel" name="number" />
           <ErrorMsg name="number" component="div" />
           </Label>
           <Button type="submit">
             Add contact
           </Button>
         </StyledForm>
       )}
     </Formik>)
}
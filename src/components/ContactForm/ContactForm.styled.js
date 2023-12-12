import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
    border: 1px solid rgba(161, 165, 161, 0.397);
    border-radius: 8px;
  `
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 700;
`

export const ErrorMsg = styled(ErrorMessage)`
    font-size: 14px;
    color: red;
`

export const Button = styled.button`
    width: 150px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    padding: 8px;
    cursor: pointer;

    font-size: 14px;
    font-weight: 700;

    border-radius: 10px;
    border: 1px solid rgba(161, 165, 161, 0.397);
`
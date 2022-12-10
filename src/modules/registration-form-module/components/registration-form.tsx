import React from 'react';
import styled from "styled-components";

interface RegistrationFormProps {
    loading: boolean;
    error: string | null;
}

const RegistrationForm = (props: RegistrationFormProps) => {
    const { loading, error } = props;
    return <ExternalContainer>
        <FormContainer>HELLO</FormContainer>
    </ExternalContainer>;
};

const ExternalContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const FormContainer = styled.div`
    width: 80%;
    background-color: #555555;
    margin: 0 auto;
    color: white;
`;

export default RegistrationForm;

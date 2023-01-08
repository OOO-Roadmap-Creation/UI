import React, { useMemo } from 'react';
import { Col, Form, Row, Spin } from 'antd';
import styled from 'styled-components';
import StyledInput from '../../../lib/styled-components/styled-form-input';
import StyledItem from '../../../lib/styled-components/styled-form-item';
import StyledButton from '../../../lib/styled-components/styled-button';
import colors from '../../../lib/styled-components/colors';
import { LoadingOutlined } from '@ant-design/icons';
import { LoginPayload } from '../types/general-types';
import { Link, useNavigate } from 'react-router-dom';
import LinkCol from '../../../lib/styled-components/link-col';
import FormErrorWrapper from '../../../lib/styled-components/form-error-wrapper';

interface FormContentProps {
    loading: boolean;
    loginUser: (payload: LoginPayload, onSuccess?: () => void) => void;
    error: string | null;
    clearError: () => void;
}

const formFields = {
    username: {
        label: 'Username',
        name: 'first-name',
        rules: [{ required: true, message: 'Username field is required' }]
    },
    password: {
        label: 'Password',
        name: 'password',
        required: true,
        rules: [{ required: true, message: 'Password field is required' }]
    }
};

const FormContent = (props: FormContentProps) => {
    const { loading, loginUser, clearError, error } = props;
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const submitButtonContent = useMemo(
        () =>
            loading ? (
                <Spin
                    indicator={
                        <LoadingOutlined style={{ fontSize: 24, color: colors.white }} spin />
                    }
                />
            ) : (
                'Log in'
            ),
        [loading]
    );

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={(values) => {
                const payload: LoginPayload = {
                    password: values[formFields.password.name],
                    username: values[formFields.username.name]
                };
                loginUser(payload, () => {
                    navigate('/');
                });
            }}
            onChange={() => {
                if (error) {
                    clearError();
                }
            }}>
            <GridContainer>
                <Row>
                    <Col flex="auto">
                        <StyledItem {...formFields.username}>
                            <StyledInput disabled={loading} />
                        </StyledItem>
                    </Col>
                </Row>
                <Row>
                    <Col flex="auto">
                        <StyledItem {...formFields.password}>
                            <StyledInput type="password" disabled={loading} />
                        </StyledItem>
                    </Col>
                </Row>
                {error && <FormErrorWrapper>{error}</FormErrorWrapper>}
                <Row justify="space-between">
                    <Col>
                        <SubmitButton
                            type="primary"
                            htmlType="submit"
                            $isPrimary
                            $width="200px"
                            disabled={loading}>
                            {submitButtonContent}
                        </SubmitButton>
                    </Col>
                    <LinkCol>
                        <Link to={'/registration'}>Don't have an account yet? Create it</Link>
                    </LinkCol>
                </Row>
            </GridContainer>
        </Form>
    );
};

const GridContainer = styled.div`
    width: 800px;
    margin: 0 auto;

    .ant-form-item-explain-error {
        color: ${colors.error};
    }
`;

const SubmitButton = styled(StyledButton)`
    margin-top: 20px;
`;
export default FormContent;

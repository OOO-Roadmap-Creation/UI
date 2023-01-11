import React, { useMemo } from 'react';
import { Col, Form, Row, Spin } from 'antd';
import styled from 'styled-components';
import StyledInput from '../../../lib/styled-components/styled-form-input';
import StyledItem from '../../../lib/styled-components/styled-form-item';
import StyledButton from '../../../lib/styled-components/styled-button';
import colors from '../../../lib/styled-components/colors';
import { LoadingOutlined } from '@ant-design/icons';
import { User } from '../../../lib/types/general-types';
import { Link, useNavigate } from 'react-router-dom';
import LinkCol from '../../../lib/styled-components/link-col';
import FormErrorWrapper from '../../../lib/styled-components/form-error-wrapper';

interface FormContentProps {
    loading: boolean;
    registerUser: (payload: User, onSuccess?: () => void) => void;
    error: string | null;
    clearError: () => void;
}

const formFields = {
    firstName: {
        label: 'First name',
        name: 'first-name'
    },
    lastName: {
        label: 'Last name',
        name: 'last-name'
    },
    email: {
        label: 'Email',
        name: 'email',
        required: true,
        rules: [{ required: true, message: 'Email field is required' }, { type: 'email' }]
    },
    workplace: {
        label: 'Organization',
        name: 'workplace'
    },
    nickname: {
        label: 'Nickname',
        name: 'nickname'
    },
    password: {
        label: 'Password',
        name: 'password',
        required: true,
        rules: [{ required: true, message: 'Password field is required' }]
    },
    repeatedPassword: {
        label: 'Password Again',
        name: 'repeated-password',
        required: true,
        rules: [{ required: true, message: 'Repeat Password is required' }]
    }
};

const FormContent = (props: FormContentProps) => {
    const { loading, registerUser, error, clearError } = props;
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
                'Register'
            ),
        [loading]
    );

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={(values) => {
                const payload: User = {
                    password: values[formFields.password.name],
                    email: values[formFields.email.name],
                    nickname: values[formFields.nickname.name],
                    userInfo: {
                        name: values[formFields.firstName.name],
                        lastName: values[formFields.lastName.name],
                        workPlace: values[formFields.workplace.name]
                    }
                };
                registerUser(payload, () => {
                    navigate('/login');
                });
            }}
            onChange={() => {
                if (error) {
                    clearError();
                }
            }}>
            <GridContainer>
                <Row gutter={[16, 16]}>
                    <Col flex="auto">
                        <StyledItem {...formFields.firstName}>
                            <StyledInput disabled={loading} size="large"/>
                        </StyledItem>
                    </Col>
                    <Col flex="auto">
                        <StyledItem {...formFields.lastName}>
                            <StyledInput disabled={loading} size="large"/>
                        </StyledItem>
                    </Col>
                </Row>
                <Row>
                    <Col flex="auto">
                        {/* @ts-ignore */}
                        <StyledItem {...formFields.email}>
                            <StyledInput disabled={loading} size="large"/>
                        </StyledItem>
                    </Col>
                </Row>
                <Row>
                    <Col flex="auto">
                        {/* @ts-ignore */}
                        <StyledItem {...formFields.workplace}>
                            <StyledInput disabled={loading} size="large"/>
                        </StyledItem>
                    </Col>
                </Row>
                <Row>
                    <Col flex="auto">
                        <StyledItem {...formFields.nickname}>
                            <StyledInput disabled={loading} size="large"/>
                        </StyledItem>
                    </Col>
                </Row>
                <Row>
                    <Col flex="auto">
                        <StyledItem {...formFields.password}>
                            <StyledInput type="password" disabled={loading} size="large"/>
                        </StyledItem>
                    </Col>
                </Row>
                <Row>
                    <Col flex="auto">
                        <StyledItem
                            {...formFields.repeatedPassword}
                            rules={[
                                ...formFields.repeatedPassword.rules,
                                ({ getFieldValue }) => ({
                                    validator() {
                                        const pass = getFieldValue(formFields.password.name);
                                        const repeatedPass = getFieldValue(
                                            formFields.repeatedPassword.name
                                        );

                                        if (pass === repeatedPass) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Passwords must be equal'));
                                    }
                                })
                            ]}>
                            <StyledInput type="password" disabled={loading} size="large"/>
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
                        <Link to={'/login'}>Sign in with an existing account</Link>
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

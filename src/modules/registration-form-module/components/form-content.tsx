import React, { useMemo, useState } from 'react';
import { Col, Form, Row, Spin } from 'antd';
import styled from 'styled-components';
import StyledInput from '../../../lib/styled-components/styled-form-input';
import StyledItem from '../../../lib/styled-components/styled-form-item';
import StyledButton from '../../../lib/styled-components/styled-button';
import colors from '../../../lib/styled-components/colors';
import { LoadingOutlined } from '@ant-design/icons';
import {RegistrationPayload} from "../types/general-types";

interface FormContentProps {
    loading: boolean;
    registerUser: (payload: RegistrationPayload) => void;
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
    const { loading, registerUser } = props;
    const [form] = Form.useForm();

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
        <Form form={form} layout="vertical" onFinish={(values) => {
            const payload: RegistrationPayload = {
                password: values[formFields.password.name],
                email: values[formFields.email.name],
                nickname: values[formFields.nickname.name],
                userInfo: {
                    name: values[formFields.firstName.name],
                    lastName: values[formFields.lastName.name]
                }
            }
            registerUser(payload)
        }}>
            <GridContainer>
                <Row gutter={[16, 16]}>
                    <Col flex="auto">
                        <StyledItem {...formFields.firstName}>
                            <StyledInput disabled={loading} />
                        </StyledItem>
                    </Col>
                    <Col flex="auto">
                        <StyledItem {...formFields.lastName}>
                            <StyledInput disabled={loading} />
                        </StyledItem>
                    </Col>
                </Row>
                <Row>
                    <Col flex="auto">
                        {/* @ts-ignore */}
                        <StyledItem {...formFields.email}>
                            <StyledInput disabled={loading} />
                        </StyledItem>
                    </Col>
                </Row>
                <Row>
                    <Col flex="auto">
                        <StyledItem {...formFields.nickname}>
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
                <Row>
                    <Col flex="auto">
                        <StyledItem
                            {...formFields.repeatedPassword}
                            rules={[
                                ...formFields.repeatedPassword.rules,
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        const pass = form.getFieldValue(formFields.password.name);
                                        const repeatedPass = form.getFieldValue(
                                            formFields.repeatedPassword.name
                                        );

                                        if (pass === repeatedPass) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Passwords must be equal'));
                                    }
                                })
                            ]}>
                            <StyledInput
                                type="password"
                                disabled={loading}
                            />
                        </StyledItem>
                    </Col>
                </Row>
                <Row>
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

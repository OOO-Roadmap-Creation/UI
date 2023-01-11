import React, { useMemo } from 'react';
import { Col, Form, Modal, Row, Spin } from 'antd';
import styled from 'styled-components';
import { User } from '../../../lib/types/general-types';
import StyledItem from '../../../lib/styled-components/styled-form-item';
import StyledInput from '../../../lib/styled-components/styled-form-input';
import FormErrorWrapper from '../../../lib/styled-components/form-error-wrapper';
import LinkCol from '../../../lib/styled-components/link-col';
import { LoadingOutlined } from '@ant-design/icons';
import colors from '../../../lib/styled-components/colors';
import StyledButton from '../../../lib/styled-components/styled-button';

interface EditUserModalProps {
    editUserInformation: (userInformation: User) => void;
    userInformation: User;
    isEditModalOpened: boolean;
    setEditModalOpened: (opened: boolean) => void;
    loading: boolean;
    error: string | null;
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
    workplace: {
        label: 'Organization',
        name: 'workplace'
    },
    nickname: {
        label: 'Nickname',
        name: 'nickname'
    }
};

const EditUserModal = (props: EditUserModalProps) => {
    const {
        editUserInformation,
        userInformation,
        isEditModalOpened,
        setEditModalOpened,
        loading,
        error
    } = props;
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
                'Save'
            ),
        [loading]
    );

    return (
        <StyledModal open={isEditModalOpened} closable={false}>
            <Form
                form={form}
                initialValues={{
                    [formFields.nickname.name]: userInformation.nickname,
                    [formFields.firstName.name]: userInformation.userInfo?.name,
                    [formFields.lastName.name]: userInformation.userInfo?.lastName,
                    [formFields.workplace.name]: userInformation.userInfo?.workPlace
                }}
                layout="vertical"
                onFinish={(values) => {
                    const payload: User = {
                        ...userInformation,
                        nickname: values[formFields.nickname.name],
                        userInfo: {
                            ...(userInformation.userInfo || {}),
                            name: values[formFields.firstName.name],
                            lastName: values[formFields.lastName.name],
                            workPlace: values[formFields.workplace.name]
                        }
                    };
                    editUserInformation(payload);
                    setEditModalOpened(false);
                }}
                onChange={() => {
                    // if (error) {
                    //     clearError();
                    // }
                }}>
                <GridContainer>
                    <Row gutter={[16, 16]}>
                        <Col flex="auto">
                            <StyledItem {...formFields.firstName}>
                                <StyledInput disabled={loading} size="large" />
                            </StyledItem>
                        </Col>
                        <Col flex="auto">
                            <StyledItem {...formFields.lastName}>
                                <StyledInput disabled={loading} size="large" />
                            </StyledItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col flex="auto">
                            {/* @ts-ignore */}
                            <StyledItem {...formFields.workplace}>
                                <StyledInput disabled={loading} size="large" />
                            </StyledItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col flex="auto">
                            <StyledItem {...formFields.nickname}>
                                <StyledInput disabled={loading} size="large" />
                            </StyledItem>
                        </Col>
                    </Row>
                    {error && <FormErrorWrapper>{error}</FormErrorWrapper>}
                    <Row justify="space-between">
                        <Col>
                            <ModalButton
                                type="primary"
                                htmlType="submit"
                                $isPrimary
                                $width="200px"
                                disabled={loading}>
                                {submitButtonContent}
                            </ModalButton>
                        </Col>
                        <LinkCol>
                            <StyledButton
                                type="primary"
                                $isPrimary={false}
                                $width="200px"
                                disabled={loading}
                                onClick={() => {
                                    form.resetFields();
                                    setEditModalOpened(false);
                                }}>
                                Cancel
                            </StyledButton>
                        </LinkCol>
                    </Row>
                </GridContainer>
            </Form>
        </StyledModal>
    );
};

const GridContainer = styled.div`
    .ant-form-item-explain-error {
        color: ${colors.error};
    }
`;

const ModalButton = styled(StyledButton)`
    margin-top: 20px;
`;

const StyledModal = styled(Modal)`
    .ant-modal-content {
        background-color: ${colors.grayLight};
    }

    .ant-modal-footer > button {
        display: none;
    }
`;

export default EditUserModal;

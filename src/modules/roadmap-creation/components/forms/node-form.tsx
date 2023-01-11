import React, { useEffect } from 'react';
import { Col, Form, Input, Row } from 'antd';
import StyledItem from '../../../../lib/styled-components/styled-form-item';
import StyledInput from '../../../../lib/styled-components/styled-form-input';
import { NodeEntity } from '../../types/general-types';

const { TextArea } = Input;

interface NodeFormProps {
    setFormValue: (values: NodeEntity) => void;
    nodeFieldsValue: NodeEntity;
}

const NodeForm = (props: NodeFormProps) => {
    const { setFormValue, nodeFieldsValue } = props;
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue(nodeFieldsValue);
    }, [form, nodeFieldsValue]);

    return (
        <Form
            form={form}
            layout="vertical"
            onValuesChange={(_, values) => {
                setFormValue(values);
            }}>
            <Row>
                <Col flex="auto">
                    <StyledItem name="title" label="Title">
                        <StyledInput />
                    </StyledItem>
                </Col>
            </Row>
            <Row>
                <Col flex="auto">
                    <StyledItem name="description" label="Description">
                        <TextArea rows={5} />
                    </StyledItem>
                </Col>
            </Row>
        </Form>
    );
};

export default NodeForm;

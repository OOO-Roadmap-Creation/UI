import React from 'react';
import { Col, Form, Input, Row } from 'antd';
import StyledItem from '../../../../lib/styled-components/styled-form-item';
import StyledInput from '../../../../lib/styled-components/styled-form-input';
import { RoadmapEntity } from '../../types/general-types';

const { TextArea } = Input;

interface RoadmapFormProps {
    setFormValue: (values: RoadmapEntity) => void;
}

const RoadmapForm = (props: RoadmapFormProps) => {
    const { setFormValue } = props;
    const [form] = Form.useForm();

    return (
        <Form
            form={form}
            layout="vertical"
            onValuesChange={(_, values) => {
                setFormValue(values);
            }}>
            <Row>
                <Col flex="auto">
                    <StyledItem name="title" label="Title" initialValue="My Roadmap">
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

export default RoadmapForm;

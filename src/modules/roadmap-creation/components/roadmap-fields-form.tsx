import React from 'react';
import { NodeEntity, RoadmapEntity } from '../types/general-types';
import styled from 'styled-components';
import colors from '../../../lib/styled-components/colors';
import { Collapse } from 'antd';
import RoadmapForm from './forms/roadmap-form';
import NodeForm from './forms/node-form';

const { Panel } = Collapse;

interface RoadmapFieldsFormProps {
    setRoadmapFormValue: (values: RoadmapEntity) => void;
    setNodesFieldsValue: (values: NodeEntity) => void;
    selectedNodeId: string | null;
    nodeFieldsValue: NodeEntity;
}

const RoadmapFieldsForm = (props: RoadmapFieldsFormProps) => {
    const { setRoadmapFormValue, setNodesFieldsValue, selectedNodeId, nodeFieldsValue } = props;
    return (
        <FormWrapper defaultActiveKey={['1']}>
            <Panel header="Roadmap Information" key="1">
                <RoadmapForm setFormValue={setRoadmapFormValue} />
            </Panel>
            {selectedNodeId && (
                <Panel header="Node Information" key="2">
                    <NodeForm
                        setFormValue={setNodesFieldsValue}
                        nodeFieldsValue={nodeFieldsValue}
                    />
                </Panel>
            )}
        </FormWrapper>
    );
};

const FormWrapper = styled(Collapse)`
    &,
    & * {
        border-color: ${colors.grayLight} !important;
    }
    width: 400px;
    position: absolute;
    top: 40px;
    right: 50px;
    background-color: ${colors.grayLight};

    .ant-collapse-content-box {
        background-color: ${colors.grayLight};
    }

    .ant-collapse-expand-icon > span {
        margin-top: 5px;
    }

    svg {
        fill: ${colors.white};
        width: 18px;
        height: 18px;
    }
    .ant-collapse-header-text {
        color: ${colors.white};
        font-family: 'Montserrat' !important;
        font-weight: 200;
        font-size: 22px;
    }

    & .ant-form-item-label {
        label {
            font-size: 22px !important;
        }
    }
`;

export default RoadmapFieldsForm;

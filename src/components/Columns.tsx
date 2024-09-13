import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Col, Row, Flex } from 'antd';
import { Item } from './Item';
import styled from 'styled-components';

const StyledColumnInner = styled(Flex)`
  background: #f0f2f5;
  padding: 20px;
  border: 1px solid #cc8e1e;
`;

const StyledTitle = styled(Typography.Title)`
  text-align: center;
`;

export function Columns() {
  const issuesData = useSelector((state) => state.issuesData.data);
  const assignedOpenData = useSelector((state) => state.assignedOpenData.data);
  const closedIssuesData = useSelector((state) => state.closedIssuesData.data);

  if (!assignedOpenData) {
    return null;
  }

  return (
    <Row styled={{ marginTop: '20px' }} gutter={[20, 20]}>
      <Col xs={24} sm={12} md={8}>
        <StyledTitle level={4}>To Do</StyledTitle>
        <StyledColumnInner vertical="true">
          <Item cardData={issuesData}></Item>
        </StyledColumnInner>
      </Col>
      <Col xs={24} sm={12} md={8}>
        <StyledTitle level={4}>In Progress</StyledTitle>
        <StyledColumnInner vertical="true">
          <Item cardData={assignedOpenData}></Item>
        </StyledColumnInner>
      </Col>
      <Col xs={24} sm={12} md={8}>
        <StyledTitle level={4}>Done</StyledTitle>
        <StyledColumnInner vertical="true">
          <Item cardData={closedIssuesData}></Item>
        </StyledColumnInner>
      </Col>
    </Row>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Col, Row } from 'antd';
import { Item } from './Item';

export function Columns() {
  const issuesData = useSelector((state) => state.issuesData.data);
  const assignedOpenData = useSelector((state) => state.assignedOpenData.data);
  const closedIssuesData = useSelector((state) => state.closedIssuesData.data);

  if (!assignedOpenData) {
    return null;
  }

  return (
    <Row gutter={16}>
      <Col span={8}>
        <Typography.Title level={4}>To Do</Typography.Title>
        <Item cardData={issuesData}></Item>
      </Col>
      <Col span={8}>
        <Typography.Title level={4}>In Progress</Typography.Title>
        <Item cardData={assignedOpenData}></Item>
      </Col>
      <Col span={8}>
        <Typography.Title level={4}>Done</Typography.Title>
        <Item cardData={closedIssuesData}></Item>
      </Col>
    </Row>
  );
}

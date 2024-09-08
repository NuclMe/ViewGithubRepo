import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Image, Typography, Divider, Col, Row } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
const { Link } = Typography;

const StyledCard = styled(Flex)`
  border: 1px solid #cc8e1e;
  border-radius: 10px;
  padding: 15px;
  background: rgb(246, 245, 242);
  margin-bottom: 15px;
`;
export function Item(cardData) {
  console.log(cardData);
  const { test } = cardData;
  console.log(test);
  // return cardData.assignedOpenData.map((issue) => {
  //   <StyledCard vertical key={issue.id} gap="middle">
  //     <Link href={issue.html_url}>{issue.title}</Link>
  //     <Typography.Text>
  //       #{issue.number} Opened {moment(`${issue.created_at}`).fromNow()}
  //     </Typography.Text>
  //     <Flex align="center">
  //       <Flex gap="small" align="center">
  //         <Image src={issue.user.avatar_url} alt="user-image" width={40} />
  //         <Link href={issue.user.html_url}>{issue.user.login}</Link>
  //       </Flex>
  //       <Divider type="vertical" style={{ borderColor: '#7cb305' }} />
  //       <Typography.Text> Comments: {issue.comments}</Typography.Text>
  //     </Flex>
  //   </StyledCard>;
  // });
  return <></>;
}

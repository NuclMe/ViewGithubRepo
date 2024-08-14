import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Image, Typography, Divider } from 'antd';
import styled from 'styled-components';
import moment from 'moment';

const { Link } = Typography;

const FlexContainer = styled(Flex)`
  flex-wrap: wrap;
  padding: 20px;
`;

const StyledCard = styled(Flex)`
  flex-basis: calc(33.3% - 15px);
  border: 1px solid #cc8e1e;
  border-radius: 10px;
  padding: 15px;
  background: rgb(246, 245, 242);
`;

export function Repos() {
  const issuesData = useSelector((state) => state.issuesData.data);

  return (
    <FlexContainer gap="middle">
      {issuesData && issuesData.length > 0 ? (
        issuesData.map((issue) => (
          <StyledCard vertical key={issue.id} gap="small">
            <Link href={issue.html_url}>{issue.title}</Link>
            <Typography.Text>
              #{issue.number} Opened {moment(`${issue.created_at}`).fromNow()}
            </Typography.Text>
            <Flex align="center">
              <Flex gap="small" align="center">
                <Image
                  src={issue.user.avatar_url}
                  alt="user-image"
                  width={40}
                />
                <Link href={issue.user.html_url}>{issue.user.login}</Link>
              </Flex>
              <Divider type="vertical" style={{ borderColor: '#7cb305' }} />
              <Typography.Text> Comments: {issue.comments}</Typography.Text>
            </Flex>
          </StyledCard>
        ))
      ) : (
        <p>No issues found in this repo</p>
      )}
    </FlexContainer>
  );
}

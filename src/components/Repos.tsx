import React from 'react';
import { useSelector } from 'react-redux';
import { Flex } from 'antd';
import styled from 'styled-components';

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
          <StyledCard vertical key={issue.id}>
            <span>{issue.title}</span>
            <p>#{issue.number}</p>
            <span> {issue.user.login}</span>
            <span> Comments: {issue.comments}</span>
          </StyledCard>
        ))
      ) : (
        <p>No issues found in this repo</p>
      )}
    </FlexContainer>
  );
}

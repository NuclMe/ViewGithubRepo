import React from 'react';
import { useSelector } from 'react-redux';
import { Flex } from 'antd';
import styled from 'styled-components';

const FlexContainer = styled(Flex)`
  flex-wrap: wrap;
  margin-right: -20px;
`;
const StyledCard = styled(Flex)`
  width: 33.3%;
  border: 1px solid #cc8e1e;
  border-radius: 10px;
  margin-top: 20px;
  margin-right: 20px;
  padding: 15px;
  background: rgb(246, 245, 242);
`;

export function Repos() {
  const issuesData = useSelector((state) => state.issuesData.data);

  return (
    <FlexContainer>
      {issuesData && issuesData.length > 0 ? (
        issuesData.map((issue) => (
          <StyledCard vertical key={issue.id}>
            <span>{issue.title}</span>
            <p>#{issue.number}</p>
          </StyledCard>
        ))
      ) : (
        <p>No issues found</p>
      )}
    </FlexContainer>
  );
}

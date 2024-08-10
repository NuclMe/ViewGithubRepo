import React from 'react';
import { useSelector } from 'react-redux';
import { Flex } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Flex)`
  width: 33.3%;
`;

const FlexContainer = styled(Flex)`
  flex-wrap: wrap;
`;

export function Repos() {
  const issuesData = useSelector((state) => state.issuesData.data);

  return (
    <FlexContainer gap="middle">
      {issuesData && issuesData.length > 0 ? (
        issuesData.map((issue) => (
          <StyledCard key={issue.id}>
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

import React from 'react';
import { useSelector } from 'react-redux';
import { Flex } from 'antd';

export function Repos() {
  const issuesData = useSelector((state) => state.issuesData.data);

  return (
    <Flex gap="middle">
      {issuesData && issuesData.length > 0 ? (
        issuesData.map((issue) => (
          <Flex key={issue.id}>
            <span>{issue.title}</span>
            <p>#{issue.number}</p>
          </Flex>
        ))
      ) : (
        <p>No issues found</p>
      )}
    </Flex>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import { Flex } from 'antd';

export function RepoNav() {
  const repoInfo = useSelector((state) => state.repoData.data);
  if (repoInfo) {
    const starsCount = Math.round(repoInfo.stargazers_count / 1000);
    return starsCount;
  }

  return (
    repoInfo && (
      <Flex>
        <Flex>{repoInfo.organization.login} &gt;</Flex>
        <Flex> {repoInfo.name} </Flex>
        <Flex> {repoInfo.stargazers_count}</Flex>
      </Flex>
    )
  );
}

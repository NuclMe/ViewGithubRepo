import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Anchor } from 'antd';
import { StarFilled, RightOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export function RepoNav() {
  const repoInfo = useSelector((state) => state.repoData.data);

  if (!repoInfo) {
    return null;
  }

  const StarIcon = styled(StarFilled)`
    color: #ffd700;
  `;

  const NavContainer = styled(Flex)`
    margin-top: 10px;
  `;

  const starsCount = Math.round(repoInfo.stargazers_count / 1000);

  return (
    <NavContainer gap="middle">
      <Anchor
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: `${repoInfo.organization.html_url}`,
            title: `${repoInfo.organization.login}`,
          },
        ]}
      />
      <RightOutlined />
      <Flex>{repoInfo.name}</Flex>
      <Flex gap="small">
        <StarIcon />
        {starsCount} k stars
      </Flex>
    </NavContainer>
  );
}

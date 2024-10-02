import React from 'react';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../redux/store';
import { Flex } from 'antd';
import { StarFilled, RightOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RepoData } from '../types';

const NavContainer = styled(Flex)`
  margin-top: 10px;
`;

export const BreadCrumbs: React.FC = () => {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const repoInfo: RepoData | any = useTypedSelector(
    (state) => state.repoData.data
  );

  if (!repoInfo) {
    return null;
  }

  const starsCount = Math.round(repoInfo.stargazers_count / 1000);

  return (
    <NavContainer gap="middle" align="center">
      <Link to={`${repoInfo.organization.html_url}`}>
        {repoInfo.organization.login}
      </Link>
      <RightOutlined style={{ fontSize: '14px', color: '#08c' }} />
      <Link to={`${repoInfo.html_url}`}>{repoInfo.name}</Link>
      <Flex align="center" gap="small">
        <StarFilled style={{ fontSize: '14px', color: '#ffd700' }} />
        {starsCount}k stars
      </Flex>
    </NavContainer>
  );
};

import React, { useState } from 'react';
import { Input, Button, Flex } from 'antd';
import {
  useLazyGetAllIssuesQuery,
  useLazyGetRepoInfoQuery,
} from '../redux/issuesApi';
import { useDispatch } from 'react-redux';
import { setIssuesData, setRepoInfo } from '../redux';

export function Header() {
  const [links, setLinks] = useState('');
  const dispatch = useDispatch();

  const [triggerGetAllIssues] = useLazyGetAllIssuesQuery();
  const [triggerGetRepoInfo] = useLazyGetRepoInfoQuery();

  const getIssues = async () => {
    const parts = links.split('/');
    const repoName = parts[parts.length - 1];
    const userName = parts[parts.length - 2];

    const { data } = await triggerGetAllIssues({ userName, repoName });
    const { data: repoInfo } = await triggerGetRepoInfo({ userName, repoName });

    if (data) {
      dispatch(setIssuesData(data));
    }
    if (repoInfo) {
      dispatch(setRepoInfo(repoInfo));
    }
  };

  return (
    <header>
      <Flex gap="small">
        <Input
          placeholder="Enter repo URL"
          value={links}
          onChange={(event) => {
            setLinks(event.target.value);
          }}
        />
        <Button type="primary" onClick={getIssues}>
          Load issues
        </Button>
      </Flex>
    </header>
  );
}

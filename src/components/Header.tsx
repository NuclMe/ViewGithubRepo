import React, { useState } from 'react';
import { Input, Button, Flex } from 'antd';
import { useLazyGetAllIssuesQuery } from '../redux/issuesApi';
import { useDispatch } from 'react-redux';
import { setIssuesData } from '../redux/issuesDataSlice';

export function Header() {
  const [links, setLinks] = useState('');
  const dispatch = useDispatch();

  const [triggerGetAllIssues] = useLazyGetAllIssuesQuery();

  const getIssues = async () => {
    const parts = links.split('/');
    const repoName = parts[parts.length - 1];
    const userName = parts[parts.length - 2];

    const { data } = await triggerGetAllIssues({ userName, repoName });

    if (data) {
      dispatch(setIssuesData(data));
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

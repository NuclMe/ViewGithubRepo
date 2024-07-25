import React, { useState } from 'react';
import { Input, Button, Flex } from 'antd';
import { useLazyGetAllIssuesQuery } from '../redux/issuesSlice';

export function Header() {
  const [links, setLinks] = useState('');

  const [triggerGetAllIssues, { data, isLoading }] = useLazyGetAllIssuesQuery();

  const getIssues = () => {
    const parts = links.split('/');
    const repoName = parts[parts.length - 1];
    const userName = parts[parts.length - 2];

    triggerGetAllIssues({ userName: userName, repoName: repoName });
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

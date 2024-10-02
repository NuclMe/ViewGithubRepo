import React, { useState, useEffect } from 'react';
import { Input, Button, Flex } from 'antd';
import {
  useLazyGetAllIssuesQuery,
  useLazyGetRepoInfoQuery,
  useLazyGetOpenAssignedIssuesQuery,
  useLazyGetClosedIssuesQuery,
} from '../redux/issuesApi';
import { useDispatch } from 'react-redux';
import {
  setIssuesData,
  setRepoInfo,
  setOpenAssignedIssues,
  setClosedIssues,
} from '../redux';

export const Header: React.FC = () => {
  const [links, setLinks] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const savedLinks = localStorage.getItem('repoLink');
    if (savedLinks) {
      setLinks(savedLinks);
    }
  }, []);

  const [triggerGetAllIssues] = useLazyGetAllIssuesQuery();
  const [triggerGetRepoInfo] = useLazyGetRepoInfoQuery();
  const [triggerGetOpenAssignedIssues] = useLazyGetOpenAssignedIssuesQuery();
  const [triggerGetClosedIssues] = useLazyGetClosedIssuesQuery();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinks(e.target.value);
    localStorage.setItem('repoLink', e.target.value);
  };
  const getIssues = async () => {
    const parts = links.split('/');
    const repoName = parts[parts.length - 1];
    const userName = parts[parts.length - 2];

    const { data } = await triggerGetAllIssues({ userName, repoName });
    const { data: repoInfo } = await triggerGetRepoInfo({ userName, repoName });
    const { data: openAssignedIssues } = await triggerGetOpenAssignedIssues({
      userName,
      repoName,
    });
    const { data: closedIssues } = await triggerGetClosedIssues({
      userName,
      repoName,
    });

    if (data && repoInfo && openAssignedIssues && closedIssues) {
      dispatch(setIssuesData(data));
      dispatch(setRepoInfo(repoInfo));
      dispatch(setOpenAssignedIssues(openAssignedIssues));
      dispatch(setClosedIssues(closedIssues));
    }
  };

  return (
    <header>
      <Flex gap="small">
        <Input
          placeholder="Enter repo URL"
          value={links}
          onChange={handleInputChange}
        />
        <Button type="primary" onClick={getIssues}>
          Load issues
        </Button>
      </Flex>
    </header>
  );
};

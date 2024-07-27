import React from 'react';
import { useSelector } from 'react-redux';

export function Repos() {
  const repos = useSelector((state) => state.issuesApi.queries);
  console.log(repos);
  return <div>Repos</div>;
}

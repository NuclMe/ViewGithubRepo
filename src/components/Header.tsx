import React from 'react';
import { Input, Button, Flex } from 'antd';
export function Header() {
  return (
    <header>
      <Flex gap="small">
        <Input placeholder="Enter repo URL" />
        <Button type="primary">Load issues</Button>
      </Flex>
    </header>
  );
}

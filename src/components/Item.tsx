import React from 'react';
import { Flex, Image, Typography, Divider } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import { Draggable } from 'react-beautiful-dnd';

const { Link } = Typography;

const StyledCard = styled(Flex)`
  border: 1px solid #cc8e1e;
  border-radius: 10px;
  padding: 15px;
  background: rgb(246, 245, 242);
  margin-bottom: 15px;
  max-height: 150px;
  height: 100%;
`;

const StyledItemTitle = styled(Link)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export function Item({ cardData }) {
  if (!cardData) {
    return null;
  }

  return (
    <>
      {cardData.map((issue, index) => (
        <Draggable
          key={issue.id.toString()}
          draggableId={issue.id.toString()}
          index={index}
        >
          {(provided) => (
            <StyledCard
              vertical
              key={issue.id}
              gap="middle"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <StyledItemTitle href={issue.html_url}>
                {issue.title}
              </StyledItemTitle>
              <Typography.Text>
                #{issue.number} Opened {moment(issue.created_at).fromNow()}
              </Typography.Text>
              <Flex align="center">
                <Flex gap="small" align="center">
                  <Image
                    src={issue.user.avatar_url}
                    alt="user-image"
                    width={40}
                  />
                  <Link href={issue.user.html_url}>{issue.user.login}</Link>
                </Flex>
                <Divider type="vertical" style={{ borderColor: '#7cb305' }} />
                <Typography.Text>Comments: {issue.comments}</Typography.Text>
              </Flex>
            </StyledCard>
          )}
        </Draggable>
      ))}
    </>
  );
}

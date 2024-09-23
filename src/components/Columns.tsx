import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Col, Row, Flex } from 'antd';
import { Item } from './Item';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const StyledColumnInner = styled(Flex)`
  background: #f0f2f5;
  padding: 20px;
  border: 1px solid #cc8e1e;
`;

const StyledTitle = styled(Typography.Title)`
  text-align: center;
`;

export function Columns() {
  const issuesData = useSelector((state) => state.issuesData.data);
  const assignedOpenData = useSelector((state) => state.assignedOpenData.data);
  const closedIssuesData = useSelector((state) => state.closedIssuesData.data);

  // Initialize the state with the Redux store data
  const [todoList, setTodoList] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  // Load data from store into state when the component mounts
  useEffect(() => {
    setTodoList(issuesData || []);
    setInProgressList(assignedOpenData || []);
    setDoneList(closedIssuesData || []);
  }, [issuesData, assignedOpenData, closedIssuesData]);

  // Handler for drag and drop
  const onDragEnd = ({ source, destination }: any) => {
    // Make sure we have a valid destination
    if (!destination) return;

    // Check if the item was moved within the same column or to a different column
    if (source.droppableId === destination.droppableId) {
      // Move within the same list
      const newList = reorderList(
        source.droppableId,
        source.index,
        destination.index
      );
      updateListByDroppableId(source.droppableId, newList);
    } else {
      // Move to a different list
      const result = moveBetweenLists(source, destination);
      updateListByDroppableId(source.droppableId, result[source.droppableId]);
      updateListByDroppableId(
        destination.droppableId,
        result[destination.droppableId]
      );
    }
  };

  // Reorder items within the same list
  const reorderList = (
    droppableId: string,
    startIndex: number,
    endIndex: number
  ) => {
    const list = [...getListByDroppableId(droppableId)]; // Создаем копию массива
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);
    return list;
  };

  // Move items between lists
  const moveBetweenLists = (source: any, destination: any) => {
    const sourceList = [...getListByDroppableId(source.droppableId)]; // Копия исходного списка
    const destinationList = [...getListByDroppableId(destination.droppableId)]; // Копия целевого списка

    const [removed] = sourceList.splice(source.index, 1);
    destinationList.splice(destination.index, 0, removed);

    return {
      [source.droppableId]: sourceList,
      [destination.droppableId]: destinationList,
    };
  };

  // Get list by droppable ID
  const getListByDroppableId = (droppableId: string) => {
    if (droppableId === 'col-1') return todoList;
    if (droppableId === 'col-2') return inProgressList;
    if (droppableId === 'col-3') return doneList;
    return [];
  };

  // Update the appropriate list by droppable ID
  const updateListByDroppableId = (droppableId: string, newList: any[]) => {
    if (droppableId === 'col-1') setTodoList(newList);
    if (droppableId === 'col-2') setInProgressList(newList);
    if (droppableId === 'col-3') setDoneList(newList);
  };

  if (!todoList.length && !inProgressList.length && !doneList.length) {
    return null;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Row styled={{ marginTop: '20px' }} gutter={[20, 20]}>
        <Col xs={24} sm={12} md={8}>
          <StyledTitle level={4}>To Do</StyledTitle>
          <StyledColumnInner vertical="true">
            <Droppable droppableId="col-1">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Item cardData={todoList} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </StyledColumnInner>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <StyledTitle level={4}>In Progress</StyledTitle>
          <StyledColumnInner vertical="true">
            <Droppable droppableId="col-2">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Item cardData={inProgressList} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </StyledColumnInner>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <StyledTitle level={4}>Done</StyledTitle>
          <StyledColumnInner vertical="true">
            <Droppable droppableId="col-3">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Item cardData={doneList} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </StyledColumnInner>
        </Col>
      </Row>
    </DragDropContext>
  );
}

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row } from 'antd';
import { Column } from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

export function Columns() {
  const issuesData = useSelector((state) => state.issuesData.data);
  const assignedOpenData = useSelector((state) => state.assignedOpenData.data);
  const closedIssuesData = useSelector((state) => state.closedIssuesData.data);

  const [todoList, setTodoList] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  useEffect(() => {
    const savedTodo = localStorage.getItem('todoList');
    const savedInProgress = localStorage.getItem('inProgressList');
    const savedDone = localStorage.getItem('doneList');

    if (savedTodo) {
      setTodoList(JSON.parse(savedTodo));
    } else {
      setTodoList(issuesData || []);
    }

    if (savedInProgress) {
      setInProgressList(JSON.parse(savedInProgress));
    } else {
      setInProgressList(assignedOpenData || []);
    }

    if (savedDone) {
      setDoneList(JSON.parse(savedDone));
    } else {
      setDoneList(closedIssuesData || []);
    }
  }, [issuesData, assignedOpenData, closedIssuesData]);

  useEffect(() => {
    if (todoList.length > 0)
      localStorage.setItem('todoList', JSON.stringify(todoList));
    if (inProgressList.length > 0)
      localStorage.setItem('inProgressList', JSON.stringify(inProgressList));
    if (doneList.length > 0)
      localStorage.setItem('doneList', JSON.stringify(doneList));
  }, [todoList, inProgressList, doneList]);

  const onDragEnd = ({ source, destination }: any) => {
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      const newList = reorderList(
        source.droppableId,
        source.index,
        destination.index
      );
      updateListByDroppableId(source.droppableId, newList);
    } else {
      const result = moveBetweenLists(source, destination);
      updateListByDroppableId(source.droppableId, result[source.droppableId]);
      updateListByDroppableId(
        destination.droppableId,
        result[destination.droppableId]
      );
    }
  };

  const reorderList = (
    droppableId: string,
    startIndex: number,
    endIndex: number
  ) => {
    const list = [...getListByDroppableId(droppableId)];
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);
    return list;
  };

  const moveBetweenLists = (source: any, destination: any) => {
    const sourceList = [...getListByDroppableId(source.droppableId)];
    const destinationList = [...getListByDroppableId(destination.droppableId)];
    const [removed] = sourceList.splice(source.index, 1);
    destinationList.splice(destination.index, 0, removed);

    return {
      [source.droppableId]: sourceList,
      [destination.droppableId]: destinationList,
    };
  };

  const getListByDroppableId = (droppableId: string) => {
    if (droppableId === 'col-1') return todoList;
    if (droppableId === 'col-2') return inProgressList;
    if (droppableId === 'col-3') return doneList;
    return [];
  };

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
        <Column name={'To Do'} cardData={todoList} droppableId="col-1" />
        <Column
          name={'In Progress'}
          cardData={inProgressList}
          droppableId="col-2"
        />
        <Column name={'Done'} cardData={doneList} droppableId="col-3" />
      </Row>
    </DragDropContext>
  );
}

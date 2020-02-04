import React from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import { TaskStatusColumnWrapper } from './styles';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const DnDArea = ({ onChangeOffset, items, renderItem, onMouseEnter }) => {
  const onDragEnd = result => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination || !source) return;
    const newItems = reorder(items, source.index, destination.index);
    onChangeOffset && onChangeOffset(newItems);
  };

  // return items.map((item, index) => (
  //   <div onMouseEnter={() => onMouseEnter(item, index)}>
  //     {renderItem({
  //       item,
  //       index,
  //     })}
  //   </div>
  // ));

  return (
    <TaskStatusColumnWrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable key="droppableId-1" droppableId="droppableId-1">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`D2DList ${snapshot.isDraggingOver ? 'draggingOver' : ''}`}
            >
              {items.map((item, index) => (
                <Draggable
                  // isDragDisabled
                  key={String(index)}
                  draggableId={`item-${index}`}
                  index={index}
                >
                  {(draggableProvided, draggableSnapshot) => (
                    <div
                      ref={draggableProvided.innerRef}
                      snapshot={draggableSnapshot}
                      onMouseEnter={() => onMouseEnter(item, index)}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                      className={`D2DItem ${snapshot.isDragging ? 'selected' : ''}`}
                      style={draggableProvided.draggableProps.style}
                    >
                      {renderItem({
                        item,
                        index,
                      })}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </TaskStatusColumnWrapper>
  );
};

DnDArea.propTypes = {
  items: PropTypes.array,
  onChangeOffset: PropTypes.func,
  renderItem: PropTypes.func,
  onMouseEnter: PropTypes.func,
};
DnDArea.defaultProps = {
  items: [],
};

export default DnDArea;

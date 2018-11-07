import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ value }) => value);

const SortableList = SortableContainer(({ items, className, insertComponent }) => {
  return (
    <div className={className}>
      {items.map((item, index) => {
        return <SortableItem key={`item-${index}`} index={index} value={item} />;
      })}
      {insertComponent}
    </div>
  );
});

export default SortableList;

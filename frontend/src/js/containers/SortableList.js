import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ value, className }) =>
  <div className={className}>{ value }</div>
);

const SortableList = SortableContainer(({ items, className, itemClassName, insertComponent }) => {
  return (
    <div className={className}>
      {items.map((item, index) => {
        return <SortableItem key={`item-${index}`}
                             index={index} value={item}
                             className={itemClassName}
        />;
      })}
      {insertComponent}
    </div>
  );
});

export default SortableList;

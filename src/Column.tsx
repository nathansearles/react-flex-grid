// TODO: Allow props to be passed in
// TODO: Allow additional classes to be passed in
import React from 'react';
import getConfig from './config';
import styles from './Grid.module.scss';

interface Props {
  children: React.ReactNode;
  columns?: {
    [key: string]: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
  };
  offsets?: {
    [key: string]: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  };
  ordering?: {
    [key: string]: number;
  };
  [key: string]: any;
}

export default function Column({
  children,
  columns,
  offsets,
  ordering,
}: Props) {
  // Define our breakpoint labels using breakpoints keys
  const breakpointLabels = Object.keys(getConfig.breakpoints);

  // Setup our class array
  const classNames: string[] = [styles.column];

  // The column size within breakpoint
  // @param {Object} columns prop
  // Usage: <Column columns={{ xs: 7, sm: 6, md: 3 }}></Column>
  const handleColumns = (columns: object): void => {
    for (let [breakpoint, value] of Object.entries(columns)) {
      if (breakpointLabels.includes(breakpoint)) {
        classNames.push(styles[`column-${value}@${breakpoint}`]);
      }
    }
  };

  // The column offset amount within breakpoint
  // @param {Object} offsets prop
  // Usage: <Column offsets={{ xs: 3, sm: 2, md: 1 }}></Column>
  const handleOffsets = (offsets: object): void => {
    for (let [breakpoint, value] of Object.entries(offsets)) {
      classNames.push(styles[`column-offset-${value}@${breakpoint}`]);
    }
  };

  // The column order amount within breakpoint
  // @param {Object} order prop
  // Usage: <Column ordering={{ xs: 1, md: 2 }}></Column>
  const handleOrdering = (orders: object): void => {
    for (let [breakpoint, value] of Object.entries(orders)) {
      classNames.push(styles[`column-order-${value}@${breakpoint}`]);
    }
  };

  columns && handleColumns(columns);
  offsets && handleOffsets(offsets);
  ordering && handleOrdering(ordering);

  return <div className={classNames.join(' ')}>{children}</div>;
}

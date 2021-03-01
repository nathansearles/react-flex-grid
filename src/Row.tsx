// TODO: pass class name - scoped or non-scoped
import React from 'react';
import getConfig from './config';
import styles from './Grid.module.scss';

interface Props {
  children: React.ReactNode;
  justify?: {
    [key: string]: 'normal' | 'start' | 'center' | 'end';
  };
  align?: {
    [key: string]: 'normal' | 'start' | 'center' | 'end';
  };
  spacing?: {
    [key: string]: 0 | 1 | 2 | 3 | 4;
  };
  className?: string;
}

export default function Row({
  children,
  justify,
  align,
  spacing,
  className,
}: Props) {
  // Define our breakpoint labels using breakpoints keys
  const breakpointLabels = Object.keys(getConfig.breakpoints);

  // Setup our class array
  const classNames: string[] = [styles.row];

  // The justification within breakpoint
  // @param {Object} justify prop
  // Usage: <Row justify={{ xs: "center", md: "start", lg: "end" }}></Row>
  const handleJustify = (justify: object): void => {
    for (let [breakpoint, value] of Object.entries(justify)) {
      if (breakpointLabels.includes(breakpoint)) {
        classNames.push(styles[`justify-${value}@${breakpoint}`]);
      }
    }
  };

  // The alignment within breakpoint
  // @param {Object} align prop
  // Usage: <Row align={{ xs: "center", md: "start", lg: "end" }}></Row>
  const handleAlign = (align: object): void => {
    for (let [breakpoint, value] of Object.entries(align)) {
      if (breakpointLabels.includes(breakpoint)) {
        classNames.push(styles[`align-${value}@${breakpoint}`]);
      }
    }
  };

  // The gutter spacing within breakpoint
  // @param {Object} spacing prop
  // Usage: <Row spacing={{ xs: 0, md: 4, lg: 2 }}></Row>
  const handleSpacing = (spacing: object): void => {
    for (let [breakpoint, value] of Object.entries(spacing)) {
      if (breakpointLabels.includes(breakpoint)) {
        classNames.push(styles[`spacing-${value}@${breakpoint}`]);
      }
    }
  };

  justify && handleJustify(justify);
  align && handleAlign(align);
  spacing && handleSpacing(spacing);

  return (
    <div className={[classNames.join(' '), className].join(' ')}>
      {children}
    </div>
  );
}

import React, { forwardRef, ReactNode } from 'react';
import styles from './grid.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

export type Ref = HTMLDivElement;

const Container = forwardRef<Ref, Props>(
  ({ children, className }: Props, ref) => (
    <div ref={ref} className={[styles.container, className].join(' ')}>
      {children}
    </div>
  ),
);

export default Container;

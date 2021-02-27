// TODO: forward ref
// TODO: pass class name - scoped or non-scoped
import React, { forwardRef, ReactNode } from 'react';
import styles from './grid.module.scss';

interface Props {
  children: ReactNode;
}

export type Ref = HTMLDivElement;

const Container = forwardRef<Ref, Props>(({ children }: Props, ref) => (
  <div ref={ref} className={styles.container}>
    {children}
  </div>
));

export default Container;

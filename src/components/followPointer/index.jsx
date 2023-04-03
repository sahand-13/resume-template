import React, { useRef } from 'react';
import { useFollowPointer } from '../../hooks/useFollowPointer';
import { AnimatePresence, m } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import styles from './Pointer.module.css';

const FollowPointer = ({ children }) => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <>
      <m.div
        key="tracker"
        ref={ref}
        className={styles.box}
        animate={{ x, y }}
        transition={{
          type: 'spring',
          damping: 10,
          stiffness: 50,
          restDelta: 0.001,
        }}
      />
      {children}
    </>
  );
};

export default FollowPointer;

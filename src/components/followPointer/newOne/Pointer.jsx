import { useRef, forwardRef, useImperativeHandle, useEffect } from 'react';
import { gsap } from 'gsap';
import './Pointer.css';
import { useTheme } from '@mui/material';
const Circle = forwardRef(({ size, delay }, ref) => {
  const theme = useTheme();
  const el = useRef();

  useImperativeHandle(
    ref,
    () => {
      // return our API
      return {
        moveTo(x, y) {
          gsap.to(el.current, { x, y, delay });
        },
      };
    },
    [delay]
  );

  return <div className={`circle ${size}`} style={{ background: theme.palette.primary.main }} ref={el}></div>;
});

export function Pointer({ children }) {
  const circleRefs = useRef([]);

  // reset on re-renders
  circleRefs.current = [];

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    circleRefs.current.forEach((ref, index) => ref.moveTo(innerWidth / 2, innerHeight / 2));

    const onMove = ({ clientX, clientY }) => {
      circleRefs.current.forEach((ref, index) =>
        ref.moveTo(clientX + (index ? index * 10 : 10), clientY + (index ? index * 10 : 10))
      );
    };

    window.addEventListener('pointermove', onMove);

    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  const addCircleRef = (ref) => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };

  return (
    <div>
      <Circle size="sm" ref={addCircleRef} delay={0} />
      <Circle size="md" ref={addCircleRef} delay={0.1} />
      <Circle size="lg" ref={addCircleRef} delay={0.2} />
      {children}
    </div>
  );
}

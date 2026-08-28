"use client";

import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
  MotionValue,
} from "framer-motion";

interface VelocityMarqueeProps {
  children: React.ReactNode;
  baseVelocity?: number; // Default: -1 (right to left)
  speedFactor?: number; // Default: 3.5 (gentler, elegant speed)
  scrollFactor?: number; // Default: 6 (smooth scroll boost)
  className?: string;
}

export function VelocityMarquee({
  children,
  baseVelocity = -1,
  speedFactor = 3.5,
  scrollFactor = 6,
  className = "",
}: VelocityMarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(
    smoothVelocity,
    [-1000, 0, 1000],
    [-5, 0, 5],
    { clamp: false }
  );

  // Wrap at -25% since we render 4 identical sets of children
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  useAnimationFrame((t, delta) => {
    // Base right-to-left displacement (% per second)
    let moveBy = baseVelocity * (delta / 1000) * speedFactor;

    const v = velocityFactor.get();

    if (v > 0) {
      // Scrolling DOWN: faster right-to-left (more negative displacement)
      moveBy -= v * scrollFactor * (delta / 1000);
    } else if (v < 0) {
      // Scrolling UP: move left-to-right (positive displacement)
      moveBy += (-v * scrollFactor - baseVelocity * speedFactor) * (delta / 1000);
    }

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <motion.div style={{ x }} className="flex gap-6 sm:gap-8 w-max">
        {React.Children.map(children, (child, idx) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { key: `set1-${child.key || idx}` })
            : child
        )}
        {React.Children.map(children, (child, idx) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { key: `set2-${child.key || idx}` })
            : child
        )}
        {React.Children.map(children, (child, idx) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { key: `set3-${child.key || idx}` })
            : child
        )}
        {React.Children.map(children, (child, idx) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { key: `set4-${child.key || idx}` })
            : child
        )}
      </motion.div>
    </div>
  );
}

interface VelocityRotatorProps {
  children: (rotateAngle: MotionValue<number>) => React.ReactNode;
  baseRotateVelocity?: number; // degrees per sec (positive = clockwise)
}

export function VelocityRotator({
  children,
  baseRotateVelocity = 18,
}: VelocityRotatorProps) {
  const baseRotate = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(
    smoothVelocity,
    [-1000, 0, 1000],
    [-5, 0, 5],
    { clamp: false }
  );

  useAnimationFrame((t, delta) => {
    // Base speed in degrees per second (clockwise)
    let rotateBy = baseRotateVelocity * (delta / 1000);

    const v = velocityFactor.get();

    if (v > 0) {
      // Scrolling DOWN: faster clockwise rotation
      rotateBy += v * 28 * (delta / 1000);
    } else if (v < 0) {
      // Scrolling UP: counter-clockwise rotation (anti-clockwise)
      rotateBy -= (-v * 28 + baseRotateVelocity) * (delta / 1000);
    }

    baseRotate.set(baseRotate.get() + rotateBy);
  });

  return <>{children(baseRotate)}</>;
}

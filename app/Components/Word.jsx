import { motion, useScroll, useTransform } from 'framer-motion';

export default function Word({ children, progress, range, index }) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="word">
      <span className="back">{children}</span>
      <motion.span className="w-full h-full" key={index} style={{ opacity: opacity }}>
        {children}
      </motion.span>
    </span>
  );
}

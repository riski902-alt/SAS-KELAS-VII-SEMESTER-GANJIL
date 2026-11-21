import { AnimatePresence, motion } from 'motion/react';
import { useMemo } from 'react';

interface ConfettiBurstProps {
  triggerKey: number;
  intensity?: 'light' | 'celebration';
}

const COLORS = ['#2563EB', '#10B981', '#F59E0B', '#38BDF8', '#F97316'];

export function ConfettiBurst({ triggerKey, intensity = 'light' }: ConfettiBurstProps) {
  const count = intensity === 'celebration' ? 32 : 14;

  const particles = useMemo(() => {
    if (triggerKey <= 0) return [];
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2 + ((triggerKey * 17 + i) % 10) * 0.08;
      const distance = intensity === 'celebration' ? 90 + ((i * 29) % 140) : 45 + ((i * 19) % 65);
      return {
        id: `${triggerKey}-${i}`,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance - (intensity === 'celebration' ? 30 : 15),
        rotate: ((i * 47) % 360) - 180,
        color: COLORS[i % COLORS.length],
        size: intensity === 'celebration' ? (i % 2 === 0 ? 9 : 7) : 7,
        isStar: i % 3 === 0,
      };
    });
  }, [triggerKey, count, intensity]);

  if (triggerKey <= 0) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, x: 0, y: 0, scale: 0.4, rotate: 0 }}
            animate={{
              opacity: 0,
              x: p.x,
              y: p.y + 40,
              scale: 1,
              rotate: p.rotate,
            }}
            transition={{ duration: intensity === 'celebration' ? 1.15 : 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              width: p.size,
              height: p.size,
              backgroundColor: p.isStar ? 'transparent' : p.color,
              borderRadius: p.isStar ? '0px' : '2px',
            }}
          >
            {p.isStar ? (
              <svg viewBox="0 0 24 24" fill={p.color} className="w-full h-full">
                <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
              </svg>
            ) : null}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

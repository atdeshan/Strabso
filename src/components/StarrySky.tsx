import React, { useRef } from 'react';

// Star color distribution based on stellar classification
const starColors = [
  { color: '#ffffff', weight: 30 },    // White (A-type)
  { color: '#fff8f0', weight: 25 },    // Warm white
  { color: '#fffaf5', weight: 20 },    // Pale white
  { color: '#ffeedd', weight: 10 },    // Yellow-white (F-type)
  { color: '#ffddbb', weight: 5 },     // Yellow (G-type)
  { color: '#ffcc99', weight: 3 },     // Orange (K-type)
  { color: '#ffaa77', weight: 2 },     // Deep orange
  { color: '#aaccff', weight: 3 },     // Blue-white (B-type)
  { color: '#99bbff', weight: 2 },     // Blue
];

interface StarProps {
  size: number;
  color: string;
  top: string;
  left: string;
  baseOpacity: number;
  peakOpacity: number;
  twinkleDuration: number;
  twinkleDelay: number;
  isBright: boolean;
  isBrilliant: boolean;
}

interface DustProps {
  top: string;
  left: string;
  driftX: number;
  driftY: number;
  duration: number;
  opacity: number;
  delay: number;
}

// Weighted random color selection
const getStarColor = (): string => {
  const totalWeight = starColors.reduce((sum, s) => sum + s.weight, 0);
  let random = Math.random() * totalWeight;
  for (const star of starColors) {
    random -= star.weight;
    if (random <= 0) return star.color;
  }
  return starColors[0].color;
};

// Generate star data
const generateStars = (
  count: number,
  sizeRange: [number, number],
  brightnessRange: [number, number]
): StarProps[] => {
  return Array.from({ length: count }, () => {
    const sizeRandom = Math.pow(Math.random(), 2);
    const size = sizeRange[0] + sizeRandom * (sizeRange[1] - sizeRange[0]);
    const color = getStarColor();
    const baseOpacity = brightnessRange[0] + Math.random() * (brightnessRange[1] - brightnessRange[0]);
    const twinkleDuration = 3 + Math.random() * 6;

    return {
      size,
      color,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      baseOpacity,
      peakOpacity: Math.min(1, baseOpacity + 0.2 + Math.random() * 0.3),
      twinkleDuration,
      twinkleDelay: Math.random() * twinkleDuration,
      isBright: size > sizeRange[1] * 0.7,
      isBrilliant: size > sizeRange[1] * 0.9 && Math.random() > 0.5,
    };
  });
};

// Generate shooting star data
// const generateShootingStars = (count: number): ShootingStarProps[] => {
//   return Array.from({ length: count }, (_, i) => {
//     const angle = 30 + Math.random() * 30;
//     const distance = 200 + Math.random() * 300;
//     return {
//       top: `${Math.random() * 40 + 5}%`,
//       left: `${Math.random() * 80 + 10}%`,
//       shootX: Math.cos((angle * Math.PI) / 180) * distance,
//       shootY: Math.sin((angle * Math.PI) / 180) * distance,
//       trailAngle: -angle,
//       trailLength: 60 + Math.random() * 60,
//       duration: 6 + Math.random() * 10,
//       delay: i * 8 + Math.random() * 15,
//     };
//   });
// };

// Generate dust data
const generateDust = (count: number): DustProps[] => {
  return Array.from({ length: count }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    driftX: (Math.random() - 0.5) * 100,
    driftY: -50 - Math.random() * 150,
    duration: 20 + Math.random() * 40,
    opacity: 0.2 + Math.random() * 0.3,
    delay: Math.random() * 30,
  }));
};

// Star component
const Star: React.FC<StarProps> = ({
  size,
  color,
  top,
  left,
  baseOpacity,
  peakOpacity,
  twinkleDuration,
  twinkleDelay,
  isBright,
  isBrilliant,
}) => (
  <div
    className="star"
    style={{
      position: 'absolute',
      width: size,
      height: size,
      top,
      left,
      background: color,
      borderRadius: '50%',
      boxShadow: `0 0 ${size * 2}px ${size * 0.5}px ${color}`,
      animation: `twinkle ${twinkleDuration}s ease-in-out infinite`,
      animationDelay: `${twinkleDelay}s`,
      ['--base-opacity' as string]: baseOpacity,
      ['--peak-opacity' as string]: peakOpacity,
      ['--star-color' as string]: color,
    }}
  >
    {isBright && (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300%',
          height: '300%',
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          opacity: 0.4,
          borderRadius: '50%',
        }}
      />
    )}
    {isBrilliant && (
      <>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 1,
            height: 20,
            background: `linear-gradient(to bottom, transparent, ${color}, transparent)`,
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 20,
            height: 1,
            background: `linear-gradient(to right, transparent, ${color}, transparent)`,
            opacity: 0.6,
          }}
        />
      </>
    )}
  </div>
);

// Dust particle component
const Dust: React.FC<DustProps> = ({ top, left, driftX, driftY, duration, opacity, delay }) => (
  <div
    className="dust"
    style={{
      position: 'absolute',
      width: 1,
      height: 1,
      top,
      left,
      background: 'rgba(255,255,255,0.3)',
      borderRadius: '50%',
      animation: `floatDust ${duration}s linear infinite`,
      animationDelay: `${delay}s`,
      ['--dust-x' as string]: `${driftX}px`,
      ['--dust-y' as string]: `${driftY}px`,
      ['--dust-opacity' as string]: opacity,
    }}
  />
);

// Star layer component
const StarLayer: React.FC<{
  stars: StarProps[];
  animationDuration: number;
}> = ({ stars, animationDuration }) => (
  <div
    style={{
      position: 'absolute',
      width: '100%',
      height: '200%',
      top: 0,
      left: 0,
      animation: `verticalDrift ${animationDuration}s linear infinite`,
    }}
  >
    {stars.map((star, i) => (
      <Star key={i} {...star} />
    ))}
  </div>
);

// Main component
interface StarrySkyProps {
  className?: string;
  style?: React.CSSProperties;
}

const StarrySky: React.FC<StarrySkyProps> = ({ className = '', style = {} }) => {
  const distantStars = useRef(generateStars(10, [0.5, 1], [0.2, 0.5]));
  const midStars = useRef(generateStars(10, [1, 1.5], [0.4, 0.7]));
  const closeStars = useRef(generateStars(10, [1.5, 2], [0.6, 0.9]));
  // const shootingStars = useRef(generateShootingStars(10));
  const dustParticles = useRef(generateDust(30));

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: var(--base-opacity); 
            filter: brightness(1);
          }
          50% { 
            opacity: var(--peak-opacity); 
            filter: brightness(1.3);
          }
        }

        @keyframes verticalDrift {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        @keyframes shoot {
          0% {
            opacity: 0;
            transform: translate(0, 0);
          }
          2% { opacity: 1; }
          15% { opacity: 0.8; }
          30% {
            opacity: 0;
            transform: translate(var(--shoot-x), var(--shoot-y));
          }
          100% {
            opacity: 0;
            transform: translate(var(--shoot-x), var(--shoot-y));
          }
        }

        @keyframes floatDust {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% { opacity: var(--dust-opacity); }
          90% { opacity: var(--dust-opacity); }
          100% {
            transform: translate(var(--dust-x), var(--dust-y));
            opacity: 0;
          }
        }

        @keyframes nebulaPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
      `}</style>

      <div
        className={className}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          background: 'transparent',
          zIndex: 0,
          pointerEvents: 'none',
          ...style,
        }}
      >
        {/* Sky gradient */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            
          }}
        />

        {/* Nebulae */}
        {[
          { width: 600, height: 400, top: '10%', left: '60%', color: 'rgba(100, 50, 120, 0.15)', delay: 0 },
          { width: 500, height: 300, top: '50%', left: '10%', color: 'rgba(30, 60, 100, 0.12)', delay: 7 },
          { width: 400, height: 500, top: '60%', right: '20%', color: 'rgba(80, 40, 80, 0.1)', delay: 14 },
        ].map((nebula, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: nebula.width,
              height: nebula.height,
              top: nebula.top,
              left: nebula.left,
              right: nebula.right,
              borderRadius: '50%',
              filter: 'blur(80px)',
              background: `radial-gradient(ellipse, ${nebula.color} 0%, transparent 70%)`,
              animation: `nebulaPulse 20s ease-in-out infinite`,
              animationDelay: `${nebula.delay}s`,
            }}
          />
        ))}

        {/* Star layers */}
        <StarLayer stars={distantStars.current} animationDuration={120} />
        <StarLayer stars={midStars.current} animationDuration={80} />
        <StarLayer stars={closeStars.current} animationDuration={50} />

        {/* Shooting stars */}
        {/* {shootingStars.current.map((star, i) => (
          <ShootingStar key={i} {...star} />
        ))} */}

        {/* Dust particles */}
        {dustParticles.current.map((dust, i) => (
          <Dust key={i} {...dust} />
        ))}
      </div>
    </>
  );
};

export default StarrySky;

/**
 * 背景パターンコンポーネント
 * ミャンマーの伝統的なデザインモチーフを取り入れた背景装飾
 * 菱形、円形、花柄、三角形などの幾何学パターンをアニメーションで表示
 */
import React from 'react';

export const BackgroundPattern: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-10">
      {/* ミャンマー風の幾何学パターン */}
      <div className="absolute inset-0">
        {/* アニメーションする菱形パターン */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`diamond-${i}`}
            className="absolute animate-float"
            style={{
              left: `${10 + i * 15}%`,
              top: `${5 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          >
            <svg width="120" height="120" viewBox="0 0 120 120">
              <polygon
                points="60,10 110,60 60,110 10,60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-amber-600"
              />
              <polygon
                points="60,30 90,60 60,90 30,60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-amber-500"
              />
            </svg>
          </div>
        ))}

        {/* 回転する円形パターン */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute animate-spin-slow"
            style={{
              right: `${5 + i * 20}%`,
              top: `${10 + i * 20}%`,
              animationDuration: `${20 + i * 5}s`,
            }}
          >
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-red-600"
                strokeDasharray="5,5"
              />
              <circle
                cx="50"
                cy="50"
                r="25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-red-500"
              />
              {[...Array(8)].map((_, j) => (
                <line
                  key={j}
                  x1="50"
                  y1="50"
                  x2={50 + 40 * Math.cos((j * Math.PI) / 4)}
                  y2={50 + 40 * Math.sin((j * Math.PI) / 4)}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-red-400"
                />
              ))}
            </svg>
          </div>
        ))}

        {/* ミャンマーの伝統的な花模様 */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`flower-${i}`}
            className="absolute animate-pulse-slow"
            style={{
              left: `${60 + i * 10}%`,
              bottom: `${10 + i * 15}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${6 + i}s`,
            }}
          >
            <svg width="80" height="80" viewBox="0 0 80 80">
              {[...Array(8)].map((_, j) => (
                <ellipse
                  key={j}
                  cx="40"
                  cy="40"
                  rx="15"
                  ry="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-yellow-600"
                  transform={`rotate(${j * 45} 40 40)`}
                />
              ))}
              <circle
                cx="40"
                cy="40"
                r="6"
                fill="currentColor"
                className="text-yellow-500"
              />
            </svg>
          </div>
        ))}

        {/* 三角形のパターン */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`triangle-${i}`}
            className="absolute animate-float"
            style={{
              left: `${20 + i * 25}%`,
              bottom: `${5 + i * 10}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${10 + i * 2}s`,
            }}
          >
            <svg width="90" height="90" viewBox="0 0 90 90">
              <polygon
                points="45,15 75,75 15,75"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-green-600"
              />
              <polygon
                points="45,30 60,60 30,60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-green-500"
              />
            </svg>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

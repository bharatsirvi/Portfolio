import React from 'react';

const TechBackground = ({ variant = 'default', isHero = false }) => (
  <div className="absolute inset-0">
    {/* Main gradient background - unified dark theme */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-gray-900/95"></div>
    
    {/* Geometric pattern overlay */}
    <div
      className="absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A855F7' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px',
      }}
    ></div>
    
    {/* Binary code pattern overlay */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23EC4899' fill-opacity='1'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='monospace' font-size='12'%3E${variant === 'hero' ? '01' : '10'}%3C/text%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }}
    ></div>
    
    {/* Subtle accent gradients for depth */}
    <div
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.06) 0%, rgba(168, 85, 247, 0.02) 30%, transparent 60%)',
      }}
    ></div>
    <div
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.06) 0%, rgba(236, 72, 153, 0.02) 30%, transparent 60%)',
      }}
    ></div>
    
    {/* Overlay gradients for smooth blending */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-slate-900/30"></div>
    
    {/* Additional animation for hero section */}
    {isHero && (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-pink-900/5 animate-pulse"></div>
    )}
  </div>
);

export default TechBackground;

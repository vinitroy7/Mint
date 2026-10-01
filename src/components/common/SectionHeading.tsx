import React from 'react';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  alignment = 'left',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';
  const isCenter = alignment === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {tag && (
        <div className={`inline-flex items-center gap-2 mb-3.5 ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-2.5 h-2.5 bg-[#FFD700] inline-block"></span>
          <span className={`text-xs font-black tracking-widest uppercase font-mono-tech ${isDark ? 'text-[#FFD700]' : 'text-[#141414]'}`}>
            {tag}
          </span>
        </div>
      )}
      
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.08] ${isDark ? 'text-white' : 'text-[#141414]'}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isDark ? 'text-neutral-300' : 'text-[#666666]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

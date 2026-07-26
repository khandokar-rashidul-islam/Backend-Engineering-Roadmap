import React from 'react';

interface FormattedTextProps {
  text: string;
  accentColor: string;
}

export const FormattedText: React.FC<FormattedTextProps> = ({ text, accentColor }) => {
  // Simple regex parser to parse <code>, <b>, and <i> tags
  const parts = text.split(/(<code>.*?<\/code>|<b>.*?<\/b>|<i>.*?<\/i>)/g);

  return (
    <span>
      {parts.map((part, idx) => {
        if (part.startsWith('<code>') && part.endsWith('</code>')) {
          const codeContent = part.replace(/<\/?code>/g, '');
          return (
            <code
              key={idx}
              className="px-1.5 py-0.5 mx-0.5 rounded text-xs font-mono font-medium border border-white/10"
              style={{
                backgroundColor: `${accentColor}18`, // 10% opacity hex
                color: accentColor,
              }}
            >
              {codeContent}
            </code>
          );
        } else if (part.startsWith('<b>') && part.endsWith('</b>')) {
          const boldContent = part.replace(/<\/?b>/g, '');
          return (
            <strong key={idx} className="font-semibold text-slate-100">
              {boldContent}
            </strong>
          );
        } else if (part.startsWith('<i>') && part.endsWith('</i>')) {
          const italicContent = part.replace(/<\/?i>/g, '');
          return (
            <em key={idx} className="italic text-slate-300">
              {italicContent}
            </em>
          );
        }
        return <span key={idx}>{part}</span>;
      })}
    </span>
  );
};

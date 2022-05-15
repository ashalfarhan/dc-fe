import * as React from 'react';

export const PreviewItem = ({ label, children, style }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 8,
        alignItems: 'start',
        ...style
      }}
    >
      <pre style={{ fontSize: 14 }}>{label}</pre>
      {children}
    </div>
  );
};

export const PreviewGroup = ({ children, style = {}, ...props }) => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', columnGap: 48, ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

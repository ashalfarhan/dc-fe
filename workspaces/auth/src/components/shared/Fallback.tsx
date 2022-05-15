import { ReactNode } from 'react';
import { VscLoading } from 'react-icons/vsc';

export function Fallback({
  content,
  title,
}: {
  content?: ReactNode;
  title?: string;
}) {
  return (
    <div className="flex-1 flex items-center justify-center flex-col">
      <VscLoading
        size={52}
        className="motion-safe:animate-spin text-orange-600"
      />
      {content || <h1>{title || 'Getting your profile....'}</h1>}
    </div>
  );
}

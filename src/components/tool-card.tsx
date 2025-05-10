import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export type ToolCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
  isComingSoon: boolean;
};

export const ToolCard = ({
  icon,
  title,
  description,
  link,
  linkText,
  isComingSoon,
}: ToolCardProps) => {
  return (
    <div className="flex flex-col justify-between h-full rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
      <div className="space-y-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-500">{description}</p>
          {isComingSoon && (
            <div className="inline-block rounded-lg bg-gray-100 px-2 py-1 text-xs text-gray-500">
              近日公開予定
            </div>
          )}
        </div>
      </div>
      <div className="pt-4">
        <Link to={link}>
          <Button variant="outline" className="w-full" disabled={isComingSoon}>
            {linkText} <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

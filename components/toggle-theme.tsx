'use client';

import { cn } from '@/lib/utils';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute top-16 right-4 hidden gap-2 text-zinc-400 sm:flex">
      <button
        className={cn(
          'inline-flex size-7 cursor-pointer items-center justify-center rounded-sm text-zinc-400 transition-colors duration-300',
          theme !== 'dark' && 'bg-gray-200/60 text-zinc-600'
        )}
        onClick={() => setTheme('light')}
        aria-label="Toggle light theme"
      >
        <Sun className="size-4" />
      </button>
      <button
        className={cn(
          'inline-flex size-7 cursor-pointer items-center justify-center rounded-sm text-zinc-400 transition-colors duration-300',
          theme === 'dark' && 'bg-gray-700/60 text-white'
        )}
        onClick={() => setTheme('dark')}
        aria-label="Toggle dark theme"
      >
        <Moon className="size-4" />
      </button>
    </div>
  );
}

'use client';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useTheme } from 'next-themes';

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  console.log("dfkj")
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          aria-label="Toggle Theme"
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Toggle theme</p>
      </TooltipContent>
    </Tooltip>
  );
}

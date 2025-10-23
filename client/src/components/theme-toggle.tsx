import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="hover-elevate active-elevate-2"
      data-testid="button-theme-toggle"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" data-testid="icon-moon" />
      ) : (
        <Sun className="h-5 w-5" data-testid="icon-sun" />
      )}
    </Button>
  );
}

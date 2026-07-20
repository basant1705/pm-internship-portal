import { Button } from "@/components/ui/enhanced-button";
import { Bell, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gradient-card border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Smart Allocation Engine</h1>
              <p className="text-sm text-muted-foreground">PM Internship Scheme</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-smooth">
              Dashboard
            </Link>
            <Link to="/apply" className="text-foreground hover:text-primary transition-smooth">
              Apply
            </Link>
            <Link to="/allocations" className="text-foreground hover:text-primary transition-smooth">
              Allocations
            </Link>
            <Link to="/analytics" className="text-foreground hover:text-primary transition-smooth">
              Analytics
            </Link>
          </nav>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
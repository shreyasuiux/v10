// App.tsx

import React, { useState } from "react";
import { BrowserRouter, useNavigate } from "react-router";
import Desktop2 from "../imports/Desktop72";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SearchModal } from "./components/SearchModal";
 
/** helper - lightweight slugify (used only for routes) */
function toSlug(text: string) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")        // spaces to dash
    .replace(/[^\w\-]+/g, "")    // remove non-word chars
    .replace(/\-\-+/g, "-");     // collapse dashes
}

// Inner component that uses navigation hooks
function AppContent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
 
  // Navigation handlers using react-router
  const handleServiceClick = (serviceTitle: string) => {
    const slug = toSlug(serviceTitle);
    navigate(`/services/${encodeURIComponent(slug)}`);
  };
 
  const handleProductClick = (productTitle: string) => {
    const slug = toSlug(productTitle);
    navigate(`/products/${encodeURIComponent(slug)}`);
  };
 
  const handleWhoWeAreItemClick = (item: string) => {
    const slug = toSlug(item);
    navigate(`/company/${encodeURIComponent(slug)}`);
  };
 
  const handleLogoClick = () => {
    navigate(`/`);
  };
 
  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };
 
  return (
    <div className="w-full transition-colors duration-300" style={{ backgroundColor: 'var(--theme-bg-primary)' }}>
      <Desktop2 onSearchClick={handleSearchClick} />
      <Footer 
        onServiceClick={handleServiceClick}
        onProductClick={handleProductClick}
        onWhoWeAreItemClick={handleWhoWeAreItemClick}
        onLogoClick={handleLogoClick}
      />
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}

// Main App component wrapper with BrowserRouter
export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
}

// File: src/components/MainContent.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MainContent({ children, writingData, workItems, bookmarkCategories }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the current route
  const currentRoute = location.pathname; // e.g., "/writing/tango/article-tango-1"

  // Function to flatten nested arrays (for writingData and bookmarkCategories)
  const flattenData = (data) => {
    return data.flatMap((category) => category.items || []);
  };

  // Function to find the next item
  const findNextItem = () => {
    let data;
    if (location.pathname.startsWith('/writing')) {
      data = flattenData(writingData); // Flatten writingData
    } else if (location.pathname.startsWith('/work')) {
      data = workItems; // workItems is already flat
    } else if (location.pathname.startsWith('/bookmarks')) {
      data = flattenData(bookmarkCategories); // Flatten bookmarkCategories
    } else {
      return null; // Exit if the path doesn't match any of the expected routes
    }

    // Find the current item
    const currentIndex = data.findIndex((item) => item.route === currentRoute);

    // Return the next item's route
    if (currentIndex !== -1 && currentIndex < data.length - 1) {
      return data[currentIndex + 1].route;
    }

    return null; // No next item found
  };

  const nextItemRoute = findNextItem();

  return (
    <div className="main-content-container">
      {children}
      {nextItemRoute && (
        <button
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
          onClick={() => navigate(nextItemRoute)}
        >
          Next
        </button>
      )}
    </div>
  );
}
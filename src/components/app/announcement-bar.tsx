'use client';
import { useState } from 'react';
import { X } from 'lucide-react';

function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    isVisible && (
      <div className="sticky top-0">
        <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 flex justify-between items-center">
          <div className="w-full flex justify-center">
            Extra 20% OFF on orders Rs.1999 and above
          </div>
          <X
            size="1.25rem"
            className="cursor-pointer text-ring"
            onClick={() => setIsVisible(false)}
          />
        </div>
      </div>
    )
  );
}

export default AnnouncementBar;

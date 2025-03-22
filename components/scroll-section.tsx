'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'about', label: 'About me' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export default function ScrollSection() {
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5 // Ensures section is at least 50% visible before becoming active
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-1/2 left-2 hidden translate-y-1/2 lg:block">
      <div className="flex flex-col items-start gap-2">
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => scrollToSection(id)}
            className={`flex cursor-pointer items-center gap-2 text-sm transition-colors duration-300 ${
              activeSection === id
                ? 'text-black dark:text-white'
                : 'text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-gray-300'
            }`}
          >
            <motion.div
              animate={{
                scale: activeSection === id ? 1.2 : 1
              }}
              className={cn(
                'size-2 rounded-full border border-gray-300',
                activeSection === id &&
                  'border-gray-700 bg-gray-700 dark:border-gray-300 dark:bg-gray-300'
              )}
              transition={{ duration: 0.2 }}
            />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

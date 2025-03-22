'use client';

export default function Footer() {
  return (
    <div className="flex h-16 items-center justify-center border-t border-gray-200 dark:border-gray-700">
      <p className="text-sm text-gray-500 dark:text-gray-300">
        &copy; {new Date().getFullYear()} Đào Văn Nhâm. All rights reserved.
      </p>
    </div>
  );
}

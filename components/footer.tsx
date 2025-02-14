"use client";

export default function Footer() {
  return (
    <div className="h-16 flex justify-center items-center border-t border-gray-200">
      <p className="text-gray-500 dark:text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Đào Văn Nhâm. All rights reserved.
      </p>
    </div>
  );
}

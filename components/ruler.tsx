'use client';

export default function Ruler() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 mx-auto hidden w-full max-w-screen-md select-none xl:block"
      aria-hidden="true"
    >
      <div className="absolute top-[144px] -left-[4.5rem] flex flex-col gap-10">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="pointer-events-none relative min-h-4 min-w-12 -rotate-90 text-center text-xs font-medium text-gray-300 before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-px before:-translate-x-1/2 before:translate-y-1/2 before:bg-gray-200"
            // opacity is blurred by the parent's opacity
            style={{ opacity: 1 - i / 20 }}
          >
            {i * 50}
          </div>
        ))}
      </div>
      <div className="absolute top-[144px] -right-[4.5rem] flex flex-col gap-10">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="pointer-events-none relative min-h-4 min-w-12 rotate-90 text-center text-xs font-medium text-gray-300 before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-px before:-translate-x-1/2 before:translate-y-1/2 before:bg-gray-200"
            // opacity is blurred by the parent's opacity
            style={{ opacity: 1 - i / 20 }}
          >
            {i * 50}
          </div>
        ))}
      </div>
      <div className="bleed-ln-gray-200 bleed-bg-l absolute top-25 -left-8 hidden h-px xl:block">
        <div className="absolute top-0 left-0 z-2 -mt-1 -ml-1 size-2 rounded-full border border-gray-200 bg-white"></div>
      </div>
      <div className="bleed-ln-gray-200 bleed-bg-r absolute top-25 -right-8 hidden h-px xl:block">
        <div className="absolute top-0 left-0 z-2 -mt-1 -ml-1 size-2 rounded-full border border-gray-200 bg-white"></div>
      </div>
      <div className="bleed-ln-gray-200 bleed-border-b absolute -left-8 rotate-90"></div>
      <div className="bleed-ln-gray-200 bleed-border-b absolute -right-8 rotate-90"></div>
    </div>
  );
}

'use client'

import dynamic from 'next/dynamic';

// Dynamically import CalWidget with no SSR to avoid React version conflicts
const CalWidget = dynamic(() => import('./cal-widget'), {
    ssr: false,
    loading: () => (
        <button
            className="bg-neutral-900 flex gap-2 items-center justify-center font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 px-4 py-1 cursor-pointer shadow-inner shadow-neutral-500 dark:shadow-neutral-600 rounded text-neutral-100 dark:text-neutral-900 dark:bg-neutral-200"
        >
            Connect
        </button>
    ),
});

export default CalWidget;

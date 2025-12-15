'use client'

import dynamic from 'next/dynamic';


const CalWidget = dynamic(() => import('./cal-widget'), {
    ssr: false,
    loading: () => (
        <button
            className=" flex gap-2 items-center justify-center font-semibold   px-4 py-1 cursor-pointer rounded "
        >
            Connect
        </button>
    ),
});

export default CalWidget;

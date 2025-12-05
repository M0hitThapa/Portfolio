'use client'

import { getCalApi } from "@calcom/embed-react";
import Image from "next/image";
import { useEffect } from "react";
export default function CalWidget() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "30min" });
            cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
        })();
    }, []);
    return (
        <button
            data-cal-namespace="30min"
            data-cal-link="mohit-thapa/30min"
            data-cal-config='{"layout":"month_view"}'
            className="bg-neutral-900 flex gap-2 items-center justify-center font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 px-4 py-1 cursor-pointer shadow-inner shadow-neutral-500 dark:shadow-neutral-600 rounded text-neutral-100 dark:text-neutral-900 dark:bg-neutral-200"
        >
            <Image src="/profile.png" alt="profile image" height={100} width={100} className="size-5 rounded-full border-neutral-500 dark:border-neutral-300 bg-yellow-500" />
            Connect
        </button>
    );
}

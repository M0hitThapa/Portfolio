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
            className=" flex gap-2 items-center justify-center bg-neutral-200 dark:bg-neutral-900 font-semibold  rounded text-neutral-700 dark:text-neutral-100 border border-neutral-200 cursor-pointer px-8 py-1 rounded shadow-inner shadow-neutral-200 dark:shadow-neutral-900 dark:border-neutral-900"
        >
            <Image src="/profile.png" alt="profile image" height={120} width={120} className="size-6 rounded-full border-neutral-500 dark:border-neutral-300 bg-cyan-500" />
            Connect
        </button>
    );
}

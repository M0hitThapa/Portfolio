"use client";

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
      className="group shadow-input text-md relative z-10 flex h-10 w-40 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-sm border-2 border-neutral-200 bg-white p-2 font-medium text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400"
    >
      <Image
        src="/profile.png"
        alt="profile image"
        height={120}
        width={120}
        className="size-6 rounded-full border-neutral-500 bg-cyan-500 dark:border-neutral-300"
      />
      Book a call
      <span className="absolute -top-8 -left-2 h-30 w-36 origin-left scale-x-0 rotate-12 transform bg-white transition-transform duration-1000 group-hover:scale-x-100 group-hover:duration-500"></span>
      <span className="absolute -top-8 -left-2 h-30 w-36 origin-left scale-x-0 rotate-12 transform bg-teal-400 transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-700"></span>
      <span className="absolute -top-8 -left-2 h-30 w-36 origin-left scale-x-0 rotate-12 transform bg-teal-600 transition-transform duration-500 group-hover:scale-x-50 group-hover:duration-1000"></span>
      <span className="absolute top-1.5 left-6 z-10 text-white opacity-0 duration-100 group-hover:opacity-100 group-hover:duration-1000">
        Hi.
      </span>
    </button>
  );
}

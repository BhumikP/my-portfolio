import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Bacancy() {
  const tasks = [
    {
      text: "Designed and implemented web applications along with the modern library React js and Node js.",
      keywords: ["Reactjs"],
    },
    {
      text: "Responsible for the logical part of frontend like API integration, Implementation of new features, and Bug fixes using React Js, JavaScript, and CSS5.",
      keywords: ["Next.js/React", "AWS", "Vercel"],
    },
    {
      text: "Designing and implementing scalable web services, applications, and APIs.",
      keywords: [],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer{" "}
            <span className="text-AAsecondary">@ Bacancy Technology</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            July 2021 - Present
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

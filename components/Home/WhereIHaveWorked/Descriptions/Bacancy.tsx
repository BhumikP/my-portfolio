import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Bacancy() {
  const tasks = [
    {
      text: "Developing and maintaining efficient and scalable web applications using Reactjs and Nextjs for our organization",
      keywords: ["Reactjs"],
    },
    {
      text: "Developed Financial, E-Commerce, and Insurance applications",
      keywords: [""],
    },
    {
      text: "Testing and debugging code to ensure high-quality deliverables Participating in agile development processes and utilizing industry- standard tools such as Git, JIRA, and Confluence for project management and collaboration",
      keywords: [],
    },
    {
      text: "Stayed up-to-date with latest React JS developments and shared knowledge with the team.",
      keywords: [""],
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
            July 2021 - Dec 2023
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

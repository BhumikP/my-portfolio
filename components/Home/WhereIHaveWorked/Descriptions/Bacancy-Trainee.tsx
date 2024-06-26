import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TraineeEngineer() {
  const tasks = [
    {
      text: "Basic HTML,CSS,JavaScript training",
      keywords: ["HTML", "CSS", "JavaScript"],
    },
    {
      text: "Learning Reactjs through Udemy course and building Demo projects Under surveillance of Seniors",
      keywords: ["Reactjs"],
    },
    {
      text: "Responsible for the logical part of frontend like API integration, Implementation of new features, and Bug fixes using React Js, JavaScript, and CSS5.",
      keywords: ["Next.js/React", "AWS", "Vercel"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer Trainee{" "}
            <span className="text-AAsecondary">@ Bacancy Technology</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Dec 2021 - June 2021
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

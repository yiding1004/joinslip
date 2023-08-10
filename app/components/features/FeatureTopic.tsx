"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface FeatureTopicProps {
  icon: ReactNode;
  iconClassName: string;
  title: string;
  description: string;
}

const FeatureTopic: React.FC<FeatureTopicProps> = ({
  icon,
  iconClassName,
  title,
  description,
}) => {
  return (
    <div className="md:w-1/2 flex flex-col mx-auto justify-center items-center rounded-lg px-3 py-5 sm:p-5 space-y-5 w-full">
      <div className="flex flex-col gap-5">
        <div className="-ml-5 flex justify-center items-center space-x-2">
          <div className={twMerge(`h-12 w-12`, iconClassName)}>{icon}</div>
          <div className="font-bold md:text-4xl text-2xl text-white">
            {title}
          </div>
        </div>
        <div className="text-lg md:text-2xl text-center max-w-[600px] text-white">
          {description}
        </div>
      </div>
    </div>
  );
};

export default FeatureTopic;

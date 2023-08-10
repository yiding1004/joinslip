"use client";

import { BoltIcon } from '@heroicons/react/24/outline';
import { AdjustmentsVerticalIcon } from '@heroicons/react/24/outline';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import { CircleStackIcon } from '@heroicons/react/24/outline';
import FeatureAnimation from "./FeatureAnimation";
import FeatureTopic from "./FeatureTopic";

const featuresBoxes = [
  {
    icon: <BoltIcon />,
    iconClassName: "text-yellow-300",
    title: "Rapid Set Up",
    description: "Create a roster with a few clicks",
    imgName: "interaction1.gif",
  },
  {
    icon: <AdjustmentsVerticalIcon />,
    iconClassName: "text-green-400",
    title: "Get Everyone On Board",
    description:
      "With one link, your members can sign up, update information, and ask questions. All in one place.",
    imgName: "interaction2.gif",
  },
  {
    icon: <ArrowsRightLeftIcon />,
    iconClassName: "text-red-400",
    title: "Member Interaction",
    description: "Align with members through chat and tags.",
    imgName: "interaction3.gif",
  },
  {
    icon: <CircleStackIcon />,
    iconClassName: "text-yellow-300",
    title: "Data Management",
    description:
      "Search, sort, update and export membership data from a comprehensive dashboard.",
    imgName: "interaction4.gif",
  },
];

const Features = () => {
  return (
    <section className="bg-primary-dark w-full p-3 md:p-8 mx-auto">
      <div className="py-10 md:px-10 flex flex-col justify-center max-w-[1600px] mx-auto">
        <div className="flex flex-col mx-auto w-full space-y-40">
          {featuresBoxes.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <FeatureTopic
                icon={feature.icon}
                iconClassName={feature.iconClassName}
                title={feature.title}
                description={feature.description}
              ></FeatureTopic>
              <FeatureAnimation imgName={feature.imgName}></FeatureAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

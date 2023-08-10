"use client";

import Image from "next/image";

interface FeatureAnimationProps {
  imgName: string;
}

const FeatureAnimation: React.FC<FeatureAnimationProps> = ({ imgName }) => {
  return (
    <div className="relative p-3 w-full md:max-w-[50%] mx-auto rounded-lg bg-green-600 shadow-lg transform hover:scale-[102%] transition duration-750">
      <Image
        width="0"
        height="0"
        sizes="100vw"
        className="w-full max-w-[736px] max-h-[514px]"
        alt="Animation"
        src={`/images/${imgName}`}
      />
    </div>
  );
};

export default FeatureAnimation;

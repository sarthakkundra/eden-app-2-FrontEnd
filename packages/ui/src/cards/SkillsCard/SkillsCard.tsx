// eslint-disable-next-line camelcase
import { Maybe, SkillType_Member } from "@graphql/eden/generated";
import React, { useEffect, useState } from "react";
import { Badge, Card } from "ui";

export interface SkillsCardProps {
  // eslint-disable-next-line camelcase
  skills?: Maybe<SkillType_Member>[];
  shadow?: boolean;
  closeButton?: boolean;
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onSelect?: (index: number) => void;
}
export const SkillsCard: React.FC<SkillsCardProps> = ({
  skills,
  shadow,
  closeButton,
  className = "p-0",
  onSelect,
}) => {
  const [selectedSkillIndex, setSelectedSkillIndex] = useState<number>(0);
  // const selectedSkill = skills?.[selectedSkillIndex];

  useEffect(() => {
    if (onSelect) {
      onSelect(selectedSkillIndex);
    }
  }, [selectedSkillIndex]);

  const handleOnClick = (index: number) => {
    setSelectedSkillIndex(index);
  };

  // if (skills) console.log("skills", skills);

  const getRandomColor = () => {
    const colors = [
      "120, 238, 203, 0.5",
      "255, 146, 205, 0.4",
      "255, 242, 104, 0.5",
      "155, 103, 255, 0.44",
      "136, 169, 255, 0.5",
      "83, 212, 240, 0.4",
      "168, 253, 82, 0.4",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Card shadow={shadow} className={`${className}`}>
      <ul className="flex flex-wrap items-center justify-start">
        {/* eslint-disable-next-line camelcase */}
        {skills?.map((skill: Maybe<SkillType_Member>, index: number) => (
          <li key={index} className="mb-1" onClick={() => handleOnClick(index)}>
            <Badge
              colorRGB={getRandomColor()}
              text={skill?.skillInfo?.name || "nothing"}
              closeButton={closeButton}
              onClose={() => handleOnClick(index)}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};

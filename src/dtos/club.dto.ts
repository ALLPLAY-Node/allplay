import { Age, Level } from "@prisma/client";

export interface clubRequest {
  clubName: string;
  sportType: string;
  city: string;
  district: string;
  ageGroup: Age;
  imageURL: string[];
  maxMembers: number;
  activityFrequency: string;
  level: Level;
  description: string;
  joinRequirement: string;
  contact: string;
  hompageUrl: string;
}

export const clubDtos = (data: clubRequest) => {
  return {
    clubName: data.clubName,
    sportType: data.sportType,
    city: data.city,
    district: data.district,
    ageGroup: data.ageGroup,
    imageURL: data.imageURL,
    maxMembers: data.maxMembers,
    activityFrequency: data.activityFrequency,
    level: data.level,
    description: data.description,
    joinRequirement: data.joinRequirement,
    contact: data.contact,
    hompageUrl: data.hompageUrl,
  };
};

import {
  addClub,
  findRegionByCityAndDistrict,
  findSportByName,
} from "../repositories/club.repository.js";
import { Age, Level } from "@prisma/client";

interface clubRequest {
  clubName: string;
  sportType: string;
  city: string;
  district: string;
  ageGroup: Age;
  imageURL?: string[];
  maxMembers: number;
  activityFrequency: string;
  level: Level;
  description: string;
  joinRequirement: string;
  contact: string;
  hompageUrl?: string;
}

export const clubAdd = async (clubData: clubRequest, userId: number) => {
  const region = await findRegionByCityAndDistrict(
    clubData.city,
    clubData.district,
  );
  if (!region) {
    throw new Error("Region not found");
  }
  const sport = await findSportByName(clubData.sportType);
  if (!sport) {
    throw new Error("Sport type not found");
  }
  const club = await addClub(clubData, userId, region.id, sport.id);
  return club;
};

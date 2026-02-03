import * as userRepo from "../repositories/user.repository.js";
import { updateUserBodyDTO } from "../dtos/user.dto.js";
import { IdInvalidError, FacilityNotFoundError } from "../errors.js";

export const getProfile = async (userId: number) => {
  const user = await userRepo.findUserWithRegion(userId);
  if (!user) throw new Error("User not found"); // 목록에 없으면 일반 에러 사용
  return user;
};

export const updateProfile = async (userId: number, body: any) => {
  const user = await userRepo.findUserWithRegion(userId);
  if (!user) throw new Error("User not found");

  const updateData = updateUserBodyDTO(body);
  const updatedUser = await userRepo.updateUserRaw(userId, updateData);
  return updatedUser;
};

export const getClubs = async (userId: number, isLeader: boolean) => {
  return await userRepo.findUserClubs(userId, isLeader);
};

export const getReviews = async (userId: number, reviewId?: number) => {
  const reviews = await userRepo.findUserReviews(userId, reviewId);
  if (reviewId && reviews.length === 0) {
    throw new Error("Review not found");
  }
  return reviews;
};

export const editReview = async (reviewId: number, text: string) => {
  return await userRepo.updateReviewRaw(reviewId, text);
};

export const quitService = async (userId: number) => {
  const user = await userRepo.findUserWithRegion(userId);
  if (!user) throw new Error("User not found");

  return await userRepo.deactivateUserRaw(userId);
};

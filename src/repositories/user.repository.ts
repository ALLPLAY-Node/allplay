import { prisma } from "../db.config.js";

// 유저 조회 (Users 테이블)
export const findUserWithRegion = async (userId: number) => {
  return await prisma.users.findUnique({
    where: { id: userId },
    include: { region: true },
  });
};

// 유저 수정 (Users 테이블)
export const updateUserRaw = async (userId: number, data: any) => {
  return await prisma.users.update({
    where: { id: userId },
    data: data,
    include: { region: true },
  });
};

// 동호회 조회
export const findUserClubs = async (userId: number, isLeader?: boolean) => {
  return await prisma.userClubs.findMany({
    where: {
      user_id: userId,
      ...(isLeader !== undefined && { is_leader: isLeader }),
    },
    include: {
      club: { include: { region: true } },
    },
  });
};

// 리뷰 조회 (Review -> SportFacilities)
export const findUserReviews = async (userId: number, reviewId?: number) => {
  return await prisma.review.findMany({
    where: {
      user_id: userId,
      ...(reviewId && { id: reviewId }),
    },
    include: { facility: true },
  });
};

// 리뷰 수정
export const updateReviewRaw = async (reviewId: number, text: string) => {
  return await prisma.review.update({
    where: { id: reviewId },
    data: { text: text },
  });
};

// 회원 탈퇴
export const deactivateUserRaw = async (userId: number) => {
  return await prisma.users.update({
    where: { id: userId },
    data: {
      status: false,
      inactive_date: new Date(),
    },
  });
};

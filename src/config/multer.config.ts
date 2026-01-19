// src/config/multer.config.ts

import multer from 'multer';
import path from 'path';
import fs from 'fs';

// 각 도메인별 폴더 경로 설정
const UPLOAD_PATHS = {
  clubs: 'uploads/clubs',
  facilities: 'uploads/facilities',
  reviews: 'uploads/reviews',
  users: 'uploads/users',
};

// 폴더가 없으면 자동 생성하는 함수
const ensureUploadDir = (dir: string) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// 모든 업로드 폴더 생성
Object.values(UPLOAD_PATHS).forEach(ensureUploadDir);

// 공통 파일 필터 (이미지만 허용)
const imageFileFilter = (req: any, file: Express.Multer.File, cb: any) => {
  const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true); // 파일 허용
  } else {
    cb(new Error('이미지 파일만 업로드 가능합니다.'), false); // 파일 거부
  }
};

// 공통 크기 제한 설정
const fileSizeLimits = {
  fileSize: 5 * 1024 * 1024, // 5MB = 5 * 1024KB * 1024bytes
};

// === 클럽 사진 업로드 설정 ===
const clubStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_PATHS.clubs); // 저장 위치: uploads/clubs
  },
  filename: (req, file, cb) => {
    // 파일명 생성: timestamp-랜덤숫자.확장자
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname); // 원본 파일의 확장자 추출
    cb(null, `club-${uniqueSuffix}${ext}`); // 예: club-1737276543-123456789.jpg
  },
});

export const uploadClub = multer({
  storage: clubStorage,
  fileFilter: imageFileFilter,
  limits: fileSizeLimits,
});

// === 시설 사진 업로드 설정 ===
const facilityStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_PATHS.facilities); // 저장 위치: uploads/facilities
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `facility-${uniqueSuffix}${ext}`); // 예: facility-1737276543-123456789.jpg
  },
});

export const uploadFacility = multer({
  storage: facilityStorage,
  fileFilter: imageFileFilter,
  limits: fileSizeLimits,
});

// === 리뷰 사진 업로드 설정 ===
const reviewStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_PATHS.reviews); // 저장 위치: uploads/reviews
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `review-${uniqueSuffix}${ext}`); // 예: review-1737276543-123456789.jpg
  },
});

export const uploadReview = multer({
  storage: reviewStorage,
  fileFilter: imageFileFilter,
  limits: fileSizeLimits,
});

// === 유저 프로필 사진 업로드 설정 ===
const userStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_PATHS.users); // 저장 위치: uploads/users
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `user-${uniqueSuffix}${ext}`); // 예: user-1737276543-123456789.jpg
  },
});

export const uploadUser = multer({
  storage: userStorage,
  fileFilter: imageFileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024, // 프로필 사진은 2MB로 제한
  },
});
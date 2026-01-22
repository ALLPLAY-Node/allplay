import { StatusCodes } from "http-status-codes";

export class RegionNotFoundError extends Error {
  errorCode = "CLUB_REGION_NOT_FOUND";
  statusCode = StatusCodes.NOT_FOUND;
  reason: string;
  data: any;
  constructor(reason: string, data: any) {
    super("Region not found");
    this.reason = reason;
    this.data = data;
  }
}

export class SportNotFoundError extends Error {
  errorCode = "CLUB_SPORT_NOT_FOUND";
  statusCode = StatusCodes.NOT_FOUND;
  reason: string;
  data: any;
  constructor(reason: string, data: any) {
    super("Sport not found");
    this.reason = reason;
    this.data = data;
  }
}

export class ClubNotFoundError extends Error {
  errorCode = "CLUB_NOT_FOUND";
  statusCode = StatusCodes.NOT_FOUND;
  reason: string;
  data: any;
  constructor(reason: string, data: any) {
    super("Club not found");
    this.reason = reason;
    this.data = data;
  }
}

export class ClubLeaderNotFoundError extends Error {
  errorCode = "CLUB_LEADER_NOT_FOUND";
  statusCode = StatusCodes.NOT_FOUND;
  reason: string;
  data: any;
  constructor(reason: string, data: any) {
    super("Club leader not found");
    this.reason = reason;
    this.data = data;
  }
}

export class ClubNotAuthorizedError extends Error {
  errorCode = "CLUB_NOT_AUTHORIZED";
  statusCode = StatusCodes.FORBIDDEN;
  reason: string;
  data: any;
  constructor(reason: string, data: any) {
    super("Club not authorized");
    this.reason = reason;
    this.data = data;
  }
}

export class AlreadyAppliedError extends Error {
  errorCode = "CLUB_ALREADY_APPLIED";
  statusCode = StatusCodes.CONFLICT;
  reason: string;
  data: any;
  constructor(reason: string, data: any) {
    super("Already applied");
    this.reason = reason;
    this.data = data;
  }
}

export class JoinRequestNotFoundError extends Error {
  errorCode = "CLUB_JOIN_REQUEST_NOT_FOUND";
  statusCode = StatusCodes.NOT_FOUND;
  reason: string;
  data: any;
  constructor(reason: string, data: any) {
    super("Join request not found");
    this.reason = reason;
    this.data = data;
  }
}

export class AlreadyClubLeaderError extends Error {
  errorCode = "CLUB_ALREADY_LEADER";
  statusCode = StatusCodes.CONFLICT;
  reason: string;
  data: any;
  constructor(reason: string, data: any) {
    super("Already club leader");
    this.reason = reason;
    this.data = data;
  }
}

export class NotClubUserError extends Error {
  errorCode = "CLUB_NOT_USER";
  statusCode = StatusCodes.BAD_REQUEST;
  reason: string;
  data: any;
  constructor(reason: string, data: any) {
    super("Not club user");
    this.reason = reason;
    this.data = data;
  }
}

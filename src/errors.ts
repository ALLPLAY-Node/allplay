export class RegionNotFoundError extends Error {
  errorCode = "CLUB_REGION_NOT_FOUND";
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
  reason: string;
  data: any;
  constructor(reason: string, data: any) {
    super("Sport not found");
    this.reason = reason;
    this.data = data;
  }
}

export class ClubLeaderNotFoundError extends Error {
  errorCode = "CLUB_LEADER_NOT_FOUND";
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
  reason: string;
  data: any;
  constructor(reason: string, data: any) {
    super("Already applied");
    this.reason = reason;
    this.data = data;
  }
}

export class joinRequestNotFoundError extends Error {
  errorCode = "CLUB_JOIN_REQUEST_NOT_FOUND";
  reason: string;
  data: any;
  constructor(reason: string, data: any) {
    super("Join request not found");
    this.reason = reason;
    this.data = data;
  }
}

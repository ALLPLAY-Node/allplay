export class RegionNotFoundError extends Error {
    errorCode = "CLUB_REGION_NOT_FOUND";
    reason;
    data;
    constructor(reason, data) {
        super("Region not found");
        this.reason = reason;
        this.data = data;
    }
}
export class SportNotFoundError extends Error {
    errorCode = "CLUB_SPORT_NOT_FOUND";
    reason;
    data;
    constructor(reason, data) {
        super("Sport not found");
        this.reason = reason;
        this.data = data;
    }
}
export class ClubLeaderNotFoundError extends Error {
    errorCode = "CLUB_LEADER_NOT_FOUND";
    reason;
    data;
    constructor(reason, data) {
        super("Club leader not found");
        this.reason = reason;
        this.data = data;
    }
}
export class ClubNotAuthorizedError extends Error {
    errorCode = "CLUB_NOT_AUTHORIZED";
    reason;
    data;
    constructor(reason, data) {
        super("Club not authorized");
        this.reason = reason;
        this.data = data;
    }
}
export class AlreadyAppliedError extends Error {
    errorCode = "CLUB_ALREADY_APPLIED";
    reason;
    data;
    constructor(reason, data) {
        super("Already applied");
        this.reason = reason;
        this.data = data;
    }
}
//# sourceMappingURL=errors.js.map
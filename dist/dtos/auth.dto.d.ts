export interface GoogleAuthDto {
    email: string;
    name: string;
    googleId: string;
    profilePhotoUrl?: string;
}
export interface TokenResponseDto {
    accessToken: string;
    refreshToken: string;
    isNewUser: boolean;
}
//# sourceMappingURL=auth.dto.d.ts.map
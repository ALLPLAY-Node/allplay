type Operation = "PUT" | "GET";
export declare class PresignedURLService {
    private s3Client;
    private isNonEmptyString;
    getPresignedURL: (domain: string, // 폴더 이름
    operation: Operation, fileName: string, fileType: string) => Promise<string>;
}
export {};
//# sourceMappingURL=presignedURL.service.d.ts.map
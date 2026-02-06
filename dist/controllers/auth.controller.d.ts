import type { Request, Response } from "express";
export declare class AuthController {
    private authService;
    googleCallback: (req: Request, res: Response) => Promise<void>;
    refresh: (req: Request, res: Response) => Promise<void>;
    logout: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=auth.controller.d.ts.map
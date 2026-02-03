interface ErrorResponse {
  errorCode?: string;
  reason?: string | null;
  data?: any;
}

declare global {
  namespace Express {
    interface User {
      id: string | number | bigint;
    }

    interface Response {
      success: (message: string, success: any) => Response;
      error: (error: ErrorResponse) => Response;
    }

    interface Request {
      user: User;
    }
  }
}

export {};

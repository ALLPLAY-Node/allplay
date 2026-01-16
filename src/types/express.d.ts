interface ErrorResponse {
  errorCode?: string;
  reason?: string | null;
  data?: any;
}

declare global {
  namespace Express {
    interface Response {
      success: (success: any) => Response;
      error: (error: ErrorResponse) => Response;
    }
  }
}

export {};

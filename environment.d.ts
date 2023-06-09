declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      DB_USER: string;
      DB_PASSWORD: string;
      DB_HOST: string;
      DB_PORT: string;
      DB_SCHEMA: string;
      DATABASE_URL: string;
      APP_PORT: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};

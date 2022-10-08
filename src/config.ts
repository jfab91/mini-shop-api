import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  database: { host: process.env.DB_HOST },
}));

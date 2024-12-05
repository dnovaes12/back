import * as dotenv from 'dotenv'
dotenv.config()

export default {
  secretToken: process.env.JWT_SECRET || '55be645bbd881c643aa7ad20be45377c',
  secretRefreshToken: process.env.JWT_REFRESH_SECRET || 'b36239f6b88341e51418583109f73cc5',
  expiresInToken: process.env.JWT_EXPIRES_IN || '55m',
  expiresInRefreshToken: process.env.JWT_REFRESH_EXPIRES_IN || '30d',
  expiresRefreshTokenDays: 30,
}

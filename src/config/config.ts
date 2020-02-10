export const config = {
  "prod": {
    "host":       process.env.POSTGRESS_HOST,
    "username":   process.env.POSTGRESS_USERNAME,
    "password":   process.env.POSTGRESS_PASSWORD,
    "database":   process.env.DATABASE_SCHEMA,
    "dialect":    process.env.DATABASE_DIALECT,
    "aws_region": 'us-east-1',
    "aws_media_bucket": process.env.AWS_BUCKET,
    "aws_profile": process.env.AWS_PROFILE
  },
  "jwt": {
    "secret": "my_secret_function"
  }
};

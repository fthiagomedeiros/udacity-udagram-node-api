import AWS = require('aws-sdk');
import {config} from './config/config';

const env_variables = config.prod;

//Configure AWS
const credentials = new AWS.SharedIniFileCredentials({profile: env_variables.aws_profile});
AWS.config.credentials = credentials;

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: env_variables.aws_region,
  params: {Bucket: env_variables.aws_media_bucket}
});


/* getGetSignedUrl generates an aws signed url to retreive an item
 * @Params
 *    key: string - the filename to be put into the s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getGetSignedUrl( key: string ): string{
    //5 minutes expiration credentials
    const signedUrlExpireSeconds = 300;
    const params = {
        Bucket: env_variables.aws_media_bucket,
        Key: key,
        Expires: signedUrlExpireSeconds
    };

    return s3.getSignedUrl('getObject', params);
}

/* getPutSignedUrl generates an aws signed url to put an item
 * @Params
 *    key: string - the filename to be retreived from s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getPutSignedUrl( key: string ){

    const signedUrlExpireSeconds = 60 * 5

    return s3.getSignedUrl('putObject', {
        Bucket: env_variables.aws_media_bucket,
        Key: key,
        Expires: signedUrlExpireSeconds
    });
}

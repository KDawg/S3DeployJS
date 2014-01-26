#S3DeployJS
##NodeJS Tool Deploying Files to AWS S3

Example showing a NodeJS command-line tool pushing files up to an S3 bucket. Many of the files in this repo are in support showing a simple, typical webapp and the types of static resources best served from S3.

Automating deployments are always a good thing. Reducing friction makes a process more fun, and shiping code to users is a blast!

##Setup
* git clone the repo of course
* npm install
* create a AwsConfig.json beside the S3Deploy.js file that looks like this replaced with your AWS credentials:

```
{
  "accessKeyId": "XXXXXXX",
  "secretAccessKey": "YYYYYYYY",
  "region": "us-east-1"
}
```
* Edit S3Deploy.js changing line #2 with your own bucket name


```
var BUCKET_NAME = 's3deploy.example';
```

##Command-line Params
Run this from a Terminal command line, naturally.

```
node S3Deploy.js [param]
```

* audio folderName
* code
* createBucket
* css
* index
* list

##Further Info
* Read the accompanying [technical article](http://blog.katworksgames.com/2014/01/25/nodejs_aws_deploy)
* Reach out to me on Twitter [@KenTabor](https://twitter.com/KenTabor)
* Source code repo on GitHub [S3DeployJS](https://github.com/KDawg/S3DeployJS)

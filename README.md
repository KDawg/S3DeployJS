#S3DeployJS
##NodeJS Tool Deploying Files to AWS S3

This project is all about showing a NodeJS command-line tool pushing files up to an S3 bucket.

Why does it look like there's a website here? It's a simple one I made serving as sample files showing at least what this file upload tool can do deploying a typical website to Amazon S3. These are the types of static resources best served from their service.

Automating deployments is always a good thing. Reducing friction makes a process more fun, people are more willing to do it, and shiping working code to users is a blast!

##Accompanying Article
For lots more details and analysis read the accompanying [technical article](http://blog.katworksgames.com/2014/01/26/nodejs-deploying-files-to-aws-s3/)

##Setup
* "git clone" the repo of course
* "npm install" to bring down dependency packages
* edit the AwsConfig.json file replacing these placeholder values with your proper [AWS credentials](http://blogs.aws.amazon.com/security/post/Tx1R9KDN9ISZ0HF/Where-s-my-secret-access-key):

```
{
  "accessKeyId": "XXXXXXX",
  "secretAccessKey": "YYYYYYYY",
  "region": "us-east-1"
}
```
* Edit S3Deploy.js changing line #2 with your own bucket name avoiding conflict with any existing ones

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
* images
* index
* list

##Learn
Have a good look at S3Deploy.js because it's where all the good stuff goes on. Reading that code gives lots of
concrete examples all of you can well use.

##Further Info
* Read the accompanying [technical article](http://blog.katworksgames.com/2014/01/26/nodejs-deploying-files-to-aws-s3/)
* Reach out to me on Twitter [@KenTabor](https://twitter.com/KenTabor)
* [AWS SDK](http://aws.amazon.com/sdkfornodejs/) for JavaScript NodeJS
* Source code repo on GitHub [S3DeployJS](https://github.com/KDawg/S3DeployJS)

Please share this repo and the accompanying article with those who will benefit.

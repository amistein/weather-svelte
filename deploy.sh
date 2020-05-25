rollup -c
aws s3 cp --recursive public s3://$1 --acl public-read
aws s3 cp s3://$1/index.html s3://$1/index3.html --acl public-read

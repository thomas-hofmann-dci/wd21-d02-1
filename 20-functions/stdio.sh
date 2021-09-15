#!/usr/bin/env bash

node 10-log-even-numbers.js 

# redirect STDOUT
node 10-log-even-numbers.js > stdout.txt 
cat stdout.txt 

node 50-numbers-between-min-and-max-check-parameters.js 

# redirect STDOUT
node 50-numbers-between-min-and-max-check-parameters.js > stderr.txt
cat stderr.txt

# redirect STDOUT "1"
node 50-numbers-between-min-and-max-check-parameters.js 1> stderr.txt
cat stderr.txt 

# redirect STDERR "2"
node 50-numbers-between-min-and-max-check-parameters.js 2> stderr.txt
cat stderr.txt

#!/bin/bash

name=$(basename $(pwd))
version=$(cat manifest.json | awk '/"version"/ { gsub(/[",]/,""); print $3 }')
zip -r $name-$version.zip . -x@chrome-release.exclude
git tag -a v$version -m "version $version"

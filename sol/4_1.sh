#!/bin/bash
#Any Type File Extractor 
filename=$1

case $filename in
	*.tar) tar -xvf $1;;
    *.tar.gz) tar -xzvf $1 ;;
	*.tgz) tar -xzvf $1 ;;
	*.tar.bz2) tar -xvjf $1;;
	*.tbz) tar -xvjf $1;;
	*.bz2) bzip -d $1;;
	*.zip) unzip $1 ;;
    *.gz) gzip -dr $1 ;;
 	*.war) unzip -c $1;;
	
    *) echo "Invalid input" ;;
esac
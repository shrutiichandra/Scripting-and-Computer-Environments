#!/bin/bash
#does not match $ and &
pass=$1

grep '^\(.*[0-9].*[@#$%-+=].*\{8,\}\)$' <<< $pass 1>\dev\null  && echo "GOOD"
grep '^\(.*[0-9].*[@#$%-+=].*\{8,\}\)$' <<< $pass 2>\dev\null || echo "BAD"


exit 0

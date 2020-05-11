sed -n 's/\(.*\),\(.*\),\(.*\),\(.*\),[[:digit:]][[:digit:]]\/[[:digit:]][[:digit:]]\/[[:digit:]][[:digit:]]8[[:digit:]],\(.*\)/\1/p' address-book.csv |wc -l

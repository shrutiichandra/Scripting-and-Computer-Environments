#!/bin/bash
#run using . ./4_4.sh

folder=$1

if [ -d $1 ]
	then
		cd $folder
	else 
		echo "Invalid input"
		exit 0
fi

function myprog() {
  if [ -d $1 ]
  then	
  	return
  else
  	mkdir $1
  fi
}

let exte=$# #no of command line inputs
extensions=("$@")

a=($(ls)) #has all files
num=${#a[@]}
keyword=all

if [ "${extensions[1]}" = "$keyword" ]
then
	for((j=0;j<$num;j++))
	do
		file=${a[$j]}
		extension="${file##*.}"
		case $file in
			*.$extension) myprog $extension; 
									mv $file $extension 
									;;
			
			esac 
		
	done
else

	for((j=0;j<$num;j++))
	do
		for((i=1;i<$exte;i++))
		do
		#echo ${extensions[$i]}
		 	case ${a[$j]} in
				*.${extensions[$i]})  myprog ${extensions[$i]}; 
									mv ${a[$j]} ${extensions[$i]} 
									;;
			
			esac 
		done
	done 
fi
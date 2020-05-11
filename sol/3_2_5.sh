awk  ' BEGIN{
	
	max=-1;
	min=999;
	total=0;
	i=0;
}
{ 	sum=0;
	if(NR==1){
		i=1;
	}
	else{
	sum+=$3+$4+$5; 
	total+=sum; 

	if (sum >= 95 && sum<=100) {print "A" } 
	else if (sum >= 90 && sum<95) {print "A-" } 
	else if (sum >= 85 && sum<90) {print "B"} 
	else if (sum >= 80 && sum<85) {print "B-" } 
	else if (sum >= 75 && sum<80) {print "C" } 
	else if (sum >= 70 && sum<75) {print "C-"}
	else if (sum >= 60 && sum<70) {print "D"}
	else {print "F"}

	if (sum>max) 
	{ 
		max=sum; 
		namemax=$1
	} 

	if (min>bsum){
		min=sum
		namemin=$1
	}
	}
}
END{
	st=NR-1; 
	avg=total/st; 
	print "Number of students: "st
	print "Average marks: "avg
	print "Minimum marks obtained by: "namemin
	print "Maximum marks obtained by: "namemax
}'  marks.txt


awk 'BEGIN{
	max=-1;
	total=0;
	i=0;

}
{ 	sum=0;
	sum+=$3+$4+$5; 
	total+=sum; 
	if(sum>max) 
	{ 
		max=sum; 
		name=$1
	} 
	marks[NR]=sum;
	names[NR]=$1	
}
END{
	st=NR-1; 
	avg=total/st; 
	print "Student(s) who scored above average: "
	for (x=2;x<=NR;x++){
		if ( marks[x] >= avg )
			print names[x] 
	}
	print "Student(s) who scored highest marks: "
	
	print name	


	
}'  marks.txt
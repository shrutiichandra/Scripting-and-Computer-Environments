awk ' BEGIN{ print "[" >> "imdb-top-250.json"}
{	line=$0
	n=length($0)-9
	cols=NF
	for (i=2;i<=NF-2;i++){
		file[i]=$i" "
	}
	if(NR==1){ 
		print "\t{" >> "imdb-top-250.json"
	}
	else{ 
		print ",\n\t{" >> "imdb-top-250.json"
	}

	print "\t\"ID\" : \"" substr($1,1,3) "\"," >> "imdb-top-250.json"
	printf("\t\"Name\" : \"") >> "imdb-top-250.json"
	
	for (i=2;i<=NF-2;i++){
		printf("%s",file[i]) >> "imdb-top-250.json"
	}
	
	printf("\",\n") >> "imdb-top-250.json"
	print "\t\" Year \" : \"" $(NF-1) "\"," >> "imdb-top-250.json"
	printf("\t\" Rating \" : \" %s",$NF) >> "imdb-top-250.json"
	printf("\"\n\t}")   >> "imdb-top-250.json"
}
END { printf("\n]") >> "imdb-top-250.json"}
' imdb-top-250.txt 
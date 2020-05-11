import sys
import os
import linecache
import re
from string import maketrans

def lcs(file1, file2, lines1, lines2): 
    L = [[0 for x in xrange(lines2+1)] for x in xrange(lines1+1)] 
    for i in xrange(lines1+1): 
        for j in xrange(lines2+1): 
            if i == 0 or j == 0: 
                L[i][j] = 0
            elif file1[i-1] == file2[j-1]: 
                L[i][j] = L[i-1][j-1] + 1
            else: 
                L[i][j] = max(L[i-1][j], L[i][j-1])
    index = L[lines1][lines2] 
  
    lcs=[""]*(index+1) 
    lcs[index]="" 
    i=lines1 
    j=lines2
    while i > 0 and j > 0: 
        if file1[i-1] == file2[j-1]: 
            lcs[index-1] = file1[i-1] 
            i-=1
            j-=1
            index-=1
        elif L[i-1][j] > L[i][j-1]: 
            i-=1
        else: 
            j-=1
    return lcs


def file_len(fname):
    with open(fname) as f:
        for i, l in enumerate(f):
            pass
    return i + 1

while (1):
    a=raw_input(os.getcwd()+">>")
    total_len=len(a)
    if(a[:2]=='cd'):
        path=a[3:total_len]
        if(os.path.isdir(path)):
            os.chdir(a[3:total_len])
        else:
            print "Incorrect Path"
        

    elif(a=='ls'):
        for filename in os.listdir("."):
            print filename
        pass

    elif(a=='pwd'):
        print os.getcwd()
        pass

    elif(a[:5]=='touch'):
        arr=a[6:total_len].split()
        arg_len=len(arr)
        try:
            for i in range(arg_len):
                if os.path.isfile(arr[i]):
                    #change last modified time to curr time
                    os.utime(arr[i],None)
                else:
                    new_file=open(arr[i],"w+")
                    new_file.close()
        except:
            print "oopss!"

    elif(a[:4]=='grep'):
        arr=a[5:total_len].split()
       # print arr
        try:
            read=open(arr[1])
            for line in read:
                if re.search(arr[0],line):
                    print line
                if line==None:
                    print "Sorryy!"
            read.close()
        except:
            print "Oops!"

    elif(a[:4]=='head'):
        filename=a[5:total_len]
        try:
            read=open(filename)
            n=file_len(filename)
            for i in range(10):
                line=read.next().strip()
                print line
            read.close()
        except:
            print "OOps!!"

    elif(a[:4]=='tail'):
        filename=a[5:total_len]
        try:
            read=open(filename)
            n=file_len(filename)
            print n
            for i in range(n-10+1,n+1):
                 line=linecache.getline(filename,i)
                 print line
            read.close()
        except:
            print "OOps!!"

    elif(a[:2]=='tr'):
        after_tr=a[3:total_len].split()
        from_text=after_tr[0]
        to_text=after_tr[1]
        table=maketrans(from_text,to_text)
        print "q to exit"
        while (1):
            text=raw_input()
            if text=="q":
                break
            print text.translate(table)
        pass

    elif(a[:3]=='sed'):
        after_sed=a[4:total_len].split()
        try:
            if os.path.isfile(after_sed[1]):
                user_in=re.search('s/(.*)/(.*)/',after_sed[0])
                if(user_in.group(0)==None):
                    print "Incorrect command"
                else:
                    to_find=user_in.group(1)
                    replace_with=user_in.group(2)
                    filename=open(after_sed[1],"r")
                    for line in filename:
                        print(re.sub(to_find, replace_with,line,1))  
                        
                    
        except:
            print "oopss!"

    elif(a[:4]=='diff'):
        after_diff=a[5:total_len].split()
        try:
            if os.path.isfile(after_diff[0]) and os.path.isfile(after_diff[1]):
                file_one=open(after_diff[0],"r")
                file_two=open(after_diff[1],"r")
                data_one=file_one.readlines()
                data_two=file_two.readlines()
                m=len(data_one)
                n=len(data_two)
                set_common=set(lcs(data_one,data_two,m,n))
                set_lines_b=set(data_two)
                set_lines_a=set(data_one)
                print set_lines_b.difference(set_common)
                print "----------"
                print set_lines_a.difference(set_common)
                file_one.close()
                file_two.close()
                
        except:
            pass
    
    elif(a=='exit'):
        sys.exit(0)

    else:
        print "Command Not Found"
    

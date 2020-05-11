function  setAllegiances(url4,fatheri,h){
  for (var i = 0, l = url4.length; i < l; i++){
                 $.getJSON(url4[i], function(data){
                     console.log("this is in for"+data.name);
                     var para = document.createElement("p");
                     var text="ALLEGIANCES | "+data.name;
                     var node = document.createTextNode(text);
                     para.appendChild(node);
                     var element = document.getElementById(fatheri);
                     element.appendChild(para);
                   });
    }
}
function search(){
   $("#para").empty();

   console.log("inside search");
   var field=document.getElementById('searchbox');
   var query=field.value;
   console.log("you entered char:"+query);
   if(query==""){
     var element = document.getElementById("para");
     var para1 = document.createElement("p");
     para1.setAttribute("id","0"+"1");
     var node1 = document.createTextNode("YOU HAVE NOT ENTERED ANYTHING");
     para1.appendChild(node1);
     element.appendChild(para1);
   }//end if
   else{
     $.getJSON("https://www.anapioficeandfire.com/api/characters?name="+query, function(data){
       console.log("len: "+Object.keys(data).length);
       if(Object.keys(data).length==0){
         var element = document.getElementById("para");
         var para1 = document.createElement("p");
         para1.setAttribute("id","0"+"2");
         var node1 = document.createTextNode("SORRY THIS CHARACTER DOES NOT EXIST HERE");
         para1.appendChild(node1);
         element.appendChild(para1);
       }//end if

       else{
         for (var i = 0, l = Object.keys(data).length; i < l; i++) {
           console.log("i: "+i+" "+data[i].name);
           var element = document.getElementById("para");
           var index="p"+i;
           console.log("index: "+index);
           var para1 = document.createElement("p");
           var para2 = document.createElement("p");
           var para3 = document.createElement("p");
           var para4 = document.createElement("p");
           var para5 = document.createElement("p");
           var para6 = document.createElement("p");
           var para7 = document.createElement("p");
           var para8 = document.createElement("p");

           para1.setAttribute("id",index+"1");
           para2.setAttribute("id",index+"2");
           para3.setAttribute("id",index+"3");
           para4.setAttribute("id",index+"4");
           para5.setAttribute("id",index+"5");
           para6.setAttribute("id",index+"6");
           para7.setAttribute("id",index+"7");
           para8.setAttribute("id",index+"8");

           var url="url | "+data[i].url;
           var char_name=setText("NAME",data[i].name);
           var gender=setText("GENDER",data[i].gender);
           var cul=setText("CULTURE",data[i].culture);
           var born=setText("BORN",data[i].born)
           var died= setText("DIED",data[i].died);
           var played=setText("PLAYED BY",data[i].playedBy);
           var tvs=setText("TV SERIES",data[i].tvSeries);

           var url1=data[i].spouse;
           var url2=data[i].father;
           var url3=data[i].mother;
           var url4=data[i].allegiances;
           console.log(url,url2,url3,url4);

           var fatheri="p"+i+"8";
           var sp="SPOUSE"; var f="FATHER"; var m="MOTHER";
           var h="HOUSE";
           setSpouse(url1,fatheri,sp);
           setSpouse(url2,fatheri,f);
           setSpouse(url3,fatheri,m);
           setAllegiances(url4,fatheri,h);
           var node1 = document.createTextNode(url);
           para1.appendChild(node1);
           var node2 = document.createTextNode(char_name);
           para2.appendChild(node2);
           var node3 = document.createTextNode(gender);
           para3.appendChild(node3);
           var node4 = document.createTextNode(cul);
           para4.appendChild(node4);
           var node5 = document.createTextNode(born);
           para5.appendChild(node5);
           var node6 = document.createTextNode(died);
           para6.appendChild(node6);
           var node7 = document.createTextNode(played);
           para7.appendChild(node7);
           var node8 = document.createTextNode(tvs);
           para8.appendChild(node8);

           var hr = document.createElement("p");
           var separator="--------------------------------------------------------------------------";
           var hr_node = document.createTextNode(separator);
           hr.appendChild(hr_node);
           element.appendChild(para1);
           element.appendChild(para2);
           element.appendChild(para3);
           element.appendChild(para4);
           element.appendChild(para5);
           element.appendChild(para6);
           element.appendChild(para7);
           element.appendChild(para8);

           element.appendChild(hr);

           }//end for
         }//end else
   });//end JSONGET
 }//end else
   $("#searchbox").val('');
}//end Search
function setText(s,val){
  console.log(s);
  var printthis;
  if(val=="") printthis=s+" | "+"N.A";
  else printthis=s+" | "+val;
  return printthis;
}//end SetText
function setSpouse(url,parent,relation){
   console.log("in set spouse: "+parent+" "+url);

  $.getJSON(url, function(data){
    var para = document.createElement("p");
    console.log("here: "+url+" "+data.name);
    var text=relation+" | "+data.name;
    var node = document.createTextNode(text);
    para.appendChild(node);
    var element = document.getElementById(parent);
    element.appendChild(para);
   });//end GetJson
}//end of setSpouse
function searchHouse(){
  $("#para").empty();
  console.log("inside search house");
  var field=document.getElementById('searchbox');

  var query=field.value;
  console.log("you entered house: "+query);
  if(query==""){
    var element = document.getElementById("para");
    var para1 = document.createElement("p");
    para1.setAttribute("id","0"+"1");
    var node1 = document.createTextNode("YOU HAVE NOT ENTERED ANYTHING");
    para1.appendChild(node1);
    element.appendChild(para1);
  }//end if
  else{
    $.getJSON("https://www.anapioficeandfire.com/api/houses?name="+query, function(data){
        console.log("https://www.anapioficeandfire.com/api/houses?name="+query);
        if(data.length==0){
           var element = document.getElementById("para");
           var para1 = document.createElement("p");
           para1.setAttribute("id","1"+"1");
           var node1 = document.createTextNode("SORRY THIS HOUSE DOES NOT EXIST HERE");
           para1.appendChild(node1);
           element.appendChild(para1);
        }//end if
        else{
             console.log("house name: "+data[0].name);
             var element = document.getElementById("para");
             var para1 = document.createElement("p");
             var para2 = document.createElement("p");
             var para3 = document.createElement("p");
             var para4 = document.createElement("p");
             var para5 = document.createElement("p");
             var para6 = document.createElement("p");
             var para7 = document.createElement("p");
             var index="p0";
             para1.setAttribute("id",index+"1");
             para2.setAttribute("id",index+"2");
             para3.setAttribute("id",index+"3");
             para4.setAttribute("id",index+"4");
             para5.setAttribute("id",index+"5");
             para6.setAttribute("id",index+"6");
             para7.setAttribute("id",index+"7");

             var url="url | "+data[0].url;
             var house_name="NAME | "+data[0].name;
             var region="REGION | "+data[0].region;
             var coa="COAT OF ARMS | "+data[0].coatOfArms;
             var words="WORDS | "+data[0].words;
             var titles="TITLES | "+data[0].titles;
             var seat="SEATS | "+data[0].seats;

             var url1=data[0].currentLord;
             var url2=data[0].heir;
             var url3=data[0].overlord;
             var url4=data[0].founder;
             var url5=data[0].swornMembers;
             var fatheri="p0"+"7";
             var he="HEIR"; var cl="CURRENT LORD"; var ol="OVERLORD";
             var f="FOUNDER"; var sm="SWORN MEMBERS";
             setSpouse(url1,fatheri,cl);
             setSpouse(url2,fatheri,he);
             setSpouse(url3,fatheri,ol);
             setSpouse(url4,fatheri,f);
             console.log("before: url5: "+url5);
             for(var i in url5){
               console.log(i);
                $.getJSON(url5[i], function(data){
                  console.log("i: "+i);
                    var element = document.getElementById("para");
                    var para = document.createElement("p");
                    var text="SWORN MEMBERS | "+data.name;
                    var node1 = document.createTextNode(text);
                    para.appendChild(node1);
                    element.appendChild(para);


              });//endof getjson
            }//endof for
             var node1 = document.createTextNode(url);
             para1.appendChild(node1);
             var node2 = document.createTextNode(house_name);
             para2.appendChild(node2);
             var node3 = document.createTextNode(region);
             para3.appendChild(node3);
             var node4 = document.createTextNode(coa);
             para4.appendChild(node4);
             var node5 = document.createTextNode(words);
             para5.appendChild(node5);
             var node6 = document.createTextNode(titles);
             para6.appendChild(node6);
             var node7 = document.createTextNode(seat);
             para7.appendChild(node7);

             element.appendChild(para1);
             element.appendChild(para2);
             element.appendChild(para3);
             element.appendChild(para4);
             element.appendChild(para5);
             element.appendChild(para6);
             element.appendChild(para7);
        }//end Else

   });//end GetJson
 }//end else
 $("#searchbox").val('');
}//end of SearchHouse
function searchRandomChar(){
  $("#para").empty();
  var temp;
  var l;
  $.ajax({
    url:'https://www.anapioficeandfire.com/api/characters/'
    }).done(function (data, textStatus, xhr) {
      console.log("Link header char: "+xhr.getResponseHeader('Link'));
      temp=xhr.getResponseHeader('Link');
      var index=temp.indexOf("\"first\",");
      var sub=temp.substr((index+10));
      temp=sub.substring(0,sub.length - 10);
      console.log("final URL: "+temp);

      $.getJSON(temp, function(data){
            l = data.length-1;
             var url_final=data[l].url;
             var index_final_slash=url_final.lastIndexOf("/");
             var num_of_char=url_final.substring(index_final_slash+1,url_final.length);
             console.log(num_of_char);
             var random_char_num=Math.floor(Math.random()*num_of_char)+1;
             console.log(random_char_num);
             var url_random_char="https://www.anapioficeandfire.com/api/characters/"+random_char_num;
             searchRandomCharURL(url_random_char,random_char_num);
        });//end of json

  });//end of ajax
 $("#searchbox").val('');
}//end of searchRandomChar
function searchRandomHouse(){
  $("#para").empty();
  var temp;
  var l;
  $.ajax({
    url:'https://www.anapioficeandfire.com/api/houses/'
  }).done(function (data, textStatus, xhr) {
      console.log("Link Header House: "+xhr.getResponseHeader('Link'));
      temp=xhr.getResponseHeader('Link');
      var index=temp.indexOf("\"first\",");
      var sub=temp.substr((index+10));

      temp=sub.substring(0,sub.length - 10);
      console.log("final URL: "+temp);
      $.getJSON(temp, function(data){
             l = data.length-1;
             console.log("L: "+data[l].url);
             var url_final=data[l].url;
             var index_final_slash=url_final.lastIndexOf("/");
             var num_of_house=url_final.substring(index_final_slash+1,url_final.length);
             console.log(num_of_house);
             var random_house_num=Math.floor(Math.random()*num_of_house)+1;
             console.log(random_house_num);
             var url_random_house="https://www.anapioficeandfire.com/api/houses/"+random_house_num;
             searchRandomHouseURL(url_random_house,random_house_num);
        });//end of json

  });//end of ajax
 $("#searchbox").val('');
}//end of searchRandomHouse
function searchRandomCharURL(url_recvd,random_id){
    console.log("in url recv: "+url_recvd);
    $.getJSON(url_recvd, function(data){
             console.log(data);
             var element = document.getElementById("para");
             var index=random_id;
             var para1 = document.createElement("p");
             var para2 = document.createElement("p");
             var para3 = document.createElement("p");
             var para4 = document.createElement("p");
             var para5 = document.createElement("p");
             var para6 = document.createElement("p");
             var para7 = document.createElement("p");
             var para8 = document.createElement("p");

             para1.setAttribute("id",index+"1");
             para2.setAttribute("id",index+"2");
             para3.setAttribute("id",index+"3");
             para4.setAttribute("id",index+"4");
             para5.setAttribute("id",index+"5");
             para6.setAttribute("id",index+"6");
             para7.setAttribute("id",index+"7");
             para8.setAttribute("id",index+"8");
             var url="url | "+data.url;
             var char_name="NAME | "+data.name;
             var gender="GENDER | "+data.gender;
             var cul=setText("CULTURE",data.culture);
             var born=setText("BORN",data.born)
             var died= setText("DIED",data.died);
             var played=setText("PLAYED BY",data.playedBy);
             var tvs=setText("TV SERIES",data.tvSeries);
             var url1=data.spouse;
             var url2=data.father;
             var url3=data.mother;
             var url4=data.allegiances;
             console.log(url,url2,url3,url4);

             var fatheri=index+"8";
             var sp="SPOUSE"; var f="FATHER"; var m="MOTHER";
             var h="HOUSE";
             setSpouse(url1,fatheri,sp);
             setSpouse(url2,fatheri,f);
             setSpouse(url3,fatheri,m);

             for (var i = 0, l = url4.length; i < l; i++){
               $.getJSON(url4[i], function(data){
                   console.log("this is in for"+data.name);
                   var para = document.createElement("p");
                   var text="ALLEGIANCES | "+data.name;
                   var node = document.createTextNode(text);
                   para.appendChild(node);
                   var element = document.getElementById(fatheri);
                   element.appendChild(para);
                 });
             }

             var node1 = document.createTextNode(url);
             para1.appendChild(node1);
             var node2 = document.createTextNode(char_name);
             para2.appendChild(node2);
             var node3 = document.createTextNode(gender);
             para3.appendChild(node3);
             var node4 = document.createTextNode(cul);
             para4.appendChild(node4);
             var node5 = document.createTextNode(born);
             para5.appendChild(node5);
             var node6 = document.createTextNode(died);
             para6.appendChild(node6);
             var node7 = document.createTextNode(played);
             para7.appendChild(node7);
             var node8 = document.createTextNode(tvs);
             para8.appendChild(node8);

             var hr = document.createElement("p");
             var separator="--------------------------------------------------------------------------";
             var hr_node = document.createTextNode(separator);
             hr.appendChild(hr_node);
             element.appendChild(para1);
             element.appendChild(para2);
             element.appendChild(para3);
             element.appendChild(para4);
             element.appendChild(para5);
             element.appendChild(para6);
             element.appendChild(para7);
             element.appendChild(para8);

             element.appendChild(hr);


   });//end of getJson
}//end of searchRandomCharURL
function searchRandomHouseURL(url_recvd,random_id){
      console.log("inside search house url random");

      $.getJSON(url_recvd, function(data){
              console.log(url_recvd);
              console.log(data.name);

             var element = document.getElementById("para");
             var para1 = document.createElement("p");
             var para2 = document.createElement("p");
             var para3 = document.createElement("p");
             var para4 = document.createElement("p");
             var para5 = document.createElement("p");
             var para6 = document.createElement("p");
             var para7 = document.createElement("p");
             var index="p0";
             para1.setAttribute("id",index+"1");
             para2.setAttribute("id",index+"2");
             para3.setAttribute("id",index+"3");
             para4.setAttribute("id",index+"4");
             para5.setAttribute("id",index+"5");
             para6.setAttribute("id",index+"6");
             para7.setAttribute("id",index+"7");

             var url="url | "+data.url;
             var house_name="NAME | "+data.name;
             var region="REGION | "+data.region;
             var coa="COAT OF ARMS | "+data.coatOfArms;
             var words="WORDS | "+data.words;
             var titles="TITLES | "+data.titles;
             var seat="SEATS | "+data.seats;

             var url1=data.currentLord;
             var url2=data.heir;
             var url3=data.overlord;
             var url4=data.founder;
             var url5=data.swornMembers
             console.log(url,url2,url3,url4,url5);

             var fatheri="p0"+"7";
             var he="HEIR"; var cl="CURRENT LORD"; var ol="OVERLORD";
             var f="FOUNDER"; var sm="SWORN MEMBERS";
             setSpouse(url1,fatheri,cl);
             setSpouse(url2,fatheri,he);
             setSpouse(url3,fatheri,ol);
             setSpouse(url4,fatheri,f);

          for(var i in url5){
            console.log(i);
             $.getJSON(url5[i], function(data){
               console.log("i: "+i);
                 var element = document.getElementById("para");
                 var para = document.createElement("p");
                 var text="SWORN MEMBERS | "+data.name;
                 var node1 = document.createTextNode(text);
                 para.appendChild(node1);
                 element.appendChild(para);


           });//endof getjson
         }//endof for

             var node1 = document.createTextNode(url);
             para1.appendChild(node1);
             var node2 = document.createTextNode(house_name);
             para2.appendChild(node2);
             var node3 = document.createTextNode(region);
             para3.appendChild(node3);
             var node4 = document.createTextNode(coa);
             para4.appendChild(node4);
             var node5 = document.createTextNode(words);
             para5.appendChild(node5);
             var node6 = document.createTextNode(titles);
             para6.appendChild(node6);
             var node7 = document.createTextNode(seat);
             para7.appendChild(node7);

             element.appendChild(para1);
             element.appendChild(para2);
             element.appendChild(para3);
             element.appendChild(para4);
             element.appendChild(para5);
             element.appendChild(para6);
             element.appendChild(para7);


   });//end of getJson
}//end of searchRandomHouseURL
function searchCharByHouse(){
  $("#para").empty();
  console.log("inside search char by house");
  var field=document.getElementById('searchbox');

  var query=field.value;
  console.log("you entered house: "+query);

  if(query==""){
    var element = document.getElementById("para");
    var para1 = document.createElement("p");
    para1.setAttribute("id","0"+"1");
    var node1 = document.createTextNode("YOU HAVE NOT ENTERED ANYTHING");
    para1.appendChild(node1);
    element.appendChild(para1);
  }//end if
  else {
  $.getJSON("https://www.anapioficeandfire.com/api/houses?name="+query, function(data){
        console.log("https://www.anapioficeandfire.com/api/houses?name="+query);
        if(data.length==0){
           var element = document.getElementById("para");
           var para1 = document.createElement("p");
           para1.setAttribute("id","1"+"1");
           var node1 = document.createTextNode("SORRY THIS HOUSE DOES NOT EXIST HERE");
           para1.appendChild(node1);
           element.appendChild(para1);
        }//end if
        else{
          var url5=data[0].swornMembers;
          console.log("swornMembers: "+url5);
          var num_chars_in_house=(url5.length);

          if(num_chars_in_house==0){
            var element = document.getElementById("para");
            var para1 = document.createElement("p");
            para1.setAttribute("id","2"+"1");
            var node1 = document.createTextNode("THIS HOUSE HAS NO CHARACTERS");
            para1.appendChild(node1);
            element.appendChild(para1);
          } //end if
          else{
          var random_arr_index=Math.floor(Math.random()*num_chars_in_house)+0;
        //  console.log()
          $.getJSON(url5[random_arr_index], function(data){
                console.log("this is in for random name: "+data.name);
                var element = document.getElementById("para");
                var index="_"+data.name+"_";
                console.log(index);
                var para1 = document.createElement("p");
                var para2 = document.createElement("p");
                var para3 = document.createElement("p");
                var para4 = document.createElement("p");
                var para5 = document.createElement("p");
                var para6 = document.createElement("p");
                var para7 = document.createElement("p");
                var para8 = document.createElement("p");

                para1.setAttribute("id",index+"1");
                para2.setAttribute("id",index+"2");
                para3.setAttribute("id",index+"3");
                para4.setAttribute("id",index+"4");
                para5.setAttribute("id",index+"5");
                para6.setAttribute("id",index+"6");
                para7.setAttribute("id",index+"7");
                para8.setAttribute("id",index+"8");
                var url="url | "+data.url;
                var char_name="NAME | "+data.name;
                var gender="GENDER | "+data.gender;
                var cul=setText("CULTURE",data.culture);
                var born=setText("BORN",data.born)
                var died= setText("DIED",data.died);
                var played=setText("PLAYED BY",data.playedBy);
                var tvs=setText("TV SERIES",data.tvSeries);
                var url1=data.spouse;
                var url2=data.father;
                var url3=data.mother;
                var url4=data.allegiances;
                console.log("urls: "+url1,url2,url3);

                var fatheri=index+"8";
                console.log("fatheri: "+fatheri);
                var sp="SPOUSE"; var f="FATHER"; var m="MOTHER";

                setSpouse(url1,fatheri,sp);
                setSpouse(url2,fatheri,f);
                setSpouse(url3,fatheri,m);
                for (var i in url4){
                  console.log(i+" "+url4[i]);
                  $.getJSON(url4[i], function(data){
                      console.log("this is in for: "+data.name);
                      var paragraph = document.createElement("p");
                      var text="ALLEGIANCES | "+data.name;
                      var node = document.createTextNode(text);
                      paragraph.appendChild(node);
                      var element = document.getElementById(fatheri);
                      element.appendChild(paragraph);
                    });
                }

                var node1 = document.createTextNode(url);
                para1.appendChild(node1);
                var node2 = document.createTextNode(char_name);
                para2.appendChild(node2);
                var node3 = document.createTextNode(gender);
                para3.appendChild(node3);
                var node4 = document.createTextNode(cul);
                para4.appendChild(node4);
                var node5 = document.createTextNode(born);
                para5.appendChild(node5);
                var node6 = document.createTextNode(died);
                para6.appendChild(node6);
                var node7 = document.createTextNode(played);
                para7.appendChild(node7);
                var node8 = document.createTextNode(tvs);
                para8.appendChild(node8);

                var hr = document.createElement("p");
                var separator="--------------------------------------------------------------------------";
                var hr_node = document.createTextNode(separator);
                hr.appendChild(hr_node);
                element.appendChild(para1);
                element.appendChild(para2);
                element.appendChild(para3);
                element.appendChild(para4);
                element.appendChild(para5);
                element.appendChild(para6);
                element.appendChild(para7);
                element.appendChild(para8);

                element.appendChild(hr);


              });
            }//end else
         }//end else

      });//end GetJson
    }//end else
 $("#searchbox").val('');
}//end SearchCharByHouse

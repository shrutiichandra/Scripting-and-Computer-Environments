var curr;
var num;
function makeRequest(){
    $.getJSON("https://xkcd.com/info.0.json", function(data){
        let title=data.title;

        num=data.num;
        curr=data.num;
        let source=data.img;
        let alt=data.alt;
        setTitle(title);
        showImage(source,alt);
        setFootNote(num,source);
    });
}
function setTitle(text){
    var heading=document.getElementById('title_comic');
    document.title="xkcd:"+text;
    heading.innerHTML=text;
}
function showImage(source,alt){
    var tag=document.getElementById('comic_page');
    tag.src=source;
    tag.title=alt;
}
function prev(){
    var index=num-1;
    $.getJSON("https://xkcd.com/"+index+"/info.0.json", function(data){
        let title=data.title;
        num=data.num;
        let source=data.img;
        let alt=data.alt;
        setTitle(title);
        showImage(source,alt);
        setFootNote(index,source);
    });
}
function next(){
    var index=num+1;

    $.getJSON("https://xkcd.com/"+index+"/info.0.json", function(data){
        let title=data.title;
        num=data.num;
        let source=data.img;
        let alt=data.alt;
        setTitle(title);
        showImage(source,alt);
        setFootNote(index,source);
    });
}
function first(){
    var index=1;
    $.getJSON("https://xkcd.com/"+index+"/info.0.json", function(data){
        let title=data.title;
        num=data.num;
        let source=data.img;
        let alt=data.alt;
        setTitle(title);
        showImage(source,alt);
        setFootNote(index,source);
    });
}
function last(){
    $.getJSON("https://xkcd.com/"+curr+"/info.0.json", function(data){
      let title=data.title;
      num=data.num;
      let source=data.img;
      let alt=data.alt;
      setTitle(title);
      showImage(source,alt);
      setFootNote(curr,source);
    });
}

function random(){
   var index=Math.floor((Math.random() * curr) + 1);
    $.getJSON("https://xkcd.com/"+index+"/info.0.json", function(data){
      let title=data.title;
      let alt=data.alt;
      num=data.num;
      let source=data.img;
      setTitle(title);
      showImage(source,alt);
      setFootNote(index,source);
    });
}

function setFootNote(desc,src){
    var footer=document.getElementById('permalink');
    footer.innerHTML="Permanent link to this comic: https://xkcd.com/"+desc+"/";
    var image_desc=document.getElementById('imgdes');
    image_desc.innerHTML=" Image URL (for hotlinking/embedding):"+src;
}

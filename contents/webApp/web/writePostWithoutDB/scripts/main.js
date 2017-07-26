<!-- behaviours for blog form -->

// numbering the posting at the start
var items = 4;
function addPost() {

    // define the objects
    div=document.getElementById("scrollposting");
    postName=document.getElementById("name");
    postTitle=document.getElementById("posttitle");
    postContent=document.getElementById("postcontent");

    // contain a new item to post
    items++;
    newitem  = '<p id="ptitle' + items +'"><b>【' + items +  '】 ' + postTitle.value + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<cite>✐' +  postName.value + '</cite></b></p></b></p>';
    newitem += '<p id="pcontent">' + postContent.value + '</p>';
    newitem += div.innerHTML;

    // display the new posting
    div.innerHTML = newitem;
}



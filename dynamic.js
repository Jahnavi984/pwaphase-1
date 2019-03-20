function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  prof(data.basics);
  car(data.career);
  ed(data.education);
  sk(data.skills);
})

var main=document.querySelector(".main");
var profile=document.querySelector(".profile");
var details=document.querySelector(".details");
function prof(pr){
    var image=document.createElement('img');
    image.src=pr.img;
    profile.appendChild(image);
    main.appendChild(profile);
    var hr=document.createElement('hr');
    profile.append(hr);
    var head=document.createElement('h2');
    head.textContent=pr.name;
    profile.appendChild(head);
    var mi=document.createElement('h3');
    mi.textContent=pr.mailid;
    profile.appendChild(mi);
    var ps=document.createElement('h3');
    ps.textContent=pr.profession;
    profile.appendChild(ps);

}
function car(ca)
{
  var rh=document.createElement("h2");
  rh.textContent="RESUME";
  details.append(rh);
  var p=document.createElement("h2");
  p.textContent="CAREER OBJECTIVE";
  details.append(p);
  var hr=document.createElement('hr');
  details.append(hr);
  var data=document.createElement('da');
  data.textContent=ca.data;
  details.append(data);
}
function ed(e){
  var r=document.createElement("h2");
  r.textContent="EDUCATION DETAILS";
  details.append(r);
  var hr=document.createElement('hr');
  details.append(hr);
  var table=document.createElement('table');
  let row='';
  row+="<tr>"+"<th>"+"sno"+"</th>"+"<th>"+"degree"+"</th>"+"<th>"+"institute"+"</th>"+"<th>"+"percent"+"</th>"+"</tr>";
  for(i in e){
  row+="<tr>"+"<td>"+e[i].sno+"</td>"+"<td>"+e[i].degree+"</td>"+"<td>"+e[i].institute+"</td>"+"<td>"+e[i].percent+"</td>"+"</tr>";
}
table.innerHTML=row;
details.appendChild(table);
main.appendChild(details);
}
function sk(s){
  var rs=document.createElement("h2");
  rs.textContent="SKILLS";
  details.append(rs);
  var hr=document.createElement('hr');
  details.append(hr);
  var ul=document.createElement('ul');
  details.appendChild(ul);
  for(i in s){
    var li=document.createElement("li");
    li.textContent=s[i].ps;
      ul.append(li);
  }
}

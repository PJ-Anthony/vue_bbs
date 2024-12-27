function postJson(url,data,callback){
	let xhr=new XMLHttpRequest();
	xhr.open("POST",url);
	xhr.setRequestHeader("Content-Type","application/json");
	xhr.withCredentials=true;
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			let d=JSON.parse(xhr.responseText);
			callback(d);
		}
	}
	if(data==null){
		xhr.send(null);
	}
	else{
		xhr.send(JSON.stringify(data));
	}
}

function getJson(url,data,callback){
	let xhr=new XMLHttpRequest();
	xhr.withCredentials=true;
	if(data==null){
		
	}
	else{
		url=url+"?";
		for(k in data){
			url=url+k+"="+data[k]+"&";
		}
	}
	xhr.open("get",url);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			let result=JSON.parse(xhr.responseText);
			callback(result);
		}
	}
	xhr.send(null);
}
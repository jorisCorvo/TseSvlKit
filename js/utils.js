function simpleHttpRequest(url, success, failure) {
  var request = makeHttpObject();
  request.open("GET", url, true);
  request.send(null);
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if (request.status == 200){
	  
        success(request.responseText);
		return request.responseText;
      else if (failure)
        failure(request.status, request.statusText);
    }
  };
}
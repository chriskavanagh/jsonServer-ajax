var jsonData = document.getElementById("json-data");


var xreq = new XMLHttpRequest();
xreq.open('GET', 'http://localhost:3000/employees');
xreq.onload = () => {
	var data = JSON.parse(xreq.responseText);
	renderHTML(data);
	console.log(data);
};

xreq.send();

function renderHTML(d) {
	htmlString = '';
	for (let i=0; i < d.length; i++) {
		htmlString += `<li>${[i+1]}) <b>Name:</b> ${d[i].first_name} ${d[i].last_name},
					   <b>Email:</b> ${d[i].email}</li>`
	}
	jsonData.insertAdjacentHTML('beforeend', htmlString);
}
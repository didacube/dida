$(document).ready(function() {
	$("[name='requestToggle']").bootstrapSwitch();
	$("#admin-sign-in-button").click(function() {
		var username = $("input[name='username']").val();
		var password = $("input[name='password']").val();
		Parse.User.logIn(username, password, function(res) {
			console.log()
			$("#admin-contents").addClass("verified");
			$("#admin-sign-in-form").hide();
		});
		return false;
	});
});

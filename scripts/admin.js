var currentUser = Parse.User.current();
if (currentUser) {
	$(document).ready(function() {
		$("#admin-sign-in-form").hide();
		$("#admin-dashboard").addClass("verified");
	});
}

$(document).ready(function() {
	$("[name='requestToggle']").bootstrapSwitch();
	$("#admin-sign-in-button").click(function() {
		var username = $("input[name='username']").val();
		var password = $("input[name='password']").val();
		Parse.User.logIn(username, password, function(res) {
			$("#admin-dashboard").addClass("verified");
			$("#admin-sign-in-form").hide();
		});
		return false;
	});
});

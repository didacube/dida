// Get the status of the request form.
var Display = Parse.Object.extend("Display");
var query = new Parse.Query(Display);
var requestForm = null;
query.equalTo("element", "request");
query.find({
	success: function(res) {
		requestForm = res[0];
		$(document).ready(function() {
			$("[name='requestToggle']").bootstrapSwitch({
				state: requestForm.get("shown")
			});
		});
	},
	error: function(error) {
		$(document).ready(function() {
			// TODO: Implement alerts.
		});
	}
});

// Get the current user, if there is one.
var currentUser = Parse.User.current();
if (currentUser) {
	$(document).ready(function() {
		$("#admin-sign-in-form").hide();
		$("#admin-dashboard").addClass("verified");
		$("#admin-name").text(currentUser.get("username"));
	});
}

$(document).ready(function() {
	// Sign in the user.
	$("#admin-sign-in-button").click(function() {
		var username = $("input[name='username']").val();
		var password = $("input[name='password']").val();
		Parse.User.logIn(username, password).then(function(res) {
			$("#admin-dashboard").addClass("verified");
			$("#admin-sign-in-form").clearForm();
			$("#admin-sign-in-form").hide();
			$("#admin-name").text(username);
		}, function(error) {
			// TODO: Implement alerts.
		});
		return false;
	});

	// Sign out the user.
	$("#admin-sign-out-button").click(function() {
		Parse.User.logOut();
		$("#admin-dashboard").removeClass("verified");
		$("#admin-sign-in-form").show();
	});

	// Toggle the request form to show or hide.
	$('input[name="requestToggle"]').on('switchChange.bootstrapSwitch', function(event, state) {
		requestForm.set("shown", state);
		requestForm.save().then(function(res) {
			// TODO: Implement alerts.
		}, function(error) {
			// TODO: Implement alerts.
		});
	});
});

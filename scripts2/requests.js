var Display = Parse.Object.extend("Display");
var query = new Parse.Query(Display);
query.equalTo("element", "request");
query.find({
	success: function(res) {
		if (res[0].get('shown') == true) {
			$(document).ready(function() {
				$("iframe").show();
			});
		} else {
			$("#message").show();
		}
	},
	error: function(error) {
		$(document).ready(function() {
			$("#message").show();
		});
	}
});

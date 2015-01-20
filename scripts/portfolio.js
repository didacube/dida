var Member = Parse.Object.extend("Member");
var MemberCollection = Parse.Collection.extend({
	model: Member
});
var members = new MemberCollection();
var member;
members.fetch({
	success: function(res) {
		res.each(function(person) {
			member = person;
			$(document).ready(function() {
				loadProfiles(member.attributes.position);
			});
		});
	},
	error: function(error) {}
})

var Design = Parse.Object.extend("Design");
var DesignCollection = Parse.Collection.extend({
	model: Design
});
var designs = new DesignCollection();
var design;

var loadProfiles = function(position) {
	$("#" + position).append("<div class='profile'><img src='" + member.attributes.image._url + "'><div class='info'><strong>" + member.attributes.full_name + "</strong><div class='description'>" + member.attributes.description + "</div></div></div>");
};

var loadDesigns = function(type) {
	$("#" + type).append();
};

$(document).ready(function() {

	// Default view for portfolio are designs
	$("#team").hide();
	$("#designs").show();
	$("#work-item").addClass("active");

	// Upon clicking on the submenu items switch displays
	$(".main li").click(function(event) {
		$(".main li.active").removeClass("active");
		$(event.currentTarget).addClass("active");
		$(event.target).addClass("active");
		if ($(event.currentTarget).data("target") == "team") {
			$("#team").show();
			$("#designs").hide();
		} else {
			$("#designs").show();
			$("#team").hide();
		}
	});

	// Setup masonry for the design gallery
	$(".designs").masonry();
	$(".designs").imagesLoaded(function() {
		$(".designs").masonry({
			itemSelector: ".design",
			isFitWidth: true
		});
	});
});

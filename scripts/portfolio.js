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
	$(".designs").masonry();
	$(".designs").imagesLoaded(function() {
		$(".designs").masonry({
			itemSelector: ".design",
			isFitWidth: true
		});
	});
});

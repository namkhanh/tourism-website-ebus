$(document).ready(function() {
	$("#slideshow").css("overflow", "hidden");
	$("ul#slides").cycle({
		fx: 'fade,fadeZoom,zoom,toss',
		pause: 1,
		prev: '#prev',
		next: '#next'
	});
	$("#slideshow").hover(function() {
		$("ul#nav").fadeIn();
		},
			function() {
		$("ul#nav").fadeOut();
		});
});


function openDes(id){
	$("span#"+id).css("display", "inline");
}

function closeDes(id){
	$("span#"+id).css("display", "none");
}	

$(function() {
	var now = new Date();
	$( "#datepicker" ).datepicker({
		altField: "#alternative",
		dateFormat:"dd MM, yy",
		altFormat: "DD",
		minDate: now,
	});
});

$(function() {
	var yearNow = new Date().getFullYear();
	var limitYear = yearNow -10;
	var year100 = yearNow - 80;
	var yearRange = year100 + ':' + limitYear;
	$( "#dob" ).datepicker({
		dateFormat:"dd-mm-yy",
		changeMonth: true,
		changeYear: true,
		yearRange: yearRange,
	});
});

$(function(){
	$("#starify").children().not(":input").hide();
	// Create stars from :radio boxes
	$("#starify").stars({
		cancelShow: false,
	});
});


function confirmDeleteTour(t_name,tourID) {
	var answer = confirm("Are you sure to delete " + t_name + " ?");
	if (answer) {
		 $.post("delete_tour.php", { tourID: tourID},
			        function(result){
			            // if the result is 1
			            if(result == 1){  
			            location.href = document.URL;
			            } else {
			            alert("Not sucessfully delete " + t_name);
			            }
			        }); 
	}
}

function confirmDeleteEbook(name,ebookID) {
	var answer = confirm("Are you sure to delete " + name + " ?");
	if (answer) {
		 $.post("delete_ebook.php", { ebookID: ebookID},
			        function(result){
			            // if the result is 1
			            if(result == 1){  
			            location.href = document.URL;
			            } else {
			            alert("Not sucessfully delete " + name);
			            }
			        }); 
	}
}

function confirmDeleteBooking(t_name,bookingID,date) {
	var nowDate = new Date();
	var departDate = new Date(date);
	
	//var departDate = dateFormat(d2,"dd-mm-yyyy");
	//var nowDate = dateFormat(d,"dd-mm-yyyy");
	//Set 1 day in milliseconds
	var one_day=1000*60*60*24

	//Calculate difference btw the two dates, and convert to days
	if (Math.ceil((departDate.getTime()-nowDate.getTime())/(one_day)) < 10) {
		var answer = confirm("Your Departure Date is less than 10 days. You can only get 50% return. Are you sure to cancel Booking ID "+ bookingID+ " (" + t_name + ") ?");
	} else {
		var answer = confirm("Are you sure to cancel Booking ID "+ bookingID+ " (" + t_name + ")  ?");
	}
	
	if (answer) {
		 $.post("delete_booking.php", { bookingID: bookingID},
			        function(result){
			            // if the result is 1
			            if(result == 1){  
			            location.href = document.URL;
			            } else {
			            alert("Not sucessfully delete " + t_name);
			            }
			        }); 
	}
}

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

var dateFormat = function () {
	var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var	_ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d:    d,
				dd:   pad(d),
				ddd:  dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m:    m + 1,
				mm:   pad(m + 1),
				mmm:  dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   pad(H % 12 || 12),
				H:    H,
				HH:   pad(H),
				M:    M,
				MM:   pad(M),
				s:    s,
				ss:   pad(s),
				l:    pad(L, 3),
				L:    pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default":      "ddd mmm dd yyyy HH:MM:ss",
	shortDate:      "m/d/yy",
	mediumDate:     "mmm d, yyyy",
	longDate:       "mmmm d, yyyy",
	fullDate:       "dddd, mmmm d, yyyy",
	shortTime:      "h:MM TT",
	mediumTime:     "h:MM:ss TT",
	longTime:       "h:MM:ss TT Z",
	isoDate:        "yyyy-mm-dd",
	isoTime:        "HH:MM:ss",
	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};

(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
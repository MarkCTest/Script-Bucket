/* JAVASCRIPT
/* This script generates a date where ever myDayFunction is called on your webpage */
/* https://github.com/MarkCTest/Script-Bucket */
/* See this script in use at www.cyreath.co.uk */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function mydayfunction() {

var d = new Date()
var date = d.getDate()
var day = d.getDay()
var month = d.getMonth()
var year = d.getFullYear()

/* Append the correct date type */
if (date==1 || date==21 || date==31) {
date = date + "st"
}
else if (date==2 || date==22) {
date = date + "nd"
}
else if (date==3 || date==23) {
date = date + "rd"
}
else if (date > 3) {
date = date + "th"
}

/* Change the numeric date value to the name */
switch (day) {
case 0:
	day = "Sunday"
	break

case 1:
	day = "Monday"
	break

case 2:
	day = "Tuesday"
	break

case 3:
	day = "Wednesday"
	break

case 4:
	day = "Thursday"
	break

case 5:
	day = "Friday"
	break

case 6:
	day = "Saturday"
	break

}

/* Change the numeric month value to the name */
switch (month) {
case 0:
	month = "January "
	break

case 1:
	month = "February "
	break

case 2:
	month = "March "
	break

case 3:
	month = "April "
	break

case 4:
	month = "May "
	break

case 5:
	month = "June "
	break

case 6:
	month = "July "
	break

case 7:
	month = "August "
	break

case 8:
	month = "September "
	break

case 9:
	month = "October "
	break

case 10:
	month = "November "
	break

case 11:
	month = "December "
	break
}

/* Write everything out */
document.write("<div class='datetxt'>")
document.write(day + ", " + date + " " + month + " " + year)
document.write("</div>")

	}
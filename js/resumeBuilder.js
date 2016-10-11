var bio = {
    "name": "Katiki Sai Saraswathi",
    "role": "Web-Developer",
    "contacts": {
        "mobile": "8179474552",
        "email": "saisaru815@gmail.com",
        "github": "saisaraswathi",
        "twitter": "saisaru",
        "location": "Bangalore"
    },
    "welcomeMessage": "HELLO, Everyone",
    "skills": ["enthusiasm", "delivery", "smart"],
    "biopic": "images/fry.jpg"
};

var education = {
    "schools": [{
            "name": "SCET, JNTU",
            "location": "Kakinada, AP",
            "degree": "BTECH",
            "majors": ["CSE"],
            "dates": "2012-2016",
            "url": "www.swarnandhra.ac.in/"
        }, {
            "name": "SASI JUNIOR COLLEGE",
            "location": "Velivennu, AP",
            "degree": "Intermediate",
            "majors": ["MPC"],
            "dates": "2010-2012",
            "url": " sasi.edu.in/ "
        }

    ],
    "onlineCourses": [{
        "title": "Front-End Web Devlopment",
        "school": "UDACITY",
        "dates": "2016",
        "url": "www.udacity.com"
    }]
};

var work = {
    "jobs": [{
        "employer": "Infosys",
        "title": "System-engineer",
        "location": "bangalore",
        "dates": "2016",
        "description": "devlopment of websites "
    }]
};

var projects = {
    "projects": [{
        "title": "TIME AND ENERGY AWARE COMPUTATIONAL OFFLOADING IN HANDHELD DEVICES TO CO-PROCESSORS AND CLOUDS",
        "dates": "2015-2016",
        "description": "Our project is to develop an ANDRIOD APP which aims to shorten response time and reduce energy consumption at the same time with the help of an offloading framework name Ternary decision maker",
        "images": ["images/IMG_20160309_150754.jpg", "images/IMG_20160309_150827.jpg", "images/Screenshot_2016-03-09-13-47-41.jpeg"]
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole, formattedName);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedmessage = HTMLwelcomeMsg.replace("%data", bio.welcomeMessage);
    $("#topContacts, #footerContacts").prepend(formattedMobile, formattedemail, formattedtwitter, formattedgithub, formattedlocation);
    $("#header").append(formattedmessage);
    var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbiopic);
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < 3; i++) {
        var formattedskills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedskills);
    }
};


education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < 2; i++) {
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedlocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedDates, formattedlocation);
        if (education.schools[i].majors.length > 0) {
            for (var k = 0; k < education.schools[i].majors.length; k++) {
                var formattedmajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors[k]);
                $(".education-entry:last").append(formattedmajors);
            }
        }
        var formattedurl = HTMLschoolName.replace("%data%", education.schools[i].url);
        $(".education-entry:last").append(formattedurl);
    }
    $('.education-entry:last').append(HTMLonlineClasses);
    for (var j = 0; j < education.onlineCourses.length; j++) {
        var formattedtitles = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        var formattedschools = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        var formattedonlinedates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
        $('.education-entry:last').append(formattedtitles, formattedschools, formattedonlinedates);
        var formattedonlineurl = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
        $('.education-entry:last').append(formattedonlineurl);
    }
};


work.display = function() {
    for (var m = 0; m < work.jobs.length; m++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[m].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[m].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedlocations = HTMLworkLocation.replace("%data%", work.jobs[m].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[m].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[m].description);
        $(".work-entry:last").append(formattedlocations,formattedDates, formattedDescription);
    }
};


projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
        if (projects.projects[i].images.length > 0) {
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
$("#header").append(bio.display);
$("#main").append(work.display);
$("#main").append(projects.display);
$("#main").append(education.display);
$("#mapDiv").append(googleMap);

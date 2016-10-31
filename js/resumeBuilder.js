/*
This is empty on purpose! Your code to build the resume will go here.
 */

//Here are the bio data along with dispaly method
var bio = {
    "name": "Xiaolu Wang",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+86-187-9601-4396",
        "email": "gaoshu883@163.com",
        "github": "https://github.com/gaoshu883",
        "location": "Zhenjiang, Jiangsu"
    },
    "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur.",
    "skills": ["HTML", "CSS", "JavaScript", "PhotoShop", "Git"],
    "bioPic": "images/me.jpg"
};
bio.display = function() {
    //Display my name and role
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);
    //Display the contact information on the top
    $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    $('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
    $('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
    $('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
    //Display the contact information in the footer
    $('#footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    $('#footerContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
    $('#footerContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
    $('#footerContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
    //Display the bio picture and welcome message
    $('#header').append(HTMLbioPic.replace('%data%', bio.bioPic));
    $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
    //Display the skills
    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            $('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
        }
    }
};

//Here are the education data along with dispaly method
var education = {
    "schools": [{
        "name": "Jiangsu University",
        "location": "Zhenjiang, Jiangsu, China",
        "degree": "Masters",
        "majors": ["Materials Science and Engineering"],
        "dates": "2014-Future",
        "url": "http://www.ujs.edu.cn/site1/"
    }, {
        "name": "Jiangsu University",
        "location": "Zhenjiang, Jiangsu, China",
        "degree": "BA",
        "majors": ["Materials Science and Engineering"],
        "dates": "2010-2014",
        "url": "http://www.ujs.edu.cn/site1/"
    }],
    "onlineCourses": [{
        "title": "Intro to jQuery",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://cn.udacity.com/course/intro-to-jquery--ud245"
    }, {
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://cn.udacity.com/course/javascript-basics--ud804"
    }, {
        "title": "How to Use Git and GitHub",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://cn.udacity.com/course/how-to-use-git-and-github--ud775"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://cn.udacity.com/course/responsive-images--ud882"
    }, {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://cn.udacity.com/course/responsive-web-design-fundamentals--ud893"
    }]
};
education.display = function() {
    //Display the schools
    for (var i = 0; i < education.schools.length; i++) {
        $('#education').append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
        var formattedNameAndDegree = formattedSchoolName + formattedSchoolDegree;
        formattedNameAndDegree = formattedNameAndDegree.replace('#', education.schools[i].url);
        $('.education-entry:last').append(formattedNameAndDegree);
        $('.education-entry:last').append(HTMLschoolDates.replace('%data%', education.schools[i].dates));
        $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[i].location));
        for (var j = 0; j < education.schools[i].majors.length; j++) {
            $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', education.schools[i].majors[j]));
        }
    }
    //Display the online classes
    $('#education').append(HTMLonlineClasses);
    for (var m = 0; m < education.onlineCourses.length; m++) {
        $('#education').append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[m].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[m].school);
        var formattedTitleAndSchool = formattedOnlineTitle + formattedOnlineSchool;
        $('.education-entry:last').append(formattedTitleAndSchool);
        $('.education-entry:last').append(HTMLonlineDates.replace('%data%', education.onlineCourses[m].dates));
        $('.education-entry:last').append(HTMLonlineURL.replace('#', education.onlineCourses[m].url));
    }
};

//Here are the work experience data along with dispaly method
var work = {
    "jobs": [{
        "employer": "Planet Express",
        "title": "Delivery Girl",
        "location": "Xuzhou, China",
        "dates": "January 3000 - Future",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget neque nec magna eleifend rutrum a quis urna. Donec sodales lectus quis libero rhoncus, id lacinia nibh pulvinar. Vivamus laoreet et justo at aliquet. Donec neque sem, placerat nec ante."
    }]
};
work.display = function() {
    function appendWork(element) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', element.employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', element.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle; //An entire a tag
        var formattedDates = HTMLworkDates.replace('%data%', element.dates);
        var formattedLocation = HTMLworkLocation.replace('%data%', element.location);
        var formattedDescription = HTMLworkDescription.replace('%data%', element.description);
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
    }
    work.jobs.forEach(appendWork);
};

//Here are the projects data along with display method
var projects = {
    "projects": [{
        "title": "A Portfolio Site",
        "dates": "2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget neque nec magna eleifend rutrum a quis urna. Donec sodales lectus quis libero rhoncus, id lacinia nibh pulvinar. Vivamus laoreet et justo at aliquet. Donec neque sem, placerat nec ante.",
        "images": ["images/Portfolio-site.jpg"],
        "url": "https://github.com/gaoshu883/a-portfolio-site"
    }]
};
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
        formattedTitle = formattedTitle.replace('#', projects.projects[i].url);
        var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);
        if (projects.projects[i].images.length > 0) {
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);
                $('.project-entry:last').append(formattedImage);
            }
        }
    }
};

//Switch to the internationalize name
function inName(name) {
    name = name.trim().split(' ');
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + ' ' + name[1];
}

//Display the bio information
bio.display();
//Display the education
education.display();
//Display the work experience
work.display();
//Display all the projects
projects.display();
//Add the google map
$('#mapDiv').append(googleMap);
//Display the internationalize name
$('hr').before(internationalizeButton);
//Fix up the contact bar when scrolling
var topBar = $('#topContacts');
var topBarOffset = topBar.offset().top;
$(window).on('scroll', function() {
    if ($(window).scrollTop() > topBarOffset) {
        topBar.addClass('contact-bar');
    } else {
        topBar.removeClass('contact-bar');
    }
});

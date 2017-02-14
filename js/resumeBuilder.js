/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
    Separation of concerns is used to refactor this app.
*/

// model: 存储简历数据
var model = {
    bio: {
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
        "biopic": "images/me.jpg"
    },
    education: {
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
    },
    work: {
        "jobs": [{
            "employer": "Planet Express",
            "title": "Delivery Girl",
            "location": "Xuzhou, China",
            "dates": "January 3000 - Future",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget neque nec magna eleifend rutrum a quis urna. Donec sodales lectus quis libero rhoncus, id lacinia nibh pulvinar. Vivamus laoreet et justo at aliquet. Donec neque sem, placerat nec ante."
        }]
    },
    projects: {
        "projects": [{
            "title": "A Portfolio Site",
            "dates": "2016",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget neque nec magna eleifend rutrum a quis urna. Donec sodales lectus quis libero rhoncus, id lacinia nibh pulvinar. Vivamus laoreet et justo at aliquet. Donec neque sem, placerat nec ante.",
            "images": ["images/portfolio-site.jpg"],
            "url": "https://github.com/gaoshu883/a-portfolio-site"
        }]
    }
};

// octopus: 联系model和view
var octopus = {
    init: function() {
        view.init();
    },
    getBio: function() {
        return model.bio;
    },
    getEducation: function() {
        return model.education;
    },
    getWork: function() {
        return model.work;
    },
    getProjects: function() {
        return model.projects;
    }
};

// view: 缓存DOM对象，渲染DOM元素
var view = {
    init: function() {
        this.bioRender();
        this.educationRender();
        this.workRender();
        this.projectsRender();

        //Add the google map
        $('#mapDiv').append(googleMap);
        //Display the internationalize name
        $('hr').before(internationalizeButton);

        //Switch to the internationalize name
        // 在view.init内部定义（决定了它的作用域链），可以在view中调用
        // 闭包
        this.inName = (function() {
            // 利用return只能返回到前一个作用域，而不是直接返回到全局作用域
            return function inName(name) {
                name = name.trim().split(' ');
                name[1] = name[1].toUpperCase();
                name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
                return name[0] + ' ' + name[1];
            };
        })();
        // 监听滚动事件
        // Fix up the contact bar when scrolling
        var topBar = $('#topContacts');
        var topBarOffset = topBar.offset().top;
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > topBarOffset) {
                topBar.addClass('contact-bar');
            } else {
                topBar.removeClass('contact-bar');
            }
        });
    },
    bioRender: function() {
        this.bio = octopus.getBio();
        //Display my name and role
        var formattedName = HTMLheaderName.replace('%data%', this.bio.name);
        var formattedRole = HTMLheaderRole.replace('%data%', this.bio.role);
        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);
        //Display the contact information on the top and in the footer
        $('#topContacts, #footerContacts').append(HTMLmobile.replace('%data%', this.bio.contacts.mobile));
        $('#topContacts, #footerContacts').append(HTMLemail.replace('%data%', this.bio.contacts.email));
        $('#topContacts, #footerContacts').append(HTMLgithub.replace('%data%', this.bio.contacts.github));
        $('#topContacts, #footerContacts').append(HTMLlocation.replace('%data%', this.bio.contacts.location));
        //Display the bio picture and welcome message
        $('#header').append(HTMLbioPic.replace('%data%', this.bio.biopic));
        $('#header').append(HTMLwelcomeMsg.replace('%data%', this.bio.welcomeMessage));
        //Display the skills
        if (this.bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            for (var i = 0; i < this.bio.skills.length; i++) {
                $('#skills').append(HTMLskills.replace('%data%', this.bio.skills[i]));
            }
        }
    },
    educationRender: function() {
        this.education = octopus.getEducation();
        //Display the schools
        for (var i = 0; i < this.education.schools.length; i++) {
            $('#education').append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace('%data%', this.education.schools[i].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', this.education.schools[i].degree);
            var formattedNameAndDegree = formattedSchoolName + formattedSchoolDegree;
            formattedNameAndDegree = formattedNameAndDegree.replace('#', this.education.schools[i].url);
            $('.education-entry:last').append(formattedNameAndDegree);
            $('.education-entry:last').append(HTMLschoolDates.replace('%data%', this.education.schools[i].dates));
            $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', this.education.schools[i].location));
            for (var j = 0; j < this.education.schools[i].majors.length; j++) {
                $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', this.education.schools[i].majors[j]));
            }
        }
        //Display the online classes
        $('#education').append(HTMLonlineClasses);
        for (var m = 0; m < this.education.onlineCourses.length; m++) {
            $('#education').append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', this.education.onlineCourses[m].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', this.education.onlineCourses[m].school);
            var formattedTitleAndSchool = formattedOnlineTitle + formattedOnlineSchool;
            $('.education-entry:last').append(formattedTitleAndSchool);
            $('.education-entry:last').append(HTMLonlineDates.replace('%data%', this.education.onlineCourses[m].dates));
            $('.education-entry:last').append(HTMLonlineURL.replace('#', this.education.onlineCourses[m].url));
        }
    },
    workRender: function() {
        this.work = octopus.getWork();
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
        this.work.jobs.forEach(appendWork);
    },
    projectsRender: function() {
        this.projects = octopus.getProjects();
        for (var i = 0; i < this.projects.projects.length; i++) {
            $('#projects').append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace('%data%', this.projects.projects[i].title);
            formattedTitle = formattedTitle.replace('#', this.projects.projects[i].url);
            var formattedDates = HTMLprojectDates.replace('%data%', this.projects.projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace('%data%', this.projects.projects[i].description);
            $('.project-entry:last').append(formattedTitle);
            $('.project-entry:last').append(formattedDates);
            $('.project-entry:last').append(formattedDescription);
            if (this.projects.projects[i].images.length > 0) {
                for (var j = 0; j < this.projects.projects[i].images.length; j++) {
                    var formattedImage = HTMLprojectImage.replace('%data%', this.projects.projects[i].images[j]);
                    $('.project-entry:last').append(formattedImage);
                }
            }
        }
    }
};

octopus.init();
// console.log(view);

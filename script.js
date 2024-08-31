// define the course data in an array
const courses = [
    {
        level: 1,
        title: "MAT7100 Tech Math for Computer Science",
        description: "The study of algebraic and transcendental functions is an essential prerequisite to Calculus. Students manipulate algebraic expressions, solve algebraic equations and linear systems and learn the properties of and graph algebraic and transcendental functions.",
        image: "./img/MAT7100%20Tech%20Math%20for%20Computer%20Science.png",
        courseDescription: "Course Description for MAT7100"
    },
    {
        level: 1,
        title: "CST7116 Intro to Computer Programming",
        description: "Students receive an introduction to computer programming with emphasis on problem analysis and design, using algorithms, pseudocode, flowcharts, UML class diagrams and testing, with the Java programming language used as a means to implement problem solution designs.",
        image: "./img/CST7116%20Intro%20to%20Computer%20Programming.png",
        courseDescription: "Course Description for CST7116"
    },
    {
        level: 1,
        title: "CST7118 Computer Essentials",
        description: "Maintaining a computer, using operating system and productivity software, and expressing related environmental and sustainability concerns, is an important part of working with Information Technology.",
        image: "./img/CST7118%20Computer%20Essentials.png",
        courseDescription: "Course Description for CST7118"
    },
    {
        level: 1,
        title: "CST7215 Introduction to Database",
        description: "Databases are used to store data and are a core component of many information technology systems. Students learn the fundamentals of relational databases design using Entity Relation Diagrams (ERDs), and use Structured Query Language (SQL) to create, modify and query a database.",
        image: "./img/CST7215%20Introduction%20to%20Database.png",
        courseDescription: "Course Description for CST7215"
    },
    {
        level: 2,
        title: "CST7284 Object-Oriented Programming (Java)",
        description: "Working in the field of information technology as a programmer requires a firm understanding of Object-Oriented Programming (OOP) concepts. Students explore object-oriented programming methodology using the Java programming language.",
        image: "./img/CST7284%20Object%20Oriented%20Programming%20(Java).png",
        courseDescription: "Course Description for CST7284"
    },
    {
        level: 2,
        title: "CST7285 Web Programming",
        description: "JavaScript, HTML5, and PHP are used to explore web-based solutions to problems of increasing interactivity and complexity. Lectures are reinforced by practical assignments that encourage students to construct and maintain their own websites.",
        image: "./img/CST7285%20Web%20Programming.png",
        courseDescription: "Course Description for CST7285"
    },
    {
        level: 2,
        title: "CST7102 Operation System Fund (GNU/Linux)",
        description: "Operating systems form the backbone of information technology systems coordinating the interaction between hardware and software. Students explore the basic concepts and components of Operating Systems (OS), and how they function and interact with hardware and software components.",
        image: "./img/CST7102%20Operating%20System%20Fund%20(GNU%20Linux).png",
        courseDescription: "Course Description for CST7102"
    },
    {
        level: 2,
        title: "GEP1001 Coop Education and Job Readiness",
        description: "Students are guided through a series of activities that prepare them to conduct a professional job search and succeed in the workplace. Through a detailed orientation students learn the cooperative education program policies and procedures related to searching and securing a work term opportunity.",
        image: "./img/GEP1001%20Coop%20Education%20and%20Job%20Readiness.png",
        courseDescription: "Course Description for GEP1001"
    },
    {
        level: 2,
        title: "CST7355 Database Systems",
        description: "Focusing on the principles and practices of database management systems (DBMS). Throughout this course, students will explore the fundamental concepts of databases, including data modeling, database design, and SQL (Structured Query Language) for querying and managing databases.",
        image: "./img/CST7355%20Database%20Systems.png",
        courseDescription: "Course Description for CST7355"
    }
];

// create a global scope courses array
let filteredCourses = [...courses];

// wait for the page to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    // when the page is loaded, list all courses
    ListCourses(courses);

    const searchInput = document.getElementById("search-input");
    const filterLevel = document.getElementById("filter-level");
    const sortAscButton = document.getElementById("sort-asc");
    const sortDescButton = document.getElementById("sort-desc");

    searchInput.addEventListener("input", handleSearch);
    filterLevel.addEventListener("change", handleFilter);
    sortAscButton.addEventListener("click", () => handleSort(true));
    sortDescButton.addEventListener("click", () => handleSort(false));

    // function to list required courses
    function ListCourses(coursesList) {
        const coursesContainer = document.getElementById("courses");
        coursesContainer.innerHTML = ""; // clean up the container

        // group courses by level
        // all class name inherit from Assignment 01 what we have done
        const courseLevels = [1, 2];
        courseLevels.forEach(level => {
            const levelCourses = coursesList.filter(course => course.level === level);

            // if there are courses for the level, create a section for the level
            if (levelCourses.length > 0) {
                // create a section for the level and add it to the container
                const section = document.createElement("section");
                // add a heading for the level
                const heading = document.createElement("h3");
                heading.textContent = `Level ${level}`;
                // add the heading to the section
                section.appendChild(heading);

                // create a flex container to hold the courses
                const flexContainer = document.createElement("div");
                // set the class name for the flex container
                flexContainer.className = "flex-container";

                // create a course card for each course and add it to the flex container
                levelCourses.forEach(course => {
                    const courseCard = document.createElement("div");
                    courseCard.className = "course-card";
                    const front = document.createElement("div");
                    front.className = "front flex-item";

                    const img = document.createElement("img");
                    img.src = course.image;
                    img.alt = `Image for ${course.title}`;

                    const title = document.createElement("p");
                    title.textContent = course.title;

                    // add the image and title to the front of the course card
                    front.appendChild(img);
                    // add the title to the front of the course card
                    front.appendChild(title);

                    // create the back of the course card
                    const back = document.createElement("div");
                    back.className = "back flex-item";

                    // add the course description to the back of the course card
                    const courseDescTitle = document.createElement("p");
                    courseDescTitle.textContent = course.courseDescription;

                    const description = document.createElement("p");
                    description.textContent = course.description;

                    // add the course description to the back of the course card
                    back.appendChild(courseDescTitle);
                    back.appendChild(description);

                    // add the front and back of the course card to the course card
                    courseCard.appendChild(front);
                    courseCard.appendChild(back);
                    flexContainer.appendChild(courseCard);
                });

                // add the flex container to the section
                section.appendChild(flexContainer);
                // add the section to the courses container
                coursesContainer.appendChild(section);
            }
        });
    }

    // function to handle search
    function handleSearch() {
        // get the search content
        const searchContent = searchInput.value.toLowerCase();
        // filter the courses based on the search content
        const filteredCourses = courses.filter(course =>
            course.title.toLowerCase().includes(searchContent) ||
            course.description.toLowerCase().includes(searchContent)
        );
        // list the founded courses refer to the search content
        ListCourses(filteredCourses);
    }

    // function to handle sort by title in ascending or descending order
    function handleSort(asc = true) {
        // sort the courses by title in ascending or descending order, using shallow copy and localeCompare
        // localeCompare is used to compare strings in a locale-sensitive way
        const sortedCourses = filteredCourses.sort((a, b) => {
            // if asc is true, sort in ascending order, otherwise sort in descending order
            return asc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
        });

        // update the active sort button to indicate the current sort order
        if (asc) {
            sortAscButton.classList.add('active-sort');
            sortDescButton.classList.remove('active-sort');
        } else {
            sortDescButton.classList.add('active-sort');
            sortAscButton.classList.remove('active-sort');
        }

        ListCourses(sortedCourses);
    }

    function handleFilter() {
        // get the selected level from the filter level dropdown list and convert it to an integer
        const level = parseInt(filterLevel.value, 10); // 10 is the radix parameter => decimal
        // filter the courses based on the selected level
        filteredCourses = level ? courses.filter(course => course.level === level) : courses;
        ListCourses(filteredCourses);
    }
});


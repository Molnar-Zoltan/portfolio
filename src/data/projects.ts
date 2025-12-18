export interface Project {
    name: string;
    stack: string;
    image: string;
    githubLink: string;
    liveLink: string;
}

export const projects: Project[] = [
    { 
        name: "Best Shop",
        stack: "JavaScript, SCSS",
        image: "/images/projects/best-shop.png", 
        githubLink: "https://github.com/Molnar-Zoltan/best-shop-capstone-project/", 
        liveLink: "https://molnar-zoltan.github.io/best-shop-capstone-project/" 
    },
    { 
        name: "Little Lemon - Reserve a Table", 
        stack: "React, CSS",
        image: "/images/projects/little-lemon-reserve-a-table.png", 
        githubLink: "https://github.com/Molnar-Zoltan/little-lemon-reserve-a-table/", 
        liveLink: "https://molnar-zoltan.github.io/little-lemon-reserve-a-table/" 
    },
    { 
        name: "To-Do List App", 
        stack: "React, Tailwind CSS",
        image: "/images/projects/todo-list-app.png", 
        githubLink: "https://github.com/Molnar-Zoltan/react-todo-list-app", 
        liveLink: "https://molnar-zoltan.github.io/react-todo-list-app/" 
    },
    { 
        name: "TravelBloom", 
        stack: "JavaScript, Tailwind CSS",
        image: "/images/projects/travelbloom.png", 
        githubLink: "https://github.com/Molnar-Zoltan/ibm-js-course-project", 
        liveLink: "https://molnar-zoltan.github.io/ibm-js-course-project/" 
    },
    { 
        name: "Currency Converter", 
        stack: "JavaScript, CSS",
        image: "/images/projects/currency-converter.png", 
        githubLink: "https://github.com/Molnar-Zoltan/currency-converter", 
        liveLink: "https://molnar-zoltan.github.io/currency-converter/" 
    },
];
export interface Project {
    name: string;
    image: string;
    githubLink: string;
    liveLink: string;
}

export const projects: Project[] = [
    { 
        name: "Little Lemon - Reserve a Table", 
        image: "/images/projects/little-lemon-reserve-a-table.png", 
        githubLink: "https://github.com/Molnar-Zoltan/little-lemon-reserve-a-table/", 
        liveLink: "https://molnar-zoltan.github.io/little-lemon-reserve-a-table/" 
    },
    { 
        name: "To-Do List App (React)", 
        image: "/images/projects/todo-list-app.png", 
        githubLink: "https://github.com/Molnar-Zoltan/react-todo-list-app", 
        liveLink: "https://molnar-zoltan.github.io/react-todo-list-app/" 
    },
    { 
        name: "TravelBloom", 
        image: "/images/projects/travelbloom.png", 
        githubLink: "https://github.com/Molnar-Zoltan/ibm-js-course-project", 
        liveLink: "https://molnar-zoltan.github.io/ibm-js-course-project/" 
    },
    { 
        name: "Currency Converter", 
        image: "/images/projects/currency-converter.png", 
        githubLink: "https://github.com/Molnar-Zoltan/currency-converter", 
        liveLink: "https://molnar-zoltan.github.io/currency-converter/" 
    },
    { 
        name: "Simple Calculator", 
        image: "/images/projects/simple-calculator.png", 
        githubLink: "https://github.com/Molnar-Zoltan/simple-calculator", 
        liveLink: "https://molnar-zoltan.github.io/simple-calculator/" 
    },
];
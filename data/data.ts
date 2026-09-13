import { PlayIcon, QrCodeIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

import type { 
    About,
    Profile, 
    Stats, 
    Project, 
    Learning, 
    Contact 
} 
from './types';

export const profile: Profile = {
    role: 'Frontend Developer',
    name: 'Ikhwanul Azka',
    overview: 'I am a passionate frontend developer with a strong focus on creating user-friendly and visually appealing web applications. I have experience working with modern web technologies and frameworks, and I am always eager to learn and improve my skills.',
    cvUrl: 'https://drive.google.com/file/d/1g0k5J6z8F9Z5J6z8F9Z5J6z8F9Z5J6z/view?usp=sharing',
    whatsappUrl: 'https://wa.me/6281234567890',
};

export const about: About = {
    heading: 'About Me',
    description: 'I am a frontend developer with a passion for creating beautiful and functional web applications. I have experience working with various frontend technologies and frameworks, and I am always eager to learn and improve my skills.',
    skills: [
        {
            icon: PlayIcon,
            title: 'Web Development',
            description: 'Proficient in building interactive user interfaces with React and its ecosystem.'
        },
        {
            icon: QrCodeIcon,
            title: 'Responsive Design',
            description: 'Skilled in creating responsive and mobile-friendly web applications using CSS and modern frameworks.'
        },
        {
            icon: AcademicCapIcon,
            title: 'Continuous Learning',
            description: 'Committed to continuous learning and staying updated with the latest trends and best practices in frontend development.'
        }
    ],
    imageUrl: 'Sixth Grove Street.png'
};

export const stats: Stats[] = [
    {
        title: 'Projects Completed',
        value: '15+'
    },
    {
        title: 'Years of Experience',
        value: '3+'
    },
    {
        title: 'Happy Clients',
        value: '10+'
    }
];

export const projects: Project = {
        heading: 'My Projects',
        items: [
            {
                title: 'Project 1',
                description: 'Description of Project 1',
                imageUrl: 'Mondstadt.png',
                projectUrl: 'https://example.com/project1'
            },
            {
                title: 'Project 2',
                description: 'Description of Project 2',
                imageUrl: 'Sixth Grove Street.png',
                projectUrl: 'https://example.com/project2'
            },
            {
                title: 'Project 3',
                description: 'Description of Project 3',
                imageUrl: 'Sixth Grove Street.png',
                projectUrl: 'https://example.com/project3'
            },
            {
                title: 'Project 4',
                description: 'Description of Project 4',
                imageUrl: 'Mondstadt.png',
                projectUrl: 'https://example.com/project4'
            }
        ]
    };

export const learning: Learning = {
    heading: 'Learning Journey',
    description: 'I am constantly learning and improving my skills in frontend development. Here are some of the technologies and frameworks I am currently learning:',
    items: [
        {
            icon: AcademicCapIcon,
            title: 'Jaz Academy',
            description: 'Learning frontend development through Jaz Academy, focusing on modern web technologies and best practices.'
        },
        {
            icon: QrCodeIcon,
            title: 'GIT Courses | Video Editing',
            description: 'Learning version control and collaboration using Git, as well as enhancing my skills in video editing for creating engaging content.'
        },
        {
            icon: AcademicCapIcon,
            title: 'Udemy Courses | Web Programming',
            description: 'Taking online courses on Udemy to deepen my understanding of web programming and frontend development.'
        },
        {
            icon: AcademicCapIcon,
            title: 'WPU Courses | AI Engineering',
            description: 'Learning GraphQL for efficient API development and data fetching.'
        }
    ]
};

export const contact: Contact = {
    heading: 'Contact Me',
    description: 'Feel free to reach out to me for any inquiries or collaborations.',
    email: 'azkaik@jazacademy.id',
    phone: '+62 812-3456-7890',
    address: '123 Main Street, City, Country',
    socialLinks: [
        {
            icon: PlayIcon,
            platform: 'LinkedIn',
            url: 'https://linkedin.com/in/ikhwanulazka'
        },
        {
            icon: QrCodeIcon,
            platform: 'GitHub',
            url: 'https://github.com/ikhwanulazka'
        },
        {
            icon: AcademicCapIcon,
            platform: 'Twitter',
            url: 'https://twitter.com/ikhwanulazka'
        }
    ]
};
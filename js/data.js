// ============================================================
// data.js - Portfolio Data
// Semua data portfolio disimpan di sini agar mudah diedit
// ============================================================

// --- Skill Metrics (untuk Player Status) ---
const skillMetrics = [
    { name: 'GAME DEVELOPMENT', percentage: 85 },
    { name: 'WEB DEVELOPMENT', percentage: 80 },
    { name: 'DATA SCIENCE', percentage: 70 },
    { name: 'UI DESIGN', percentage: 60 },
    { name: 'STORYTELLING', percentage: 75 },
];

// --- Project Database ---
const projects = [
    {
        id: '01',
        name: 'CTRL-Z',
        category: 'Visual Novel // Time Loop // Mystery',
        description: '"A psychological visual novel about choices, consequences, and broken timelines."',
        technology: ['Ren\'Py', 'Python'],
        status: 'IN DEVELOPMENT',
        statusClass: 'in-development',
        image: 'assets/images/ctrl-z.png',
        url: 'https://ctrl-z-game.vercel.app/',
    },
    {
        id: '02',
        name: 'WEB VN ENGINE',
        category: 'Game Engine // Web Development',
        description: '"A lightweight visual novel engine created for modern web browsers."',
        technology: ['HTML', 'CSS', 'JavaScript'],
        status: 'ACTIVE DEVELOPMENT',
        statusClass: 'active-development',
        image: 'assets/images/web-vn-engine.png',
        url: '',
    },
    {
        id: '03',
        name: 'SAES CRYPTOGRAPHY',
        category: 'Cryptography // Educational Tool',
        description: '"An interactive web application for learning and simulating Simplified AES encryption."',
        technology: ['JavaScript', 'Cryptography'],
        status: 'COMPLETED',
        statusClass: 'completed',
        image: 'assets/images/saes.png',
        url: 'https://saes.cryptograph.my.id/',
    },
    {
        id: '04',
        name: 'DATA SCIENCE PROJECT',
        category: 'Machine Learning // Data Analysis',
        description: '"A collection of experiments involving data analysis, visualization, and predictive models."',
        technology: ['Python', 'Pandas', 'Machine Learning'],
        status: 'RESEARCH',
        statusClass: 'research',
        image: 'assets/images/data-science.jpg',
        url: '',
    },
    {
        id: '05',
        name: 'AES CRYPTOGRAPHY',
        category: 'Cryptography // Educational Tool',
        description: '"Aplikasi ini digunakan untuk mencoba proses enkripsi dan dekripsi AES-128. Selain menampilkan hasil akhirnya, aplikasi ini juga memperlihatkan setiap langkah proses AES agar lebih mudah dipelajari."',
        technology: ['JavaScript', 'Cryptography'],
        status: 'COMPLETED',
        statusClass: 'completed',
        image: 'assets/images/aes.png',
        url: 'https://aes.cryptograph.my.id/',
    },
    {
        id: '06',
        name: 'DES CRYPTOGRAPHY',
        category: 'Cryptography // Educational Tool',
        description: '"Aplikasi web interaktif untuk memvisualisasikan seluruh proses algoritma DES (Data Encryption Standard), mulai dari pembangkitan kunci (key schedule) hingga enkripsi dan dekripsi 16-round Feistel. Dibuat sebagai proyek tugas Mata Kuliah Kriptografi, Semester Genap 2025/2026."',
        technology: ['JavaScript', 'Cryptography'],
        status: 'COMPLETED',
        statusClass: 'completed',
        image: 'assets/images/des.png',
        url: 'https://des.cryptograph.my.id/',
    },
    {
        id: '07',
        name: 'SDES CRYPTOGRAPHY',
        category: 'Cryptography // Educational Tool',
        description: '"Aplikasi web interaktif untuk simulasi algoritma Simplified Data Encryption Standard (S-DES), dibuat sebagai project tugas individu Mata Kuliah Kriptografi (Semester Genap 2025/2026)."',
        technology: ['JavaScript', 'Cryptography'],
        status: 'COMPLETED',
        statusClass: 'completed',
        image: 'assets/images/sdes.png',
        url: 'https://sdes.cryptograph.my.id/',
    },
    {
        id: '08',
        name: 'CryptoClassic',
        category: 'Cryptography // Educational Tool',
        description: '"CryptoClassic adalah aplikasi web berbasis Flask yang mensimulasikan 5 algoritma kriptografi klasik dengan tampilan langkah-langkah perhitungan yang detail, edukatif, dan transparan."',
        technology: ['Python 3.10+', 'Flask', 'HTML5', 'CSS3', 'JavaScript (Vanilla)', 'NumPy'],
        status: 'COMPLETED',
        statusClass: 'completed',
        image: 'assets/images/cryptoclassic.png',
        url: 'https://www.cryptograph.my.id/',
    },
    {
        id: '09',
        name: 'REYHAN AK77',
        category: 'Content Creation // Personal Channel',
        description: 'Channel YouTube pribadi yang berfokus pada konten teknologi, game development, tutorial, pengalaman, serta berbagai proyek dan karya kreatif.',
        technology: [
            'Video Editing',
            'Content Creation',
            'Storytelling',
            'YouTube',
        ],
        status: 'ACTIVE',
        statusClass: 'in-progress',
        image: 'assets/images/reyhan-ak77.png',
        url: '',
    },
    {
        id: '10',
        name: 'TRINOMADS',
        category: 'Creative Media // Collaborative Channel',
        description: 'Channel kreatif kolaboratif yang memproduksi film pendek, video hiburan, sketsa, dan konten berbasis storytelling bersama tim.',
        technology: [
            'Video Production',
            'Video Editing',
            'Cinematography',
            'Storytelling',
        ],
        status: 'ACTIVE',
        statusClass: 'in-progress',
        image: 'assets/images/trinomads.jpg',
        url: '',
    },
    {
        id: 'XX',
        name: 'NULL',
        category: 'UNKNOWN // UNKNOWN',
        description: '"UNKNOWN"',
        technology: ['UNKNOWN'],
        status: 'null',
        statusClass: 'null',
        image: 'assets/images/data-science.jpg',
        url: '',
    },
    {
        id: 'XX',
        name: 'NULL',
        category: 'UNKNOWN // UNKNOWN',
        description: '"UNKNOWN"',
        technology: ['UNKNOWN'],
        status: 'null',
        statusClass: 'null',
        image: 'assets/images/data-science.jpg',
        url: '',
    },
    {
        id: 'XX',
        name: 'NULL',
        category: 'UNKNOWN // UNKNOWN',
        description: '"UNKNOWN"',
        technology: ['UNKNOWN'],
        status: 'null',
        statusClass: 'null',
        image: 'assets/images/data-science.jpg',
        url: '',
    },
    {
        id: 'XX',
        name: 'NULL',
        category: 'UNKNOWN // UNKNOWN',
        description: '"UNKNOWN"',
        technology: ['UNKNOWN'],
        status: 'null',
        statusClass: 'null',
        image: 'assets/images/data-science.jpg',
        url: '',
    },
    {
        id: 'XX',
        name: 'NULL',
        category: 'UNKNOWN // UNKNOWN',
        description: '"UNKNOWN"',
        technology: ['UNKNOWN'],
        status: 'null',
        statusClass: 'null',
        image: 'assets/images/data-science.jpg',
        url: '',
    },


];

// --- Skill Database Categories ---
const skillCategories = [
    {
        title: 'GAME DEVELOPMENT',
        skills: ['Ren\'Py', 'Unity', 'Game System Design', 'Visual Novel Development', 'Narrative Design'],
    },
    {
        title: 'PROGRAMMING',
        skills: ['Python', 'JavaScript', 'Java', 'C++', 'HTML', 'CSS', 'Go'],
    },
    {
        title: 'DATA & AI',
        skills: ['Data Analysis', 'Pandas', 'Machine Learning', 'Data Visualization', 'MySQL'],
    },
    {
        title: 'TOOLS',
        skills: ['Git', 'GitHub', 'Linux', 'Vite', 'Aseprite', 'Photoshop', 'Kdenlive', 'Capcut'],
    },
    {
        title: 'TOOLS',
        skills: ['Git', 'GitHub', 'Linux', 'Vite', 'Aseprite', 'Photoshop', 'Kdenlive', 'Capcut'],
    },
];

// --- Experience Log ---
const experiences = [
    {
        year: 'Null - Null',
        title: 'Null',
        category: 'Null',
        description: 'Null',
        status: 'ONGOING',
    },
    {
        year: '2026',
        title: 'Personal Portfolio Website',
        category: 'Web Development',
        description: 'Designed and developed a personal portfolio website to showcase software projects, technical skills, creative work, and professional experiences.',
        status: 'IN DEVELOPMENT',
    },
    {
        year: '2026',
        title: 'S-AES Cryptography Simulator',
        category: 'Cybersecurity',
        description: 'Developed an interactive web application that demonstrates the encryption and decryption processes of the Simplified Advanced Encryption Standard algorithm.',
        status: 'COMPLETED',
    },
    {
        year: '2024 - PRESENT',
        title: 'Informatics Engineering Student',
        category: 'Education',
        description: 'Studying software development, data science, artificial intelligence, cybersecurity, databases, and computer science fundamentals.',
        status: 'IN PROGRESS',
    },
    {
        year: '2024 - Present',
        title: 'Visual Novel Developer',
        category: 'Game Development',
        description: 'Developing an original time-loop visual novel "CTRL-Z" using Ren\'Py. Responsible for story design, programming, and game mechanics.',
        status: 'ONGOING',
    },
    {
        year: '2026',
        title: 'Web VN Engine Creator',
        category: 'Web Development',
        description: 'Built a lightweight visual novel engine from scratch using vanilla HTML, CSS, and JavaScript for modern browsers.',
        status: 'ACTIVE',
    },
    {
        year: 'Null - Null',
        title: 'Null',
        category: 'Null',
        description: 'Null',
        status: 'ONGOING',
    },
    {
        year: '2022 - 2023',
        title: 'Teh Poci Business Partner',
        category: 'Entrepreneurship',
        description: 'Managed daily business operations, including product preparation, customer service, sales transactions, inventory management, and maintaining product quality.',
        status: 'COMPLETED',
    },
    {
        year: '2021 - 2023',
        title: 'Anggota PRISMA MBC',
        category: 'Organization',
        description: 'Actively participated in an Islamic youth organization, contributing to religious, social, and community activities while developing teamwork, communication, and organizational skills.',
        status: 'COMPLETED',
    },
];

// --- Achievements ---
const achievements = [
    {
        name: 'SYSTEM ARCHITECT',
        description: '"Built a visual novel engine using Vanilla JavaScript."',
        unlocked: true,
        icon: '🏗️',
    },
    {
        name: 'STORY CREATOR',
        description: '"Developed an original time-loop visual novel."',
        unlocked: true,
        icon: '📖',
    },
    {
        name: 'CRYPTOGRAPHY RESEARCHER',
        description: '"Created an interactive SAES learning platform."',
        unlocked: true,
        icon: '🔐',
    },
    {
        name: 'CONTINUOUS LEARNER',
        description: '"Exploring game development, data science, and multiple languages."',
        unlocked: true,
        icon: '📚',
    },
    {
        name: 'PIXEL ARTIST',
        description: '"Create at least 10 original game assets."',
        unlocked: false,
        icon: '🎨',
    },
    {
        name: 'MULTIPLAYER ENABLED',
        description: '"Collaborate on a team project with 3+ developers."',
        unlocked: false,
        icon: '👥',
    },
    {
        name: 'PERFECT DEPLOY',
        description: '"Deploy a production-ready application."',
        unlocked: false,
        icon: '🚀',
    },
    {
        name: 'MENTOR MODE',
        description: '"Help 5 beginners start their coding journey."',
        unlocked: false,
        icon: '🌟',
    },
];

// --- Typing animation roles ---
const typingRoles = [
    'GAME DEVELOPER',
    'DATA SCIENCE STUDENT',
    'CREATIVE DEVELOPER',
];

// --- Contact Configuration ---
const contactConfig = {
  web3formsAccessKey: 'd572c874-454a-444a-860e-8d2fe196a422',  // <-- GANTI DI SINI
};

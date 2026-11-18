// ============================================================
//  EDIT THIS FILE to update your portfolio content.
//  Every value marked  >>> REPLACE <<<  is a placeholder.
// ============================================================

export const profile = {
  name: 'Srinivas Vankudoth',
  location: 'Hyderabad, Telangana, India',
  subtitle: 'Final-Year Computer Science Engineering Student | Aspiring Software Engineer',
  intro: 'I build practical software solutions using Java, Python, web technologies, and databases.',

  // >>> REPLACE <<< with your real details
  email: '23211a05w8@gmail.com',
  phone: '+91 6302024126',
  github: 'https://github.com/23211a05w8-design',
  linkedin: 'https://linkedin.com/in/vankudoth-srinivas-ba8167293',

  // >>> PUT YOUR FILES in /public/assets/ (see README) <<<
  resume: '/assets/Srinivas_Vankudoth_Resume.pdf',
  photo: '/assets/profile.jpg', // if the file is missing, initials are shown instead
}

export const about = [
  'I am a final-year Computer Science and Engineering student at B.V. Raju Institute of Technology (BVRIT), Narsapur, with a strong interest in software development and building real-world applications.',
  'I enjoy solving practical problems through technology. My project work spans full-stack web development and cloud computing, and I am looking for a software engineering role where I can keep learning and ship useful software.',
]

export const skills = [
  { title: 'Programming', items: ['Java', 'Python', 'C'] },
  { title: 'Web Development', items: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'Database', items: ['MySQL', 'DBMS', 'SQL'] },
  { title: 'Core Concepts', items: ['OOP', 'Data Structures', 'Computer Networks'] },
]

export const projects = [
  {
    id: 'agrosense',
    title: 'AgroSense',
    subtitle: 'Crop Recommendation & Disease Detection System',
    badge: 'Full-stack application',
    description:
      'A full-stack web application designed to help farmers make better crop-related decisions and identify crop diseases at an early stage.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'MySQL'],
    features: [
      'Crop recommendation based on agricultural inputs',
      'Disease detection interface',
      'Farmer-friendly dashboard',
      'User authentication',
      'Database integration',
      'Responsive interface',
    ],
    github: '#', // >>> REPLACE <<< repository URL
  },
  {
    id: 'ngaco',
    title: 'NGACO',
    subtitle: 'New Genetic Ant Colony Optimization',
    badge: 'Cloud computing',
    description:
      'A cloud-computing project focused on optimizing virtual machine/task scheduling using an optimization approach.',
    plain:
      'In simple terms: cloud servers receive many tasks at once, and deciding which task runs on which virtual machine affects speed and cost. This project searches for better task-to-machine assignments instead of assigning them blindly.',
    tech: ['Python', 'Cloud Computing', 'Optimization Algorithms'],
    features: [],
    github: '#',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Landing Page',
    subtitle: 'Responsive product interface',
    badge: 'Front-end',
    description:
      'A responsive e-commerce product interface displaying product information, pricing, ratings, reviews, and links to purchase products from platforms such as Amazon and Flipkart.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [],
    github: '#',
  },
]

export const education = [
  {
    degree: 'B.Tech – Computer Science & Engineering',
    school: 'B.V. Raju Institute of Technology (BVRIT), Narsapur',
    period: 'Final Year',
  },
  // >>> ADD LATER <<< Copy this block for each entry
  { degree: 'Intermediate (MPC)', school: 'Jawahar Navodaya Vidyalaya', period: '10+2', placeholder: true },
  { degree: 'School education (CBSE)', school: 'Jawahar Navodaya Vidyalaya', period: '6-10', placeholder: true },
]

export const achievements = [
  { title: 'NCC Participation', text: 'Took part in the National Cadet Corps, building discipline, teamwork and leadership.' },
  { title: 'Academic & Project Work', text: 'Built full-stack and cloud-computing projects alongside the B.Tech curriculum.' },
  { title: 'Paper Presentation', text: 'Presented a research paper at a national conference in IEEE xplore march 2025 about NGACO ALGORITHMS.' },
]

export const interests = ['Cricket', 'Kabaddi', 'NCC']

// >>> ADD YOUR CERTIFICATIONS HERE <<< Each entry becomes a card.
export const certifications = [
  { name: 'HTML ADVANCE', org: 'Infosys springboard', date: 'August 2025' ,},
  { name: 'TASK FRONTEND DEVELOPMENT', org: 'Task organization', date: 'August 2024' ,},
  { name: 'AMAZON AWS CERTIFIED DEVELOPER', org: 'Amazon organization', date: 'March 2025',},
  { name: 'JAVA DEVELOPER', org: 'Hackerrank organization', date: 'october2025',},
  { name: 'CISCO CERTIFIED NETWORK ASSOCIATE', org: 'Cisco organization', date: 'june 2025',},

]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

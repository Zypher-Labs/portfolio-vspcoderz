import { useState } from 'react';
import { motion } from 'framer-motion';
import { Window } from './ui/window';
import { Terminal } from './ui/terminal';
import { Taskbar } from './Taskbar';
import { 
  CgTerminal, 
  CgProfile, 
  CgCode, 
  CgBriefcase, 
  CgMail, 
  CgFileDocument,
  CgDesktop,
  CgImage,
  CgNotes
} from 'react-icons/cg';

// App definitions with icon support
const apps = [
  { 
    id: 'terminal', 
    title: 'Terminal', 
    icon: <img src='/src/assets/icons/terminal.png' />,
    iconUrl: <img src='/src/assets/icons/terminal.png' />, // Add your icon path here
    component: <Terminal /> 
  },
  { 
    id: 'about', 
    title: 'About Me', 
    icon: <CgProfile size={24} />,
    iconUrl: '/src/assets/icons/about.png', // Add your icon path here
    component: <AboutMe /> 
  },
  { 
    id: 'skills', 
    title: 'Skills', 
    icon: <CgCode size={24} />,
    iconUrl: '/src/assets/icons/skills.png', // Add your icon path here
    component: <Skills /> 
  },
  { 
    id: 'projects', 
    title: 'Projects', 
    icon: <CgBriefcase size={24} />,
    iconUrl: '/src/assets/icons/projects.png', // Add your icon path here
    component: <Projects /> 
  },
  { 
    id: 'contact', 
    title: 'Contact', 
    icon: <CgMail size={24} />,
    iconUrl: '/src/assets/icons/contact.png', // Add your icon path here
    component: <Contact /> 
  },
  { 
    id: 'resume', 
    title: 'Resume', 
    icon: <CgFileDocument size={24} />,
    iconUrl: '/src/assets/icons/resume.png', // Add your icon path here
    component: <Resume /> 
  },
  { 
    id: 'gallery', 
    title: 'Gallery', 
    icon: <CgImage size={24} />,
    iconUrl: '/src/assets/icons/gallery.png', // Add your icon path here
    component: <Gallery /> 
  },
  { 
    id: 'notes', 
    title: 'Notes', 
    icon: <CgNotes size={24} />,
    iconUrl: '/src/assets/icons/notes.png', // Add your icon path here
    component: <Notes /> 
  },
];

function AboutMe() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        Hello! I am Vspcoderz, a passionate web developer with a love for creating beautiful, 
        functional, and user-friendly applications.
      </p>
      <p className="mb-4">
        With a background in computer science and several years of experience in the industry,
        I specialize in building modern web applications using the latest technologies.
      </p>
      <p>
        When I'm not coding, you can find me exploring new technologies, contributing to open-source
        projects, or enjoying outdoor activities.
      </p>
    </div>
  );
}

function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React', 'Vue.js', 'Angular', 'HTML5', 'CSS3/SASS', 'JavaScript/TypeScript']
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'PHP', 'Ruby on Rails']
    },
    {
      name: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase']
    },
    {
      name: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git']
    },
    {
      name: 'Other',
      skills: ['Three.js', 'WebGL', 'Framer Motion', 'RESTful APIs', 'GraphQL']
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            className="border border-border rounded-lg p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
            <ul className="list-disc pl-5">
              {category.skills.map((skill, skillIndex) => (
                <motion.li 
                  key={skillIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with product management, cart functionality, and payment processing.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing and analyzing social media accounts across multiple platforms.',
      technologies: ['Vue.js', 'Firebase', 'Chart.js', 'Social Media APIs'],
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management system with real-time updates, task assignment, and progress tracking.',
      technologies: ['Angular', 'Express', 'PostgreSQL', 'Socket.io'],
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Portfolio OS',
      description: 'An operating system-like portfolio website with interactive windows, terminal, and 3D elements.',
      technologies: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="border border-border rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input 
                type="text" 
                className="w-full p-2 bg-background border border-input rounded-md"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                className="w-full p-2 bg-background border border-input rounded-md"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea 
                className="w-full p-2 bg-background border border-input rounded-md h-32"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="border border-border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CgMail size={20} />
              <span>vspcoderz@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <CgProfile size={20} />
              <span>github.com/vspcoderz</span>
            </div>
            <div className="flex items-center gap-3">
              <CgBriefcase size={20} />
              <span>linkedin.com/in/vspcoderz</span>
            </div>
            <div className="flex items-center gap-3">
              <CgDesktop size={20} />
              <span>@vspcoderz</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <div className="border border-border rounded-lg p-6 space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between">
                <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                <span className="text-muted-foreground">2016 - 2020</span>
              </div>
              <p className="text-muted-foreground">University of Technology</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between">
                <h4 className="font-medium">Senior Frontend Developer</h4>
                <span className="text-muted-foreground">2022 - Present</span>
              </div>
              <p className="text-muted-foreground mb-2">Tech Innovations Inc.</p>
              <ul className="list-disc pl-5 text-sm">
                <li>Led the development of the company's flagship web application</li>
                <li>Implemented modern frontend architecture using React and TypeScript</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>
            
            <div>
              <div className="flex justify-between">
                <h4 className="font-medium">Frontend Developer</h4>
                <span className="text-muted-foreground">2020 - 2022</span>
              </div>
              <p className="text-muted-foreground mb-2">Digital Solutions LLC</p>
              <ul className="list-disc pl-5 text-sm">
                <li>Developed responsive web applications for various clients</li>
                <li>Collaborated with designers to implement pixel-perfect UIs</li>
                <li>Optimized application performance and accessibility</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Certifications</h3>
          <ul className="list-disc pl-5">
            <li>AWS Certified Developer - Associate</li>
            <li>Google Professional Cloud Developer</li>
            <li>MongoDB Certified Developer</li>
          </ul>
        </div>
        
        <div className="flex justify-center">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Download Full Resume (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div 
            key={item}
            className="aspect-square bg-secondary/50 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: item * 0.1 }}
          >
            <img 
              src={`https://picsum.photos/seed/${item}/300/300`} 
              alt={`Gallery item ${item}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Notes() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Quick Notes</h2>
      <div className="space-y-4">
        {['Meeting notes', 'Project ideas', 'Shopping list', 'Books to read'].map((note, index) => (
          <motion.div 
            key={index}
            className="p-3 bg-secondary/30 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="font-medium mb-2">{note}</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Desktop() {
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);

  const openApp = (appId) => {
    if (!openWindows.includes(appId)) {
      setOpenWindows([...openWindows, appId]);
    }
    setActiveWindow(appId);
  };

  const closeApp = (appId) => {
    setOpenWindows(openWindows.filter(id => id !== appId));
    if (activeWindow === appId) {
      setActiveWindow(openWindows.length > 1 ? openWindows.filter(id => id !== appId)[0] : null);
    }
  };

  const getAppPosition = (index) => {
    // Calculate positions in a more distributed way
    const positions = [
      { x: 50, y: 50 },
      { x: 150, y: 100 },
      { x: 250, y: 150 },
      { x: 100, y: 200 },
      { x: 200, y: 250 },
      { x: 300, y: 300 },
      { x: 400, y: 150 },
      { x: 350, y: 50 },
    ];
    
    return positions[index % positions.length];
  };

  return (
    <div className="desktop">
      {/* Windows */}
      {openWindows.map((appId, index) => {
        const app = apps.find(a => a.id === appId);
        return (
          <Window
            key={appId}
            title={app.title}
            defaultPosition={getAppPosition(index)}
            isOpen={true}
            onClose={() => closeApp(appId)}
            className={activeWindow === appId ? 'z-10' : 'z-0'}
          >
            {app.component}
          </Window>
        );
      })}
      
      {/* Desktop Icons */}
      <div className="fixed top-4 left-4 grid grid-cols-1 gap-6">
        {apps.slice(0, 4).map((app, index) => (
          <motion.button
            key={app.id}
            className="flex flex-col items-center justify-center group"
            onClick={() => openApp(app.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/50 backdrop-blur-sm flex items-center justify-center text-white mb-1">
              {app.icon}
            </div>
            <span className="text-xs text-white bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
              {app.title}
            </span>
          </motion.button>
        ))}
      </div>
      
      {/* Taskbar */}
      <Taskbar 
        apps={apps} 
        openApps={openWindows} 
        onAppClick={openApp} 
        activeApp={activeWindow}
      />
    </div>
  );
}
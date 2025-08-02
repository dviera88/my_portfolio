// --- Portfolio Data ---
const portfolioData = {
  contact_info: {
    name: "David Viera",
    title: "IT Leader | POS & Automation Specialist",
    email: "dviera88@gmail.com",
    phone: "714-290-8659",
    linkedin: "https://www.linkedin.com/in/dviera88",
    location: "Hemet, Riverside County, CA"
  },
  summary: "I drive operational excellence in the QSR industry by architecting, automating, and optimizing complex Point of Sale (POS) and enterprise data systems. From large-scale cloud migrations to custom Python scripts that solve critical issues in minutes, I bridge the gap between high-level strategy and hands-on technical execution.",
  projects: [
    {
      title: "Navori Digital Menu Board Modernization",
      description: "Migrating On-Premise Navori to AWS Cloud Infrastructure",
      challenge: "The critical Navori digital menu board software was running on-premise, facing limitations in scalability and resilience. The vendor primarily supported Azure, creating a significant integration hurdle for our AWS-centric infrastructure strategy.",
      role: "I led the technical migration, interpreting Azure documentation to translate Navori's architecture and configuration requirements to AWS. I designed and implemented the integration with an AWS Load Balancer, ensuring efficient traffic distribution, high availability, and seamless communication through careful configuration of security groups and networking.",
      outcome: "Successfully migrated the production Navori server to AWS, leveraging the AWS Load Balancer. This significantly improved the system's scalability, resilience, and reliability, integrated it into our preferred cloud environment, and reduced operational overhead for our digital menu board system.",
      tags: ["AWS", "Cloud Migration", "Navori", "Networking", "Load Balancer"]
    },
    {
      title: "Help Desk Automation Engine",
      description: "\"HDU\": A Python-Based Help Desk Automation Tool",
      challenge: "The IT help desk was facing high ticket volumes from ~500 restaurants, leading to extended resolution times for common, repeatable issues. A more efficient solution was needed to empower the support team.",
      role: "I single-handedly designed, developed, and deployed 'HDU,' a consolidated scripting program using Python. The tool bundled dozens of automated fixes and diagnostic routines into a single, user-friendly interface for the help desk team.",
      outcome: "The 'HDU' program cut overall ticket resolution times by more than half, dramatically improving support efficiency, reducing downtime for restaurants, and freeing up technicians to focus on more complex issues.",
      tags: ["Python", "Automation", "Process Improvement", "Scripting"]
    },
    {
      title: "Critical System Diagnostics & Repair",
      description: "Automated Fix for a Critical Gift Card System Failure",
      challenge: "A recurring critical system issue was disabling gift card functionality across the network. The manual diagnostic and repair process was complex and could take days, causing significant customer friction and potential revenue loss.",
      role: "I analyzed the root cause of the failure and developed a targeted Python script to automate the entire diagnostic and repair process.",
      outcome: "The script reduced resolution time from days to under one minute. This proactive solution eliminated a major operational headache, ensured system reliability, and showcased the power of automation for rapid problem-solving.",
      tags: ["Python", "SQL", "System Diagnostics", "Problem Solving"]
    }
  ],
  skills: {
    "Leadership & Strategy": { icon: 'briefcase', skills: ["Cross-Functional Team Leadership", "Stakeholder & Vendor Management", "Process Improvement & Optimization", "Project Coordination & Delivery", "IT Service Management (ITIL 4)", "Technical Documentation & Training"]},
    "POS & Payment Systems": { icon: 'cpu', skills: ["Oracle Simphony & RES 3700", "Menu & Data Systems Management", "Cloud-Native POS Platforms", "Payment Standards (OPI, OLO)", "Mobile & AI System Integration", "Loyalty Program Integration (Punchh)"]},
    "Automation & Data Analytics": { icon: 'code', skills: ["Python (Scripting, Automation)", "SQL (Data Extraction, Reporting)", "Workflow Automation (n8n)", "AI Agent Integration", "Data Cleaning & Validation", "API & Database Integration"]},
    "Infrastructure & Cloud": { icon: 'server', skills: ["AWS Certified Cloud Practitioner", "Virtualization (VMware, Unraid)", "Windows, macOS, Linux Admin", "Enterprise Networking & Firewalls", "Windows Server Administration", "IAAS & SAAS Management"]}
  },
  experience: [
    { title: "Application Specialist", company: "El Pollo Loco, Inc.", dates: "Dec 2022 – Jun 2025" },
    { title: "IT Help Desk Supervisor", company: "El Pollo Loco, Inc.", dates: "May 2021 – Dec 2022" },
    { title: "IT Analyst", company: "El Pollo Loco, Inc.", dates: "Jul 2019 – May 2021" },
    { title: "Business Owner", company: "Tech Zone Wireless", dates: "Mar 2015 – Jul 2019" }
  ],
  education: {
    degrees: [
        { degree: "Bachelor's Degree in Information Technology", institution: "Western Governors University (WGU)", status: "In Progress" },
        { degree: "Computer Science Studies", institution: "Santa Ana College", status: "" }
    ],
    certifications: [
        { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
        { name: "n8n Certified Workflow Automation Professional", issuer: "Udemy" },
        { name: "AI Automation: Build LLM Apps & Ai-Agents with n8n & API's", issuer: "Udemy" },
        { name: "Introduction to Service Management with ITIL 4", issuer: "Udemy" },
        { name: "The Complete Python Bootcamp", issuer: "Udemy" },
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- Initialize Lucide Icons ---
    lucide.createIcons();

    // --- Populate Dynamic Content ---
    const { contact_info, summary, projects, skills, experience, education } = portfolioData;

    // Hero
    const heroSection = document.querySelector('#hero');
    heroSection.querySelector('h1').textContent = contact_info.name;
    heroSection.querySelector('p:nth-of-type(1)').textContent = contact_info.title;
    heroSection.querySelector('p:nth-of-type(2)').textContent = summary;

    // Projects
    const projectsGrid = document.getElementById('projects-grid');
    projects.forEach(project => {
        const projectCard = `
            <div class="card flex flex-col rounded-xl transition-all duration-300">
                <div class="p-6 flex-grow">
                    <h3 class="text-xl font-bold text-cyan-400 mb-2">${project.title}</h3>
                    <p class="text-slate-300 font-medium mb-4">${project.description}</p>
                    <div class="space-y-3 text-sm text-slate-400">
                        <p><strong class="text-slate-200">Challenge:</strong> ${project.challenge}</p>
                        <p><strong class="text-slate-200">My Role:</strong> ${project.role}</p>
                        <p><strong class="text-slate-200">Outcome:</strong> ${project.outcome}</p>
                    </div>
                </div>
                <div class="p-6 border-t border-slate-700 mt-auto">
                    <div class="flex flex-wrap gap-2">
                        ${project.tags.map(tag => `<span class="bg-slate-700 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>`;
        projectsGrid.innerHTML += projectCard;
    });

    // Skills
    const skillsGrid = document.getElementById('skills-grid');
    for (const [category, data] of Object.entries(skills)) {
        const skillCard = `
            <div class="card p-6 rounded-xl transition-all duration-300">
                <h3 class="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                    <i data-lucide="${data.icon}" class="w-5 h-5"></i>
                    ${category}
                </h3>
                <ul class="space-y-2">
                    ${data.skills.map(skill => `
                        <li class="flex items-start">
                            <i data-lucide="chevrons-right" class="text-cyan-500 mt-1 mr-2 flex-shrink-0 w-4 h-4"></i>
                            <span class="text-slate-300">${skill}</span>
                        </li>`).join('')}
                </ul>
            </div>`;
        skillsGrid.innerHTML += skillCard;
    }

    // Experience
    const experienceTimeline = document.getElementById('experience-timeline');
    experience.forEach(job => {
        const jobItem = `
            <div class="mb-10 ml-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full -left-3 ring-8 ring-slate-900">
                    <i data-lucide="briefcase" class="w-3 h-3 text-white"></i>
                </span>
                <div class="card p-4 rounded-xl transition-all duration-300">
                    <h3 class="text-lg font-semibold text-white">${job.title}</h3>
                    <p class="text-md text-slate-400">${job.company}</p>
                    <time class="block mb-2 text-sm font-normal leading-none text-slate-500">${job.dates}</time>
                </div>
            </div>`;
        experienceTimeline.innerHTML += jobItem;
    });

    // Education
    const educationList = document.getElementById('education-list');
    education.degrees.forEach(edu => {
        const eduItem = `
            <div class="flex items-start gap-4">
                <div class="bg-slate-800 p-3 rounded-full mt-1">
                    <i data-lucide="graduation-cap" class="text-cyan-400 w-6 h-6"></i>
                </div>
                <div>
                    <h4 class="font-bold text-white text-lg">${edu.degree}</h4>
                    <p class="text-slate-400">${edu.institution}</p>
                    ${edu.status ? `<p class="text-cyan-500 text-sm font-semibold">${edu.status}</p>` : ''}
                </div>
            </div>`;
        educationList.innerHTML += eduItem;
    });

    // Certifications
    const certificationsList = document.getElementById('certifications-list');
    education.certifications.forEach(cert => {
        const certItem = `
            <div class="flex items-start gap-4">
                <div class="bg-slate-800 p-3 rounded-full mt-1">
                    <i data-lucide="award" class="text-cyan-400 w-6 h-6"></i>
                </div>
                <div>
                    <h4 class="font-bold text-white text-lg">${cert.name}</h4>
                    <p class="text-slate-400">${cert.issuer}</p>
                </div>
            </div>`;
        certificationsList.innerHTML += certItem;
    });

    // Contact
    const contactInfo = document.getElementById('contact-info');
    contactInfo.innerHTML = `
        <div class="card p-8 rounded-xl transition-all duration-300">
            <div class="space-y-6">
                <a href="mailto:${contact_info.email}" class="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors">
                    <i data-lucide="mail" class="w-6 h-6 text-cyan-500"></i>
                    <span>${contact_info.email}</span>
                </a>
                <a href="tel:${contact_info.phone}" class="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors">
                    <i data-lucide="phone" class="w-6 h-6 text-cyan-500"></i>
                    <span>${contact_info.phone}</span>
                </a>
                <a href="${contact_info.linkedin}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors">
                    <i data-lucide="linkedin" class="w-6 h-6 text-cyan-500"></i>
                    <span>linkedin.com/in/dviera88</span>
                </a>
                <div class="flex items-center gap-4 text-slate-300">
                    <i data-lucide="map-pin" class="w-6 h-6 text-cyan-500"></i>
                    <span>${contact_info.location}</span>
                </div>
            </div>
        </div>`;

    // Footer
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
    
    // Re-initialize icons after dynamic content is added
    lucide.createIcons();

    // --- INTERACTIVITY ---

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-open-icon');
    const closeIcon = document.getElementById('menu-close-icon');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        openIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    openIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }
            }
        });
    });

    // Scroll-to-Top Button
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.remove('opacity-0');
        } else {
            scrollToTopBtn.classList.add('opacity-0');
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
});

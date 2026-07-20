import { Applicant, Internship, Allocation } from '@/types/allocation';

export const dummyApplicants: Applicant[] = [
  {
    id: 'APP001',
    name: 'Arjun Sharma',
    email: 'arjun.sharma@email.com',
    phone: '+91-9876543210',
    age: 22,
    gender: 'Male',
    education: 'B.Tech Computer Science',
    cgpa: 8.5,
    skills: ['React', 'Node.js', 'Python', 'Machine Learning', 'SQL'],
    experience: 'Internship at TCS (2 months)',
    location: 'Delhi',
    preferences: ['INT001', 'INT002', 'INT005'],
    category: 'General',
    appliedAt: new Date('2024-01-15'),
  },
  {
    id: 'APP002',
    name: 'Priya Patel',
    email: 'priya.patel@email.com',
    phone: '+91-9876543211',
    age: 21,
    gender: 'Female',
    education: 'B.Tech Information Technology',
    cgpa: 9.2,
    skills: ['Java', 'Spring Boot', 'Angular', 'AWS', 'Docker'],
    experience: 'Freelance Web Developer (6 months)',
    location: 'Mumbai',
    preferences: ['INT003', 'INT001', 'INT004'],
    category: 'OBC',
    appliedAt: new Date('2024-01-16'),
  },
  {
    id: 'APP003',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91-9876543212',
    age: 23,
    gender: 'Male',
    education: 'B.Tech Electronics',
    cgpa: 7.8,
    skills: ['Python', 'Data Analysis', 'Tableau', 'Excel', 'Statistics'],
    experience: 'Research Assistant (4 months)',
    location: 'Bangalore',
    preferences: ['INT006', 'INT007', 'INT002'],
    category: 'SC',
    appliedAt: new Date('2024-01-17'),
  },
  {
    id: 'APP004',
    name: 'Sneha Reddy',
    email: 'sneha.reddy@email.com',
    phone: '+91-9876543213',
    age: 22,
    gender: 'Female',
    education: 'B.Tech Mechanical',
    cgpa: 8.7,
    skills: ['AutoCAD', 'SolidWorks', 'Python', 'Project Management', 'Quality Control'],
    experience: 'Industrial Training at Mahindra (3 months)',
    location: 'Hyderabad',
    preferences: ['INT008', 'INT009', 'INT001'],
    category: 'General',
    appliedAt: new Date('2024-01-18'),
  },
  {
    id: 'APP005',
    name: 'Amit Gupta',
    email: 'amit.gupta@email.com',
    phone: '+91-9876543214',
    age: 24,
    gender: 'Male',
    education: 'MBA Finance',
    cgpa: 8.1,
    skills: ['Financial Analysis', 'Excel', 'PowerBI', 'Risk Management', 'Investment Banking'],
    experience: 'Analyst at ICICI Bank (8 months)',
    location: 'Mumbai',
    preferences: ['INT010', 'INT011', 'INT003'],
    category: 'EWS',
    appliedAt: new Date('2024-01-19'),
  },
  {
    id: 'APP006',
    name: 'Kavya Nair',
    email: 'kavya.nair@email.com',
    phone: '+91-9876543215',
    age: 21,
    gender: 'Female',
    education: 'B.Tech Computer Science',
    cgpa: 9.5,
    skills: ['React', 'Flutter', 'Firebase', 'UI/UX Design', 'Figma'],
    experience: 'Mobile App Developer (5 months)',
    location: 'Kochi',
    preferences: ['INT012', 'INT001', 'INT002'],
    category: 'General',
    appliedAt: new Date('2024-01-20'),
  }
];

export const dummyInternships: Internship[] = [
  {
    id: 'INT001',
    title: 'Software Development Intern',
    company: 'Tech Mahindra',
    domain: 'Technology',
    location: 'Pune',
    duration: '6 months',
    stipend: 25000,
    requiredSkills: ['React', 'Node.js', 'JavaScript', 'SQL'],
    minCGPA: 7.5,
    description: 'Work on cutting-edge web applications using modern technologies.',
    capacity: 5,
    isRemote: false,
    eligibilityCriteria: ['B.Tech/BE in CS/IT', 'Strong programming skills'],
    startDate: new Date('2024-06-01'),
    applicationDeadline: new Date('2024-03-15'),
  },
  {
    id: 'INT002',
    title: 'Data Science Intern',
    company: 'Flipkart',
    domain: 'Data Science',
    location: 'Bangalore',
    duration: '4 months',
    stipend: 30000,
    requiredSkills: ['Python', 'Machine Learning', 'Statistics', 'SQL'],
    minCGPA: 8.0,
    description: 'Analyze large datasets and build predictive models for e-commerce.',
    capacity: 3,
    isRemote: true,
    eligibilityCriteria: ['B.Tech/MCA/MSc in relevant field', 'Experience with ML libraries'],
    startDate: new Date('2024-06-15'),
    applicationDeadline: new Date('2024-03-20'),
  },
  {
    id: 'INT003',
    title: 'Backend Developer Intern',
    company: 'Infosys',
    domain: 'Technology',
    location: 'Hyderabad',
    duration: '6 months',
    stipend: 22000,
    requiredSkills: ['Java', 'Spring Boot', 'Microservices', 'AWS'],
    minCGPA: 7.0,
    description: 'Develop scalable backend services for enterprise applications.',
    capacity: 4,
    isRemote: false,
    eligibilityCriteria: ['B.Tech in CS/IT', 'Understanding of REST APIs'],
    startDate: new Date('2024-07-01'),
    applicationDeadline: new Date('2024-04-01'),
  },
  {
    id: 'INT004',
    title: 'Cloud Engineering Intern',
    company: 'Amazon',
    domain: 'Cloud Computing',
    location: 'Chennai',
    duration: '5 months',
    stipend: 40000,
    requiredSkills: ['AWS', 'Docker', 'Kubernetes', 'Python'],
    minCGPA: 8.5,
    description: 'Work with AWS services to build and deploy cloud-native applications.',
    capacity: 2,
    isRemote: true,
    eligibilityCriteria: ['B.Tech/BE', 'Cloud certifications preferred'],
    startDate: new Date('2024-06-01'),
    applicationDeadline: new Date('2024-03-10'),
  },
  {
    id: 'INT005',
    title: 'Full Stack Developer Intern',
    company: 'Wipro',
    domain: 'Technology',
    location: 'Noida',
    duration: '6 months',
    stipend: 20000,
    requiredSkills: ['React', 'Node.js', 'MongoDB', 'Express'],
    minCGPA: 7.0,
    description: 'Build end-to-end web applications using MERN stack.',
    capacity: 6,
    isRemote: false,
    eligibilityCriteria: ['B.Tech/MCA', 'Portfolio of projects required'],
    startDate: new Date('2024-06-15'),
    applicationDeadline: new Date('2024-03-25'),
  },
  {
    id: 'INT006',
    title: 'Business Analyst Intern',
    company: 'Deloitte',
    domain: 'Consulting',
    location: 'Mumbai',
    duration: '4 months',
    stipend: 35000,
    requiredSkills: ['Data Analysis', 'Excel', 'PowerBI', 'SQL'],
    minCGPA: 8.0,
    description: 'Analyze business processes and provide strategic recommendations.',
    capacity: 3,
    isRemote: true,
    eligibilityCriteria: ['MBA/B.Tech', 'Strong analytical skills'],
    startDate: new Date('2024-07-01'),
    applicationDeadline: new Date('2024-04-15'),
  },
  {
    id: 'INT007',
    title: 'Product Management Intern',
    company: 'Zomato',
    domain: 'Product',
    location: 'Gurgaon',
    duration: '5 months',
    stipend: 28000,
    requiredSkills: ['Product Strategy', 'Analytics', 'User Research', 'Agile'],
    minCGPA: 7.5,
    description: 'Work with product teams to define and execute product roadmaps.',
    capacity: 2,
    isRemote: false,
    eligibilityCriteria: ['Any graduation', 'Product management experience preferred'],
    startDate: new Date('2024-06-01'),
    applicationDeadline: new Date('2024-03-30'),
  },
  {
    id: 'INT008',
    title: 'Quality Assurance Intern',
    company: 'Tata Motors',
    domain: 'Manufacturing',
    location: 'Pune',
    duration: '6 months',
    stipend: 18000,
    requiredSkills: ['Quality Control', 'Six Sigma', 'AutoCAD', 'Testing'],
    minCGPA: 7.0,
    description: 'Ensure quality standards in automotive manufacturing processes.',
    capacity: 4,
    isRemote: false,
    eligibilityCriteria: ['B.Tech Mechanical/Production', 'Quality certification preferred'],
    startDate: new Date('2024-06-15'),
    applicationDeadline: new Date('2024-04-01'),
  },
  {
    id: 'INT009',
    title: 'Design Engineer Intern',
    company: 'L&T',
    domain: 'Engineering',
    location: 'Mumbai',
    duration: '6 months',
    stipend: 22000,
    requiredSkills: ['AutoCAD', 'SolidWorks', 'Project Management', 'Problem Solving'],
    minCGPA: 7.5,
    description: 'Design and develop engineering solutions for infrastructure projects.',
    capacity: 3,
    isRemote: false,
    eligibilityCriteria: ['B.Tech Civil/Mechanical', 'CAD software proficiency'],
    startDate: new Date('2024-07-01'),
    applicationDeadline: new Date('2024-04-10'),
  },
  {
    id: 'INT010',
    title: 'Financial Analyst Intern',
    company: 'HDFC Bank',
    domain: 'Finance',
    location: 'Mumbai',
    duration: '4 months',
    stipend: 30000,
    requiredSkills: ['Financial Analysis', 'Excel', 'Risk Management', 'Banking'],
    minCGPA: 8.0,
    description: 'Analyze financial data and support investment decision making.',
    capacity: 2,
    isRemote: true,
    eligibilityCriteria: ['MBA Finance/CA/CFA', 'Banking knowledge required'],
    startDate: new Date('2024-06-01'),
    applicationDeadline: new Date('2024-03-20'),
  },
  {
    id: 'INT011',
    title: 'Investment Banking Intern',
    company: 'Goldman Sachs',
    domain: 'Finance',
    location: 'Mumbai',
    duration: '3 months',
    stipend: 50000,
    requiredSkills: ['Investment Banking', 'Financial Modeling', 'Excel', 'Valuation'],
    minCGPA: 9.0,
    description: 'Support M&A transactions and financial advisory services.',
    capacity: 1,
    isRemote: false,
    eligibilityCriteria: ['Top tier MBA/CA', 'Exceptional academic record'],
    startDate: new Date('2024-06-15'),
    applicationDeadline: new Date('2024-03-01'),
  },
  {
    id: 'INT012',
    title: 'Mobile App Developer Intern',
    company: 'PhonePe',
    domain: 'Technology',
    location: 'Bangalore',
    duration: '5 months',
    stipend: 32000,
    requiredSkills: ['Flutter', 'React Native', 'Mobile UI/UX', 'Firebase'],
    minCGPA: 8.0,
    description: 'Develop mobile applications for fintech platform.',
    capacity: 3,
    isRemote: true,
    eligibilityCriteria: ['B.Tech CS/IT', 'Mobile development experience'],
    startDate: new Date('2024-06-01'),
    applicationDeadline: new Date('2024-03-15'),
  }
];

// Generate dummy allocations based on smart matching
export const generateDummyAllocations = (): Allocation[] => {
  const allocations: Allocation[] = [];
  
  dummyApplicants.forEach((applicant, index) => {
    const preferredInternshipId = applicant.preferences[0];
    const internship = dummyInternships.find(int => int.id === preferredInternshipId);
    
    if (internship) {
      // Calculate match score based on various factors
      const skillsMatch = calculateSkillsMatch(applicant.skills, internship.requiredSkills);
      const cgpaMatch = applicant.cgpa >= internship.minCGPA ? 1 : 0.5;
      const locationMatch = applicant.location === internship.location || internship.isRemote;
      const preferenceRank = 1; // First preference
      
      const matchScore = (skillsMatch * 0.4 + cgpaMatch * 0.3 + (locationMatch ? 1 : 0.5) * 0.2 + (1/preferenceRank) * 0.1) * 100;
      
      allocations.push({
        id: `ALLOC${String(index + 1).padStart(3, '0')}`,
        applicantId: applicant.id,
        internshipId: preferredInternshipId,
        matchScore: Math.round(matchScore),
        preferenceRank,
        skillsMatch: Math.round(skillsMatch * 100),
        locationMatch,
        explanation: generateExplanation(applicant, internship, skillsMatch, preferenceRank, locationMatch),
        status: matchScore > 70 ? 'Allocated' : matchScore > 50 ? 'Waitlisted' : 'Not Allocated',
        allocatedAt: new Date(),
      });
    }
  });
  
  return allocations;
};

function calculateSkillsMatch(applicantSkills: string[], requiredSkills: string[]): number {
  const matchingSkills = applicantSkills.filter(skill => 
    requiredSkills.some(required => required.toLowerCase().includes(skill.toLowerCase()))
  );
  return matchingSkills.length / requiredSkills.length;
}

function generateExplanation(
  applicant: Applicant, 
  internship: Internship, 
  skillsMatch: number, 
  preferenceRank: number, 
  locationMatch: boolean
): string {
  const explanations = [];
  
  explanations.push(`Skills match: ${Math.round(skillsMatch * 100)}%`);
  explanations.push(`Preference rank: #${preferenceRank}`);
  explanations.push(`CGPA requirement: ${applicant.cgpa >= internship.minCGPA ? 'Met' : 'Not met'}`);
  explanations.push(`Location: ${locationMatch ? 'Compatible' : 'Different location'}`);
  
  if (applicant.category !== 'General') {
    explanations.push(`Category: ${applicant.category} (diversity bonus applied)`);
  }
  
  return explanations.join(' • ');
}
export interface Applicant {
  id: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  education: string;
  cgpa: number;
  skills: string[];
  experience: string;
  location: string;
  preferences: string[]; // Array of internship IDs in preference order
  category: 'General' | 'OBC' | 'SC' | 'ST' | 'EWS';
  resumeUrl?: string;
  appliedAt: Date;
}

export interface Internship {
  id: string;
  title: string;
  company: string;
  domain: string;
  location: string;
  duration: string;
  stipend: number;
  requiredSkills: string[];
  minCGPA: number;
  description: string;
  capacity: number;
  isRemote: boolean;
  eligibilityCriteria: string[];
  startDate: Date;
  applicationDeadline: Date;
}

export interface Allocation {
  id: string;
  applicantId: string;
  internshipId: string;
  matchScore: number;
  preferenceRank: number;
  skillsMatch: number;
  locationMatch: boolean;
  explanation: string;
  status: 'Allocated' | 'Waitlisted' | 'Not Allocated';
  allocatedAt: Date;
}

export interface AllocationMetrics {
  totalApplicants: number;
  totalInternships: number;
  totalAllocations: number;
  averageMatchScore: number;
  averagePreferenceRank: number;
  categoryDistribution: Record<string, number>;
  genderDistribution: Record<string, number>;
  locationDistribution: Record<string, number>;
  unfilledPositions: number;
  satisfactionRate: number;
}

export interface MatchingCriteria {
  skillWeight: number;
  preferenceWeight: number;
  locationWeight: number;
  cgpaWeight: number;
  diversityBonus: number;
  enableFairnessConstraints: boolean;
  reservationQuotas: Record<string, number>;
}
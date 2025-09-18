
import { Announcement, Assignment, Schedule, UserProfile, QuickAction } from '../types';

export const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'Parent-Teacher Conference',
    content: 'Parent-teacher conferences will be held next week. Please schedule your appointment through the school portal.',
    date: '2024-01-15',
    priority: 'high',
    category: 'Events',
  },
  {
    id: '2',
    title: 'Library Hours Extended',
    content: 'The library will now be open until 8 PM on weekdays to support student study sessions.',
    date: '2024-01-14',
    priority: 'medium',
    category: 'Facilities',
  },
  {
    id: '3',
    title: 'Science Fair Registration',
    content: 'Registration for the annual science fair is now open. Deadline is February 1st.',
    date: '2024-01-13',
    priority: 'medium',
    category: 'Academic',
  },
];

export const mockAssignments: Assignment[] = [
  {
    id: '1',
    title: 'Math Homework Chapter 5',
    subject: 'Mathematics',
    dueDate: '2024-01-18',
    description: 'Complete exercises 1-20 from Chapter 5: Algebra Fundamentals',
    status: 'pending',
  },
  {
    id: '2',
    title: 'History Essay',
    subject: 'History',
    dueDate: '2024-01-20',
    description: 'Write a 500-word essay on the Industrial Revolution',
    status: 'pending',
  },
  {
    id: '3',
    title: 'Science Lab Report',
    subject: 'Science',
    dueDate: '2024-01-16',
    description: 'Submit lab report on chemical reactions experiment',
    status: 'submitted',
  },
  {
    id: '4',
    title: 'English Reading Quiz',
    subject: 'English',
    dueDate: '2024-01-12',
    description: 'Quiz on chapters 1-5 of "To Kill a Mockingbird"',
    status: 'graded',
    grade: 92,
  },
];

export const mockSchedule: Schedule[] = [
  {
    id: '1',
    subject: 'Mathematics',
    teacher: 'Mr. Johnson',
    time: '08:00 - 09:00',
    room: 'Room 101',
    day: 'Monday',
  },
  {
    id: '2',
    subject: 'English',
    teacher: 'Ms. Smith',
    time: '09:15 - 10:15',
    room: 'Room 205',
    day: 'Monday',
  },
  {
    id: '3',
    subject: 'Science',
    teacher: 'Dr. Brown',
    time: '10:30 - 11:30',
    room: 'Lab 1',
    day: 'Monday',
  },
  {
    id: '4',
    subject: 'History',
    teacher: 'Mr. Davis',
    time: '12:30 - 13:30',
    room: 'Room 302',
    day: 'Monday',
  },
];

export const mockUserProfile: UserProfile = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex.johnson@school.edu',
  studentId: 'ST2024001',
  grade: '10th Grade',
};

export const quickActions: QuickAction[] = [
  {
    id: '1',
    title: 'Schedule',
    icon: 'calendar-outline',
    route: '/schedule',
    color: '#4A90E2',
  },
  {
    id: '2',
    title: 'Assignments',
    icon: 'book-outline',
    route: '/assignments',
    color: '#7ED321',
  },
  {
    id: '3',
    title: 'Grades',
    icon: 'trophy-outline',
    route: '/grades',
    color: '#F5A623',
  },
  {
    id: '4',
    title: 'Messages',
    icon: 'mail-outline',
    route: '/messages',
    color: '#E74C3C',
  },
];

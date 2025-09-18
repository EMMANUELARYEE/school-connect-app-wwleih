
export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  description: string;
  status: 'pending' | 'submitted' | 'graded';
  grade?: number;
}

export interface Schedule {
  id: string;
  subject: string;
  teacher: string;
  time: string;
  room: string;
  day: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  studentId: string;
  grade: string;
  avatar?: string;
}

export interface QuickAction {
  id: string;
  title: string;
  icon: string;
  route: string;
  color: string;
}

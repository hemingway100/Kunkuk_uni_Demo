
export interface Notice {
  id: number;
  category: '학사' | '채용' | '장학' | '일반';
  title: string;
  date: string;
  excerpt: string;
}

export interface News {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

export interface Petition {
  rank: number;
  title: string;
  date: string;
  agreementCount: number;
  status: '답변대기' | '진행중' | '답변완료';
}

export interface CalendarEvent {
  date: string;
  title: string;
  type: 'academic' | 'exam' | 'holiday';
}

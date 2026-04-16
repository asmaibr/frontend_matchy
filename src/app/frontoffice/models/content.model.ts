export interface Assessment {
  assessmentId?: number;
  questions: string;
  passingScore: number;
  duration: number;
  contentId?: number;
  content?: { contentId?: number; title?: string };
  contentTitle?: string;
}

export interface Content {
  contentId?: number;
  title: string;
  description: string;
  type: 'COURS' | 'ARTICLE' | 'VIDEO';
  level: 'DEBUTANT' | 'INTERMEDIAIRE' | 'AVANCE';
  createdAt?: string;
  updatedAt?: string;
  authorId?: number;
  assessment?: Assessment;
}

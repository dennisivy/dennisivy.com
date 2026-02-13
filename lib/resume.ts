import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const resumePath = path.join(process.cwd(), 'content/resume.md');

export interface ResumeData {
  title: string;
  content: string;
}

export function getResume(): ResumeData | null {
  try {
    if (!fs.existsSync(resumePath)) {
      return null;
    }
    const fileContents = fs.readFileSync(resumePath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      title: data.title ?? 'Resume',
      content,
    };
  } catch {
    return null;
  }
}

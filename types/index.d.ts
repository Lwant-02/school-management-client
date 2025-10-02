interface NewsAndEvents {
  id: number;
  image: string;
  title: string;
  date: string;
  description: string;
}

interface Teacher {
  id: number;
  name: string;
  image_url: string;
  email: string;
}

interface Subjects {
  id: number;
  name: string;
  description: string;
  code: string;
}

interface TimetableCardProps {
  id: number;
  image: string;
  title: string;
  date: string;
  description: string;
}

interface Labs {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  rating: number;
  likes: number;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}
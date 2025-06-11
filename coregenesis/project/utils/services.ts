import { Database, Globe, HardDrive, BarChart3 } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Map of icon names to their components
const iconMap: { [key: string]: any } = {
  'Database': Database,
  'Globe': Globe,
  'HardDrive': HardDrive,
  'BarChart3': BarChart3,
};

export interface Service {
  id: number;
  title: string;
  description: string;
  icon_name: string;
  points: string[];
}

export function getIconComponent(iconName: string) {
  return iconMap[iconName] || Database;
}

export async function getServices(): Promise<Service[]> {
  try {
    const response = await fetch(`${API_URL}/api/services/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch services');
    }

    const data = await response.json();
    return data.results || data;
  } catch (error) {
    console.error('Error in getServices:', error);
    throw error;
  }
} 
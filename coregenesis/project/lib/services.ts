import { Database, Globe, HardDrive, BarChart3 } from 'lucide-react';
import { api } from './api';

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
    return await api.services.getAll();
  } catch (error) {
    console.error('Error in getServices:', error);
    throw error;
  }
} 
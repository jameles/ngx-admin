import { NbMenuItem } from '@nebular/theme';
import { AuthService } from '../@core/auth/auth.service';

export function getMenuItems(role: string): NbMenuItem[] {
  const common: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: '/pages/dashboard',
      home: true,
    },
  ];

  const admin: NbMenuItem[] = [
    {
      title: 'Étudiants',
      icon: 'people-outline',
      link: '/pages/students',
    },
    {
      title: 'Promotions',
      icon: 'briefcase-outline',
      link: '/pages/promotions',
    },
    {
      title: 'Spécialités',
      icon: 'layers-outline',
      link: '/pages/specialties',
    },
    {
      title: 'QR Code',
      icon: 'qr-code-outline',
      link: '/pages/qr',
    },
  ];

  const university: NbMenuItem[] = [
    {
      title: 'Étudiants',
      icon: 'people-outline',
      link: '/pages/students',
    },
    {
      title: 'QR Code',
      icon: 'qr-code-outline',
      link: '/pages/qr',
    },
  ];

  const student: NbMenuItem[] = [
    {
      title: 'Scan QR',
      icon: 'camera-outline',
      link: '/pages/qr/scan',
    },
  ];

  if (role === 'admin') return [...common, ...admin];
  if (role === 'university') return [...common, ...university];
  if (role === 'student') return [...common, ...student];
  return common;
}

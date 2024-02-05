import { Section, SettingSection } from '../types/types';

export const settings: Section[] = [
  {
    title: 'الاعدادات',
    data: [
      { key: 'item1', label: 'المقالات المحفوظة', icon: 'save' },
      { key: 'item2', label: 'الاشعارات', icon: 'notifications' },
      { key: 'item3', label: 'الوضع الداكن ', icon: 'darkMode' },
      { key: 'item4', label: 'حجم الخط', icon: 'textA', screen: 'FontSize' },
      {
        key: 'item5',
        label: 'تسجيل الخروج',
        icon: 'logout',
        screen: 'logout',
      },
    ],
  },
  {
    title: 'تواصل معنا',
    data: [
      {
        key: 'item1',
        label: 'www.gemini.media',
        icon: 'mail',
        linkType: 'email',
      },
      { key: 'item2', label: 'support', icon: 'phone', linkType: 'phone' },
    ],
  },
  {
    title: 'عن التطبيق',
    data: [
      {
        key: 'item1',
        label: 'سياسية الخصوصية',
        icon: 'info',
        screen: 'Policy',
      },
      { key: 'item2', label: 'تقييم التطبيق', icon: 'star', screen: 'rate' },
    ],
  },
];

export const sections: SettingSection[] = [
  {
    title: 'الاقسام الرئيسية',
    data: [
      {
        key: '1',
        label: 'نصائح و ارشادات ',
        icon: 'tipsAndAdvice',
        screen: 'TipsAndAdvice',
      },
      {
        key: '2',
        label: 'الصحة النفسية ',
        icon: 'PsychologicalHealth',
        screen: 'PsychologicalHealth',
      },
      {
        key: '3',
        label: 'نصائح و ارشادات ',
        icon: 'tipsAndAdvice',
        screen: 'TipsAndAdvice',
      },
      {
        key: '4',
        label: 'نصائح و ارشادات ',
        icon: 'tipsAndAdvice',
        screen: 'TipsAndAdvice',
      },
      {
        key: '5',
        label: 'نصائح و ارشادات ',
        icon: 'tipsAndAdvice',
        screen: 'TipsAndAdvice',
      },
      {
        key: '6',
        label: 'نصائح و ارشادات ',
        icon: 'tipsAndAdvice',
        screen: 'TipsAndAdvice',
      },
      {
        key: '7',
        label: 'نصائح و ارشادات ',
        icon: 'tipsAndAdvice',
        screen: 'TipsAndAdvice',
      },
      {
        key: '8',
        label: 'نصائح و ارشادات ',
        icon: 'tipsAndAdvice',
        screen: 'TipsAndAdvice',
      },
      {
        key: '9',
        label: 'نصائح و ارشادات ',
        icon: 'tipsAndAdvice',
        screen: 'TipsAndAdvice',
      },
      {
        key: '10',
        label: 'نصائح و ارشادات ',
        icon: 'tipsAndAdvice',
        screen: 'TipsAndAdvice',
      },
      {
        key: '11',
        label: 'نصائح و ارشادات ',
        icon: 'tipsAndAdvice',
        screen: 'TipsAndAdvice',
      },
    ],
  },
];

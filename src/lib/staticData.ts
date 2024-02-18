import { SettingsSection, SectionsSection } from '../types/types';

export const settings: SettingsSection[] = [
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

export const sections: SectionsSection[] = [
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
        icon: 'mentalHealth',
        screen: 'MentalHealth',
      },
      {
        key: '3',
        label: 'تجميل و تخسيس',
        icon: 'beauty',
        screen: 'Beauty',
      },
      {
        key: '4',
        label: 'عيادة العيون',
        icon: 'eyes',
        screen: 'EyeClinic',
      },
      {
        key: '5',
        label: 'امراض مزمنة',
        icon: 'chronicDiseases',
        screen: 'ChronicDiseases',
      },
      {
        key: '6',
        label: 'الصحة الجنسية',
        icon: 'sexualHealth',
        screen: 'SexualHealth',
      },
      {
        key: '7',
        label: 'تحقيقات و حوارات',
        icon: 'investigationsAndDialogues',
        screen: 'InvestigationsAndDialogues',
      },
      {
        key: '8',
        label: 'عيادة الاسنان',
        icon: 'dentalClinic',
        screen: 'DentalClinic',
      },
      {
        key: '9',
        label: 'الأمومة و الطفل',
        icon: 'motherhoodAndChild',
        screen: 'MotherhoodAndChild',
      },
      {
        key: '10',
        label: 'خدعوك فقالو',
        icon: 'deceived',
        screen: 'Deceived',
      },
      {
        key: '11',
        label: 'اخبار الصحة',
        icon: 'healthNews',
        screen: 'HealthNews',
      },
    ],
  },
  {
    title: 'الحاسبات',
    data: [
      {
        key: '1',
        label: 'الحمل و الولادة',
        icon: 'pregnancyAndBirht',
        screen: 'PregnancyAndBirth',
      },
      {
        key: '2',
        label: 'مراحل تطور الجنين ',
        icon: 'mentalHealth',
        screen: 'MedicineReminder',
      },
      {
        key: '3',
        label: 'قياس النظر',
        icon: 'beauty',
        screen: 'Beauty',
      },
      {
        key: '4',
        label: 'السعرات الحرارية',
        icon: 'eyes',
        screen: 'EyeClinic',
      },
      {
        key: '5',
        label: 'مؤشر كتلة الجسم',
        icon: 'chronicDiseases',
        screen: 'ChronicDiseases',
      },
      {
        key: '6',
        label: 'فترة الاباضة و الخصوبة',
        icon: 'OvulationAndFertility',
        screen: 'SexualHealth',
      },
      {
        key: '7',
        label: 'خطر الاصابة بالسكري',
        icon: 'investigationsAndDialogues',
        screen: 'InvestigationsAndDialogues',
      },
      {
        key: '8',
        label: 'تذكير بالدواء',
        icon: 'healthCase',
        screen: 'MedicineReminder',
      },
    ],
  },
  {
    title: 'الامومة و الطفل',
    data: [
      {
        key: '1',
        label: 'الامومة و الطفل',
        icon: 'motherhoodAndChild',
        screen: 'TipsAndAdvice',
      },
      {
        key: '2',
        label: 'مراحل تطور الجنين',
        icon: 'mentalHealth',
        screen: 'MentalHealth',
      },
      {
        key: '3',
        label: 'صحة طفلك',
        icon: 'childHealth',
        screen: 'Beauty',
      },
      {
        key: '4',
        label: 'مراحل الحمل',
        icon: 'motherhoodAndChild',
        screen: 'EyeClinic',
      },
      {
        key: '5',
        label: 'اطفال حديثي الولادة',
        icon: 'chronicDiseases',
        screen: 'ChronicDiseases',
      },

      {
        key: '7',
        label: 'خطواتك نحو الامومة',
        icon: 'motherhoodAndChild',
        screen: 'InvestigationsAndDialogues',
      },
      {
        key: '8',
        label: 'الحمل و الولادة',
        icon: 'pregnancyAndBirht',
        screen: 'DentalClinic',
      },
      {
        key: '9',
        label: 'فترة الاباضة و الخصوبة',
        icon: 'OvulationAndFertility',
        screen: 'MotherhoodAndChild',
      },
    ],
  },
];

export const calculators: SectionsSection[] = [
  {
    title: 'Calculators',
    data: [
      {
        key: '1',
        label: 'اختبار قياس النظر',
        screen: 'Calculator',
      },
      {
        key: '1',
        label: 'اختبار قياس النظر',
        screen: 'Calculator',
      },
      {
        key: '1',
        label: 'اختبار قياس النظر',
        screen: 'Calculator',
      },
      {
        key: '1',
        label: 'اختبار قياس النظر',
        screen: 'Calculator',
      },
      {
        key: '1',
        label: 'اختبار قياس النظر',
        screen: 'Calculator',
      },
      {
        key: '1',
        label: 'اختبار قياس النظر',
        screen: 'Calculator',
      },
      {
        key: '1',
        label: 'اختبار قياس النظر',
        screen: 'Calculator',
      },
      {
        key: '1',
        label: 'اختبار قياس النظر',
        screen: 'Calculator',
      },
      {
        key: '1',
        label: 'اختبار قياس النظر',
        screen: 'Calculator',
      },
      {
        key: '1',
        label: 'اختبار قياس النظر',
        screen: 'Calculator',
      },
      {
        key: '1',
        label: 'اختبار قياس النظر',
        screen: 'Calculator',
      },
    ],
  },
];

import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import Text from '../../components/shared/Text';
import RenderIcon from '../../components/shared/RenderIcon';
import LogoPrimary from '../../images/logos/logoPrimary.png';
import LogoPink from '../../images/logos/logoPink.png';
interface Page {
  image: any;
  description: string;
}

const OnboardingScreen: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const navigation = useNavigation();

  const pages: Page[] = [
    {
      image: require('../../images/onboarding/firstSlide.png'),
      description: `كونسلتو يساعدك علي التذكرة بموعد الدواء لا تفوت جرعة.تتزامن التذكيرات مع ${'\n'}أجهزتك المحمولة${'\n'} الأخرى عند تسجيل الدخول بحسابك`,
    },
    {
      image: require('../../images/onboarding/secSlide.png'),
      description: `كونسلتو يساعدك علي  ${'\n'}حساب مؤشر كتلة الجسم و حساب السعرات الحراريه التي يحتاجها الجسم و احتياج المياه`,
    },
    {
      image: require('../../images/onboarding/fourthSlide.png'),
      description:
        'كونسلتو يساعدك علي تحديد موعد الولادة قد تساعد التطبيقات الصحية للأجهزة المحمولة في الحفاظ على رضا النساء عن رعايتهن السابقة للولادة.',
    },
    {
      image: require('../../images/onboarding/thirdSlide.png'),
      description:
        ' حاسبة فترة الاباضة و هذة الحاسبة تساعدك على إكتشاف أكثر الأوقات التي تكون بها خصوبتك مرتفعة وتساعدك على مضاعفة فرصك في حدوث الحمل كونسلتو يساعدك علي حساب فترة الاباضة',
    },
  ];

  const totalPages: number = pages.length;

  const renderPage = (page: Page, index: number): JSX.Element => (
    <LinearGradient
      colors={['rgba(255, 255, 255, 0.38)', 'rgba(255, 255, 255, 0.00)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      key={index}
      style={styles.pageContainer}>
      <Image source={page.image} style={styles.image} />
      <Text style={styles.description} bold size={14}>
        {page.description}
      </Text>
    </LinearGradient>
  );

  const handleNext = (): void => {
    if (currentPage < totalPages - 1) {
      pagerRef.current?.setPage(currentPage + 1);
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate('Login' as never);
    }
  };
  const handleSkipToEnd = (): void => {
    if (currentPage < totalPages - 1) {
      pagerRef.current?.setPage(totalPages - 1);
      setCurrentPage(totalPages - 1);
    } else {
      navigation.navigate('Login' as never);
    }
  };
  const pagerRef = useRef<PagerView>(null);

  return (
    <LinearGradient
      style={styles.container}
      colors={
        currentPage <= 1
          ? ['#1A394D', '#74D1D0']
          : ['rgba(72, 39, 54, 1)', 'rgba(182, 107, 138, 1)']
      }>
      <View style={styles.logo}>
        <Image
          source={currentPage <= 1 ? LogoPrimary : LogoPink}
          style={{ width: 185, height: 47, objectFit: 'cover' }}
        />
      </View>
      <PagerView
        style={styles.viewPager}
        initialPage={0}
        onPageSelected={(event) => setCurrentPage(event.nativeEvent.position)}
        ref={pagerRef}>
        {pages.map((page, index) => (
          <View key={index}>{renderPage(page, index)}</View>
        ))}
      </PagerView>

      <View style={styles.progressContainer}>
        {[...Array(totalPages)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressBar,
              {
                backgroundColor: index <= currentPage ? '#048482' : '#73D2D3',
              },
            ]}
          />
        ))}
      </View>
      <TouchableOpacity
        style={[
          styles.nextButton,
          {
            backgroundColor:
              currentPage <= 1 ? '#15A09E' : 'rgba(74, 41, 55, 0.61);',
          },
        ]}
        onPress={handleNext}>
        <Text style={styles.buttonText}>
          <RenderIcon iconName="rightArrow2" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 30, alignSelf: 'flex-end', marginRight: '11%' }}
        onPress={handleSkipToEnd}>
        <Text bold style={{ color: '#fff' }} size={17}>
          تخطي
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#000',
  },
  viewPager: {
    flex: 2,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12.678,
    borderColor: 'rgba(255, 255, 255, 0.30)',
    borderWidth: 1.902,
    padding: 10,
    width: '80%',
    marginLeft: '10%',
  },
  logo: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 250,
    marginBottom: 20,
    objectFit: 'contain',
  },
  description: {
    textAlign: 'center',
    color: '#fff',
  },
  nextButton: {
    width: 76,
    height: 76,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    flex: 0.3,
  },
  progressBar: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default OnboardingScreen;

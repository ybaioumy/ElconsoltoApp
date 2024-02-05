import { ReactElement } from 'react';

export type ArticleComponentProps = {
  imageSource: string;
  heading: string;
  title: string;
  description: string;
  vertical?: boolean;
  onPress: () => void;
};

export type ArticleItemProps = {
  id: number;
  heading: string;
  description: string;
  imageSource: string;
  title: string;
  authorName?: string | undefined;
};

export type ArticleScreenRouteParams = {
  articleData: ArticleItemProps;
};
export type CustomTextProps = {
  style?: any;
  children?: any;
  isColorPrimary?: boolean;
  size?: number | undefined;
  bold?: boolean;
};
export type ModalFunctions = {
  handleDismissPress: () => void;
  handleClosePress: () => void;
  handleExpandPress: () => void;
  handleCollapsePress: () => void;
  handlePresentPress: () => void;
};
export type TextInputProps = {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  icon: ReactElement;
  searchInput?: boolean | undefined;
  style?: any;
  value?: string;
  onChangeText?: (text: string) => void;
};

export type SectionItem = {
  key: string;
  label: string;
  icon: string;
  screen?: string;
  isLink?: boolean;
  linkType?: 'email' | 'phone';
};

export type Section = {
  title: string;
  data: SectionItem[];
};

export type SettingItem = {
  key: string;
  label: string;
  icon: string;
  screen: string;
};
export type SettingSection = {
  title: string;
  data: SettingItem[];
};

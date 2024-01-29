export type ArticleComponentProps = {
  imageSource: string;
  heading: string;
  description: string;
  vertical?: boolean;
};

export type ArticleItemProps = {
  id: number;
  heading: string;
  description: string;
  imageSource: string;
};

export type ModalFunctions = {
  handleDismissPress: () => void;
  handleClosePress: () => void;
  handleExpandPress: () => void;
  handleCollapsePress: () => void;
  handlePresentPress: () => void;
};

import * as React from 'react';
type PreviewImage = {
  caption?: string;
  captionStyle?: object;
  overlay?: () => React.ReactElement<any>;
  thumbnail?: string;
  url: string;
};
export type Props = {
  backgroundColor?: string;
  extra?: string | undefined;
  images: PreviewImage[] | String[] | any[];
  style?: object;
  title?: string | undefined;
  width?: string | number;
  onImageListItemTap?(index: number): void; // shares updates with parent
};
declare class State {
  modalVisible: boolean;
  activeImageIndex: number;
}
export default class PreviewGrid extends React.Component<Props, State> {
  static defaultProps: {
    backgroundColor: string;
    extra: undefined;
    style: {};
    title: undefined;
    width: string;
  };
  state: State;
  showImageListModal: (modalVisible: boolean, activeImageIndex: number) => void;
  lessThanFourImages: () => JSX.Element;
  fourImages: () => JSX.Element;
  moreThanFourImages: () => JSX.Element;
  render(): JSX.Element;
}

export {};

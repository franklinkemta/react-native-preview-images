import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import Img from '../Img';
import { BackIcon } from '../Icons';
import styles from './styles';

// added save area view dependenciy
import { SafeAreaView } from 'react-native-safe-area-context';

class ImageList extends Component {
  componentDidMount() {
    const { index } = this.props;
    setTimeout(() => {
      this.scrollView.scrollTo({
        y: index * Dimensions.get('window').width,
      });
    }, 0);
  }

  handleItemPress = (indexOfImg) => {
    // added custum even to inform the parent about the image press event
    this.props.onImageListItemTap
      ? this.props.onImageListItemTap(indexOfImg)
      : undefined;
  };

  renderBackBtn = () => {
    const { setModalVisible, title } = this.props;

    return (
      <View style={styles.backBtnView}>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={styles.backBtnTouchableOpacity}
        >
          <Image
            source={{ uri: BackIcon }}
            resizeMode="contain"
            style={styles.backBtnIcon}
          />
        </TouchableOpacity>
        {title ? <Text style={styles.title}> {title}</Text> : null}
      </View>
    );
  };

  renderImages = () => {
    const { images, backgroundColor } = this.props;
    const imagesToRender = images.map((img, i) => (
      <TouchableOpacity
        key={`List-Image-${i + 1}`}
        style={[styles.clickableImg, { backgroundColor }]}
        onPress={() => this.handleItemPress(i)}
        activeOpacity={0.8}
      >
        <Img image={img} />
      </TouchableOpacity>
    ));
    return imagesToRender;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderBackBtn()}
        <ScrollView ref={(view) => (this.scrollView = view)}>
          {this.renderImages()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

ImageList.defaultProps = {
  backgroundColor: 'transparent',
  index: 0,
  setModalVisible: () => {},
  title: undefined,
  onImageListItemTap: () => {}, // share image list item click to parent
};

ImageList.propTypes = {
  backgroundColor: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.shape({
        caption: PropTypes.string,
        captionStyle: PropTypes.shape({}),
        overlay: PropTypes.element,
        thumbnail: PropTypes.string,
        url: PropTypes.string.isRequired,
      }).isRequired,
    ]),
  ).isRequired,
  index: PropTypes.number,
  setModalVisible: PropTypes.func,
  title: PropTypes.string,
  onImageListItemTap: PropTypes.func,
};

export default ImageList;

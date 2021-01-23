import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Modal } from 'react-native';
import PropTypes from 'prop-types';

import Img from '../Img';
import ImageList from '../ImageList';
import styles from './styles';
class PreviewGrid extends Component {
  state = {
    activeImageIndex: 0,
    modalVisible: false,
  };

  showImageListModal = (modalVisible, activeImageIndex) => {
    this.setState({ activeImageIndex, modalVisible });
  };

  lessThanFourImages = () => {
    const { images, backgroundColor, title, extra } = this.props;
    const { modalVisible } = this.state;

    const allImages = (
      <View style={[styles.imageContainer, { backgroundColor }]}>
        <View style={styles.flexRow}>
          {images.map((image, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => this.showImageListModal(!modalVisible, i)}
              activeOpacity={0.8}
              style={styles.flexOne}
            >
              <Img
                hideCaption={images.length !== 1}
                style={styles.flexOne}
                image={image}
              />
            </TouchableOpacity>
          ))}
        </View>
        {extra && <Text style={styles.extraStyle}>{extra}</Text>}
      </View>
    );

    return allImages;
  };

  fourImages = () => {
    const { images, backgroundColor, title, extra } = this.props;
    const { modalVisible } = this.state;

    return (
      <View style={[styles.imageContainer, { backgroundColor }]}>
        <View style={styles.fourImagesInnerView}>
          {images.map((image, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => this.showImageListModal(!modalVisible, i)}
              activeOpacity={0.8}
              style={styles.flexBasisHalf}
            >
              <Img hideCaption image={image} />
            </TouchableOpacity>
          ))}
        </View>
        {extra && <Text style={styles.extraStyle}>{extra}</Text>}
      </View>
    );
  };

  moreThanFourImages = () => {
    const { images, backgroundColor, title, extra } = this.props;
    const { modalVisible } = this.state;

    return (
      <View style={[styles.imageContainer, { backgroundColor }]}>
        <View style={styles.moreThanFourImagesInnerView}>
          <TouchableOpacity
            onPress={() => this.showImageListModal(!modalVisible, 0)}
            activeOpacity={0.8}
            style={styles.flexBasisHalf}
          >
            <Img hideCaption image={images[0]} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.showImageListModal(!modalVisible, 1)}
            activeOpacity={0.8}
            style={styles.flexBasisHalf}
          >
            <Img hideCaption image={images[1]} />
          </TouchableOpacity>
        </View>

        <View style={styles.moreThanFourImagesInnerView}>
          <TouchableOpacity
            onPress={() => this.showImageListModal(!modalVisible, 2)}
            activeOpacity={0.8}
            style={styles.flexBasisHalf}
          >
            <Img hideCaption image={images[2]} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.showImageListModal(!modalVisible, 3)}
            activeOpacity={0.8}
            style={styles.flexBasisHalf}
          >
            <View style={styles.moreImagesOverlayContainer}>
              <View style={styles.moreImagesOverlay}>
                <Text style={styles.imagesCount}>+{images.length - 3}</Text>
              </View>
              <Img hideCaption image={images[3]} />
            </View>
          </TouchableOpacity>
        </View>
        {extra && <Text style={styles.extraStyle}>{extra}</Text>}
      </View>
    );
  };

  render() {
    const { backgroundColor, images, style, title, width } = this.props;
    const { activeImageIndex, modalVisible } = this.state;

    return (
      <ScrollView
        style={[{ backgroundColor: '#fff', flexGrow: 1 }, style, { width }]}
      >
        {images.length < 4 && this.lessThanFourImages()}
        {images.length === 4 && this.fourImages()}
        {images.length > 4 && this.moreThanFourImages()}
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            this.showImageListModal(!modalVisible, 0);
          }}
        >
          <ImageList
            onImageListItemTap={(item) => this.props.onImageListItemTap(item)}
            index={activeImageIndex}
            backgroundColor={backgroundColor}
            setModalVisible={this.showImageListModal}
            images={images}
            title={title}
          />
        </Modal>
      </ScrollView>
    );
  }
}

PreviewGrid.defaultProps = {
  backgroundColor: 'transparent',
  extra: undefined,
  style: {},
  title: undefined,
  width: '100%',
  onImageListItemTap: () => {}, // share image list item click to parent
};

PreviewGrid.propTypes = {
  backgroundColor: PropTypes.string,
  extra: PropTypes.string,
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
  style: PropTypes.shape({}),
  title: PropTypes.string,
  width: PropTypes.string,
  onImageListItemTap: PropTypes.func,
};

export default PreviewGrid;

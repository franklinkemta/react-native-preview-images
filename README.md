## THIS IS A FORK FROM <a href="https://github.com/Ovi/react-native-chat-images" target="_blank">react-native-chat-images official Package</a>

# Roadmap

- Remove unecessery dependencies, and update react-native dependencies
- Enhance the Item preview screen header, buttons and appearance
- Add Custom ImageList onPress event to display a custom component or make a custom action on ImageList Item press
- Remove the dependency to react-native-image-viewer package
- Update Readme and Documentation.
- Publish a realease !

# react-native-preview-images

> A **React Native** library to show images in a preview grid with custom actions !

[![NPM](https://img.shields.io/npm/v/react-native-preview-images.svg)](https://www.npmjs.com/package/react-native-preview-images)
[![NPM](https://img.shields.io/github/license/ovi/react-native-preview-images.svg)](https://www.npmjs.com/package/react-native-preview-images)

</p>

<h3 align="center">
  React Native Preview Images
</h3>


## ChangeLog

You can find the complete changelog [on this file](/ChangeLog.md).

## Install

```bash
npm i -S react-native-preview-images
```

OR

```bash
yarn add react-native-preview-images
```

## Props

| Props                                         |                                                          Type                                                          |    Default     |               Example                |
| :-------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------: | :------------: | :----------------------------------: |
| [images](#props--images--array-of-objects) \* | array of [strings](#prop--images-array-of-strings) <br /> OR <br /> array of [objects](#prop--images-array-of-objects) |  **required**  |         [Samples](#samples)          |
| extra                                         |                                                         string                                                         |  `undefined`   |             `'03:30 AM'`             |
| title                                         |                                                         string                                                         |  `undefined`   |         `'Title of Images'`          |
| style                                         |                                                         object                                                         |      `{}`      |                                      |
| backgroundColor                               |                                                         string                                                         | `'lightgreen'` | `'red'` <br /> OR <br /> `'#ff0000'` |
| width                                         |                                             string <br /> OR <br /> number                                             |    `'100%'`    |    `'50%'` <br /> OR <br /> `360`    |
| onImageListItemTap | number | `undefined` 
> **\*** if you pass array of objects you may also provide some extra information: see > [Image Props](#props--images--array-of-objects)

### Examples

#### Prop > images (array of strings)

```jsx
import React, { Component } from 'react';
import { View } from 'react-native';
import PreviewGrid from 'react-native-preview-images';

export default class App extends Component {
  state = {
    images: ['img_01', 'img_02', 'img_03', '...'],
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <PreviewGrid images={this.state.imgs} />
      </View>
    );
  }
}
```

#### Prop > images (array of objects)

```jsx
import React, { Component } from 'react';
import { View } from 'react-native';
import PreviewGrid from 'react-native-preview-images';

export default class App extends Component {
  state = {
    images: [
      { url: 'img_01' },
      { url: 'img_02' },
      { url: 'img_03' },
      { url: '...' },
    ],
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <PreviewGrid images={this.state.images} />
      </View>
    );
  }
}
```

## Props > images > array of objects

| Props        |         Type         | Required |
| :----------- | :------------------: | :------: |
| url          |    string (`url`)    | **yes**  |
| thumbnail    |    string (`url`)    |    no    |
| caption      |        string        |    no    |
| captionStyle |        object        |    no    |
| overlay      | `ReactNativeElement` |    no    |

## License

MIT © [Ovi](https://github.com/Ovi) | [License](/LICENSE)

---
title: Introduction
sidebar_label: Introduction
---

[![package-badge]][package]
[![license-badge]][license]
[![coverage-badge]][coverage]
[![semantic-release-badge]][semantic-release]
[![discord-badge]][discord]

Vime is simply a collection of [web components][web-components] that enable you to easily build and
customize your own media player.

- 🎥 &nbsp;[Multi-provider support](#-providers) (HTML5, HLS, YouTube, Vimeo etc.).
- 👑 &nbsp; One API to rule them all! Don't re-learn anything the next time you need a player.
- ♾️ &nbsp;Avoid cross-browser differences on media related APIs, such as fullscreen and picture-in-picture.
- 👐 &nbsp;[Accessible][accessibility] to all via ARIA roles/states/properties and keyboard support.
- 🌎 &nbsp;I18N support.
- 🖥 &nbsp;Designed witn both mobile and desktop in mind.
- 👌 &nbsp;Touch input friendly.
- 🎨 &nbsp;Style anything you want with [CSS variables][css-vars]. Default [light][light-theme] and
  [dark][dark-theme] themes are included.
- 🏎️ &nbsp;Performant with [preconnections][preconnections] + [lazy loading][lazy-loading] of components
  and media out of the box.
- 🗑️ &nbsp; Lightweight - ~25kB (gzip) without custom UI, and ~47kB with the default Vime UI.
- ️🧰 &nbsp;Awesome default custom UI's for audio/video/live media.
- 🛠 &nbsp;Comprehensive [player API][player-api] with a heap of properties, methods and events.
- 💪 &nbsp;Built with TypeScript so you can enjoy completely typed components.
- 🏠 &nbsp;Feel right at home with HTML/CSS/JS thanks to web components.
- 🏗️ &nbsp;Framework specific bindings for React, Vue and Angular.

[web-components]: https://developer.mozilla.org/en-US/docs/Web/Web_Components
[accessibility]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
[css-vars]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
[light-theme]: https://github.com/vime-js/vime/blob/master/packages/core/src/globals/themes/light.css
[dark-theme]: https://github.com/vime-js/vime/blob/master/packages/core/src/globals/themes/default.css
[player-api]: https://vimejs.com/components/core/player/api
[preconnections]: https://css-tricks.com/using-relpreconnect-to-establish-network-connections-early-and-increase-performance
[lazy-loading]: https://www.imperva.com/learn/performance/lazy-loading

🍭 Here's a few little bites of what you can do with Vime ...

```html
<!-- Here we are requesting to use the native controls. -->
<vime-player autoplay muted controls>
  <vime-video poster="/media/poster.png" cross-origin>
    <!-- Why `data-src`? Lazy loading. You can always use `src` if you don't need it. -->
    <source data-src="/media/video.mp4" type="video/mp4" />
    <track
      default
      kind="subtitles"
      src="/media/subs/en.vtt"
      srclang="en"
      label="English"
    />
  </vime-video>
</vime-player>
```

_Custom UI?_

```html
<!-- Lets add a little splash of color throughout the player. -->
<vime-player style="--player-theme: #1873d3" autoplay muted>
  <!-- Loading a YouTube video. -->
  <vime-youtube video-id="DyTCOwB0DVw" />

  <vime-ui>
    <vime-click-to-play />
    <vime-captions />
    <vime-poster />
    <vime-spinner />
    <vime-default-settings />
    <vime-controls pin="bottomLeft" active-duration="2750" full-width>
      <!-- 
        These are all predefined controls that you can easily customize. You could also build 
        your own controls completely from scratch.
      -->
      <vime-playback-control tooltip-direction="right" />
      <vime-volume-control />
      <vime-time-progress />
      <vime-control-spacer />
      <vime-caption-control />
      <vime-pip-control keys="p" />
      <vime-settings-control />
      <vime-fullscreen-control keys="f" tooltip-direction="left" />
    </vime-controls>
  </vime-ui>
</vime-player>
```

_In a hurry?_

```html
<!-- Light themed audio player. -->
<vime-player theme="light" autoplay muted>
  <vime-audio cross-origin>
    <source data-src="/media/audio.mp3" type="audio/mp3" />
  </vime-audio>

  <!-- Loads the default Vime UI. -->
  <vime-default-ui />
</vime-player>
```

## 🏗️ Frameworks

There are framework specific bindings for:

- [React](../install/react.md)
- [Vue](../install/vue.md)
- [Angular](../install/angular.md)

Keep in mind, that at its core Vime is still simply web components. Even if your framework is
not mentioned in the list above, it most likely still supports Vime natively. You can check
[here](https://custom-elements-everywhere.com/) if your framework has complete support for
web components.

There are also [examples](https://github.com/vime-js/vime/tree/master/examples) for loading and
using Vime with:

- [HTML](https://github.com/vime-js/vime/tree/master/examples/html)
- [React](https://github.com/vime-js/vime/tree/master/examples/react)
- [Vue](https://github.com/vime-js/vime/tree/master/examples/vue)
- [Angular](https://github.com/vime-js/vime/tree/master/examples/angular)
- [Svelte](https://github.com/vime-js/vime/tree/master/examples/svelte)

## 🖥️ Browsers

Vime is forward thinking and built for the modern web. All
[ES6 Compatible](https://caniuse.com/#feat=es6-module) browsers are supported, some of which are
listed below.

- Edge 79+
- Firefox 68+
- Chrome 61+
- Safari 11+
- iOS Safari 11+
- Opera 48+

## 🎥 Providers

- [HTML5](../components/providers/file/readme.md)
- [HLS](../components/providers/hls/readme.md)
- [Dash](../components/providers/dash/readme.md)
- [YouTube](../components/providers/youtube/readme.md)
- [Vimeo](../components/providers/vimeo/readme.md)
- [Dailymotion](../components/providers/dailymotion/readme.md)

## 📖 Documentation

Documentation can be found at [https://vimejs.com](https://vimejs.com).

❓ _Looking for V1 docs? -> https://v1.vimejs.com_

## 🙋 Support

Feel free to join our [Discord channel][discord] if you'd like help with anything related to Vime.
Please remember to be respectful and patient as this is a community driven project.

## 🔨 Contributing

If you'd like to contribute and help in building a better media player for the web, then everything
you need to get started can be found in the [Contributing Guide](https://github.com/vime-js/vime/blob/master/CONTRIBUTING.md).

## ❤️ Sponsors

A huge thanks to our sponsors who support open-source projects like Vime.

<a href="https://zeit.co">
  <img
    width="100%"
    alt="zeit now"
    src="https://github.com/vime-js/vime/blob/master/static/sponsors/zeit.png?raw=true"
  />
</a>

[package]: https://www.npmjs.com/package/@vime/core
[package-badge]: https://img.shields.io/npm/v/@vime/core
[license]: https://github.com/vime-js/vime/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/vime-js/vime?color=blue
[semantic-release]: https://github.com/semantic-release/semantic-release
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[coverage-badge]: https://img.shields.io/codecov/c/github/mihar-22/vime.svg
[coverage]: https://codecov.io/github/mihar-22/vime
[discord]: https://discord.gg/feZ6cAE
[discord-badge]: https://img.shields.io/discord/742612686679965696.svg?color=7389D8&labelColor=6A7EC2&logo=discord&logoColor=ffffff

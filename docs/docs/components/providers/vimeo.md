---
title: vime-vimeo
sidebar_label: Vimeo
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Enables loading, playing and controlling videos from [Vimeo](https://www.vimeo.com).

> You don't interact with this component for passing player properties, controlling playback, listening to player events and so on, that is all done through the `vime-player` component.

## Quirks

- Only [Vimeo PRO](https://vimeo.com/professionals) members can set/change the playbackRate.

- `playbackQuality` and `playbackQualities` are not supported because there is no API for it.

<!-- Auto Generated Below -->

## Usage

<Tabs
groupId="framework"
defaultValue="html"
values={[
{ label: 'HTML', value: 'html' },
{ label: 'React', value: 'react' },
{ label: 'Vue', value: 'vue' },
{ label: 'Svelte', value: 'svelte' },
{ label: 'Angular', value: 'angular' }
]}>

<TabItem value="html">

```html {2}
<vime-player controls>
  <vime-vimeo video-id="411652396"></vime-vimeo>
  <!-- ... -->
</vime-player>
```

</TabItem>


<TabItem value="react">

```tsx {2,7}
import React from 'react';
import { VimePlayer, VimeVimeo } from '@vime/react';

function Example() {
  return render(
    <VimePlayer controls>
      <VimeVimeo videoId="411652396" />
      {/* ... */}
    </VimePlayer>
  );
}
```

</TabItem>


<TabItem value="vue">

```html {3,9,14} title="example.vue"
<template>
  <VimePlayer controls>
    <VimeVimeo videoId="411652396" />
    <!-- ... -->
  </VimePlayer>
</template>

<script>
  import { VimePlayer, VimeVimeo } from '@vime/vue';

  export default {
    components: {
      VimePlayer,
      VimeVimeo,
    },
  };
</script>
```

</TabItem>


<TabItem value="svelte">

```html {2,7} title="example.svelte"
<VimePlayer controls>
  <VimeVimeo videoId="411652396" />
  <!-- ... -->
</VimePlayer>

<script lang="ts">
  import { VimePlayer, VimeVimeo } from '@vime/svelte';
</script>
```

</TabItem>


<TabItem value="angular">

```html {2} title="example.html"
<vime-player controls>
  <vime-vimeo cookies="true" video-id="411652396"></vime-vimeo>
  <!-- ... -->
</vime-player>
```

</TabItem>
    
</Tabs>


## Properties

| Property               | Attribute  | Description                                                                                                      | Type                 | Default     |
| ---------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------- | -------------------- | ----------- |
| `byline`               | `byline`   | Whether to display the video owner's name.                                                                       | `boolean`            | `true`      |
| `color`                | `color`    | The hexadecimal color value of the playback controls. The embed settings of the video might override this value. | `string ∣ undefined` | `undefined` |
| `portrait`             | `portrait` | Whether to display the video owner's portrait.                                                                   | `boolean`            | `true`      |
| `videoId` _(required)_ | `video-id` | The Vimeo resource ID of the video to load.                                                                      | `string`             | `undefined` |

## Dependencies

### Depends on

- [vime-embed](../core/embed.md)

### Graph

```mermaid
graph TD;
  vime-vimeo --> vime-embed
  style vime-vimeo fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_

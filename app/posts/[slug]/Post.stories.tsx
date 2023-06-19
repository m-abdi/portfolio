import { ComponentMeta, ComponentStory } from '@storybook/react';

import Post from './Post';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/Button',
  component: Post,
} as ComponentMeta<typeof Post>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  data: {
    id: 1,
    attributes: {
      slug: 'title',
      title: 'title',
      subtitle: 'subtitle',
      content: 'content',
    },
  },
};

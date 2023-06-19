import { ComponentMeta, ComponentStory } from '@storybook/react';

import Comments from './Comments';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Composite/Button',
  component: Comments,
} as ComponentMeta<typeof Comments>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Comments> = (args) => (
  <Comments {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  data: [],
};

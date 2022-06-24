import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BlogItem from '.';

export default {
  title: 'Example/BlogItem',
  component: BlogItem,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof BlogItem>;

const Template: ComponentStory<typeof BlogItem> = (args) => (
  <BlogItem {...args} />
);
export const Item = Template.bind({});
Item.args = {
  article: {
    id: 'test id',
    createdAt: '1999/11/08',
    updatedAt: '1999/11/08',
    title: 'test title',
    body: 'test body test bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest bodytest body',
    isPublished: true,
    tags: ['javascript', 'typescript'],
    publishedAt: '1999/11/08',
    revisedAt: '1999/11/08',
  },
};

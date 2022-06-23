import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleType } from '@/types/types';

import ArticleInfo from '.';

export default {
  title: 'Example/ArticleInfo',
  component: ArticleInfo,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ArticleInfo>;

const Template: ComponentStory<typeof ArticleInfo> = (args) => (
  <ArticleInfo {...args} />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  article: {
    id: 'test id',
    createdAt: '1999/11/08',
    updatedAt: '1999/11/08',
    title: 'test title',
    body: 'test body',
    isPublished: true,
    tags: [],
    publishedAt: '1999/11/08',
    revisedAt: '1999/11/08',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

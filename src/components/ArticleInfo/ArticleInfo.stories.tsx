import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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

export const Article = Template.bind({});
Article.args = {
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

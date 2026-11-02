export type { ForumComment, ForumPost } from './forum/types';
import type { ForumPost } from './forum/types';
import { enForumPosts } from './forum/en-posts';

export const forumCategories = [
  { name: 'MW4 Discussion', tone: 'purple', icon: 'layers' },
  { name: 'MW4 Features', tone: 'blue', icon: 'layers' },
  { name: 'Buying Advice', tone: 'purple', icon: 'tag' },
  { name: 'Technical Support', tone: 'green', icon: 'headphones' },
  { name: 'Technical Discussion', tone: 'blue', icon: 'shieldCheck' },
  { name: 'Software Discussion', tone: 'purple', icon: 'tag' },
  { name: 'Announcements and Updates', tone: 'orange', icon: 'refresh' },
  { name: 'Gameplay Questions', tone: 'blue', icon: 'tag' },
  { name: 'Product Questions', tone: 'purple', icon: 'tag' },
  { name: 'Setup & Support', tone: 'green', icon: 'headphones' },
  { name: 'Game Updates', tone: 'orange', icon: 'refresh' },
  { name: 'Features & Customization', tone: 'blue', icon: 'layers' },
  { name: 'Account & PC Questions', tone: 'green', icon: 'shieldCheck' },
  { name: 'PC Performance & Support', tone: 'orange', icon: 'headphones' },
] as const;

export const forumPosts: ForumPost[] = enForumPosts;

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}

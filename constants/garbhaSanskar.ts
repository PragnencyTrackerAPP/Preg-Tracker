// constants/garbhaSanskar.ts

// Categories
export const CATEGORIES = ['All', 'Emotional', 'Physical', 'Spiritual'];

// Import PNG images
export const ACTIVITY1_PNG = require('@/assets/garbha-sanskar/activity1.png');
export const ACTIVITY2_PNG = require('@/assets/garbha-sanskar/activity2.png');
export const ACTIVITY3_PNG = require('@/assets/garbha-sanskar/activity3.png');


// Sample activities using the PNG images
export const SAMPLE_ACTIVITIES = [
  {
    id: '1',
    title: 'What is Garbha Sanskar?',
    subtitle: 'Introduction to ABC Yoga',
    thumbnail: ACTIVITY1_PNG,
    type: 'Video',
    duration: '2:48 min',
    category: 'All',
  },
  {
    id: '2',
    title: 'What is Garbha Sanskar?',
    subtitle: 'Introduction to ABC Yoga',
    thumbnail: ACTIVITY2_PNG,
    type: 'Article',
    duration: '2 min read',
    category: 'All',
  },
  {
    id: '3',
    title: 'What is Garbha Sanskar?',
    subtitle: 'Introduction to ABC Yoga',
    thumbnail: ACTIVITY3_PNG,
    type: 'Video',
    duration: '2:48 min',
    category: 'All',
  },
  {
    id: '4',
    title: 'The power of positive womb',
    subtitle: 'Introduction to ABC Yoga',
    thumbnail: ACTIVITY1_PNG,
    type: 'Video',
    duration: '2:48 min',
    category: 'All',
  },
];

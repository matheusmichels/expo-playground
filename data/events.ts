import {
  randImg,
  randAvatar,
  randPastDate,
  randAddress,
  randText,
} from '@ngneat/falso';

export type Event = {
  title: string;
  location: string;
  date: number;
  photos: string[];
  videos: string[];
};

export const events: Event[] = new Array(5)
  .fill('')
  .map((_, index) => ({
    title: randText(),
    date: randPastDate().getFullYear() - index,
    location: randAddress().county,
    photos: new Array(3).fill('').map(() => randImg()),
    videos: new Array(3).fill('').map(() => randAvatar()),
  }))
  .reverse();

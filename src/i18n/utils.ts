import type { Locale } from './ui';

export const localePath = (locale: Locale) => (locale === 'en' ? '/' : '/pt/');

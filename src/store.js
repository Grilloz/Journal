import { readable, writable } from 'svelte/store';
import { startOfWeek, startOfMonth, formatISO } from 'date-fns';

export const ToDay = readable(formatISO(new Date(), {representation: 'date'}));
export const ThisWeek = readable(formatISO(startOfWeek(new Date()), {representation: 'date'}));
export const ThisMonth = readable(formatISO(startOfMonth(new Date()), {representation: 'date'}));

export const StartingPage = writable("/journalsummary");

export let User = writable();
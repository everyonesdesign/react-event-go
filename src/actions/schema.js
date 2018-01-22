import { schema } from 'normalizr';

export const event = new schema.Entity('events'); 
export const arrayOfEvents = [event];
import events from './eventsMock';

export const getEvents = () => {
    return Promise.resolve( events );
}
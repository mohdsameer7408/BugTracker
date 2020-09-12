import * as actions from './actionTypes';

export const addBug = description => {
    return {
        type: actions.BUG_ADDED,
        payload: { description },
    };
};

export const removeBug = bugId => {
    return {
        type: actions.BUG_REMOVED,
        payload: { id: bugId },
    };
};

export const resolveBug = id => ({
    type: actions.BUG_RESOLVED,
    payload: { id },
})

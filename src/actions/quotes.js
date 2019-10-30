// TODO: Create action creators as defined in tests
import ACTION_TYPES from './types';

export const addQuote = (quote) => {
    return {
        type: ACTION_TYPES.ADD_QUOTE,
        quote
    }
}

export const removeQuote = (quoteId) => {
    return {
        type: ACTION_TYPES.REMOVE_QUOTE,
        quoteId
    }
}

export const upvoteQuote = (quoteId) => {
    return {
        type: ACTION_TYPES.UPVOTE_QUOTE,
        quoteId
    }
}

export const downvoteQuote = (quoteId) => {
    return {
        type: ACTION_TYPES.DOWNVOTE_QUOTE,
        quoteId
    }
}
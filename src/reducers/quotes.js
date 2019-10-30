import ACTION_TYPES from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_QUOTE:
      if (action.quote.votes) return [...state, {...action.quote}]
      return [...state, {...action.quote, votes: 0}]
      
  
    case ACTION_TYPES.REMOVE_QUOTE:
      return state.filter(quote => quote.id !== action.quoteId)

    case ACTION_TYPES.UPVOTE_QUOTE:
      return state.map(q => {
        if (q.id === action.quoteId) return {...q, votes: q.votes+1}
        return q
      })

    case ACTION_TYPES.DOWNVOTE_QUOTE:
      return state.map(q => {
        if (q.id === action.quoteId && q.votes > 0) return {...q, votes: q.votes-1}
        return q
      })

    default:
      return state;
  }
}

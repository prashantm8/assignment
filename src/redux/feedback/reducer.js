import { FeedbackActionTypes } from './actions';

const defaultState = {
    feedbackQuestionnaire: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case FeedbackActionTypes.getFeedbackQuestionnaire:
            return {
                ...state,
                feedbackQuestionnaire:action.data
            };

        default:
            return state;
    }
};

import questionnaire from '../../mockData/questionnaire.json'
import { normalizeData } from '../../utils/appUtils.js';
export const FeedbackActionTypes = {
    getFeedbackQuestionnaire : "getFeedbackQuestionnaire/feedback",
}

export const getFeedbackData = () => {
    return {
        type: FeedbackActionTypes.getFeedbackQuestionnaire,
        data: normalizeData(questionnaire.questions,"questionId")
    }
}


import { create } from "zustand";
import { produce } from "immer";

import { advancedState } from "constants/defaultConstants";

export const useAdvancedStore = create(set => ({
    state: {
        ...advancedState
    },
    isError: false,
    sendRequest: false,
    acc: 'WP_013083972.1',
    inputMethod: 'RefSeq',
    apiResult: null,
    apiUUID: null,
    isLoading: false,
    statusCode: null,

    updateStateValue: (field, value) => {
        set(
            produce(draft => {
                draft.state[field] = value;
            })
        )
    },

    setGlobalError: (value) => {
        set(
            produce(draft => {
                draft.isError = value;
            })
        )
    },

    updateApiValue: (field, value) => {
        set(
            produce(draft => {
                draft[field] = value;
            })
        )
    },

    apiSuccess: (data) => {
        set(
            produce(draft => {
                draft.apiResult = data;
                draft.sendRequest = false;
                draft.isLoading = false;
                draft.apiUUID = null;
            })
        )
    },

    apiFailure: () => {
        set(
            produce(draft => {
                draft.isLoading = false;
                draft.apiUUID = null;
                draft.sendRequest = false;
            })
        )
    },

    containerWaiting: (uuid) => {
        set(
            produce(draft => {
                draft.apiUUID = uuid;
                draft.statusCode = 202
            })
        )
    }

}))
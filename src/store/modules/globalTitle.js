import StoreMutationsType from '@/store/StoreMutationsType';

export const GlobalTitleHandler = {
    get(context) {
        return context.$store.getters.title;
    },

    set(context, title) {
        context.$store.commit(StoreMutationsType.SET_GLOBAL_TITLE, title);
    }
};

const state = {
    title: 'Locacar'
};

const getters = {
    title: (state) => {
        return state.title;
    }
};

const mutations = {
    [StoreMutationsType.SET_GLOBAL_TITLE]: (state, title) => {
        state.title = title;
    }
};

export default {
    state,
    getters,
    mutations
};

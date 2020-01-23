let nextTodoId = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const increment = count => {
    return {
        type: 'INCREMENT_COUNT',
        count: ++count
    };
};

export const decrement = count => {
    return {
        type: 'DECREMENT_COUNT',
        count: --count
    };
};
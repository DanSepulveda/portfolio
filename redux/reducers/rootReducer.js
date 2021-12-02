import { combineReducers } from "redux";
import usersReducer from './userReducer'
import projectsReducer from './projectsReducer'
import technologiesReducer from './technologiesReducer'

const rootReducer = combineReducers({
    users: usersReducer,
    projects: projectsReducer,
    technologies: technologiesReducer
});

export default rootReducer;
import { combineReducers } from "redux";
import usersReducer from './userReducer'
import projectsReducer from './projectsReducer'
import technologiesReducer from './technologiesReducer'
import othersReducer from "./othersReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    projects: projectsReducer,
    technologies: technologiesReducer,
    others: othersReducer
});

export default rootReducer;
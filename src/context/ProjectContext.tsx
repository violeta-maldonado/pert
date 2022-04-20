import {createContext} from "react"

const ProjectContext = createContext({
    name: null,
    cost: null
});

export default ProjectContext
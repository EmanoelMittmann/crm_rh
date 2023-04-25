
import type { DefaultMetaProps } from "./types";

const META_PROPS = {
    project_type: null,
    status : null,
    search: '',
    orderField: 'name',
    order: 'ASC',
    paginate: {
        current_page: 1,
        last_page: 1,
    },

} as DefaultMetaProps

const FILTER_OPTIONS = {
    project_type: [],
}
const FILTER_OPTIONS_STATUS = {
    status: [],
}

export default { META_PROPS, FILTER_OPTIONS, FILTER_OPTIONS_STATUS }
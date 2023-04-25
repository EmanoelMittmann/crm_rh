import type { TemplateProps } from "../types";

interface OptionsProps {
    label: string
    callback: () => void
}

interface ConfigProps extends TemplateProps {
  options: OptionsProps[]
}

export interface ProjectProps {
    id: number;
    name: string;
    date_start: string;
    date_end: string;
    date_end_performed: string;
    project_type: {
        id: string;
        name: string;
}
    project_status_id: number;
    status: {
        color: {
            button_color: string;
            text_color: string
            id: number;
            name: string
        }
        id: number;
        is_active: boolean;
        colors_id: number;
        created_at: Date;
        updated_at:Date;
        name: string;  
    }
    team_cost: string;
    date_start_performed: string;
}

export type ShelfProjectsProps = {
    props: ProjectProps
    config: ConfigProps
}
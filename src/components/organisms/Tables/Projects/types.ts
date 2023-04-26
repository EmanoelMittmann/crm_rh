import { ProjectProps} from "types";
import type { TemplateProps } from "../types";

interface OptionsProps {
    label: string
    callback: () => void
}

interface ConfigProps extends TemplateProps {
  options: OptionsProps[]
}

export type ShelfProjectsProps = {
    props: ProjectProps
    config: ConfigProps
}
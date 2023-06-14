import { Section } from "./section"
import { Divider, Main } from "./styles"


export default () => {
    return (
        <Main>
        <Section.OrderOfService/>
        <Divider />
        </Main>
    )
}

export type { FormOrderProps } from './types'


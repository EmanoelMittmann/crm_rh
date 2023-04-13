import ButtonChangeTheme from '../../ButtonChangeTheme'
import { Icon } from './icons'
import {
  ContainerIconGlobal,
  ContainerOffice,
  ContainerIconTop,
  StyleLoginBottom,
  StyleLoginBottomBlue,
  StyleLoginTop,
  StyleLoginTopBlue,
  Container
} from './style'

export const BackgroundCover = () => {
  return (
    <ContainerIconGlobal>
      <ContainerIconTop>
        <StyleLoginTop>
          <Icon.Top />
        </StyleLoginTop>
      </ContainerIconTop>

      <StyleLoginTopBlue>
        <Icon.TopBlue />
      </StyleLoginTopBlue>

      <ButtonChangeTheme />

      <Container>
        <StyleLoginBottom>
          <Icon.Bottom />
        </StyleLoginBottom>

        <StyleLoginBottomBlue>
          <Icon.BottomBlue />
        </StyleLoginBottomBlue>

        <ContainerOffice>
          <Icon.ImgPage />
        </ContainerOffice>
      </Container>
    </ContainerIconGlobal>
  )
}

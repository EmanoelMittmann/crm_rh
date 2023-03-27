import { Dispatch, SetStateAction, useMemo } from 'react'
import { IconRightArrow, IconLeftArrow, HideBox } from 'components/atoms'
import { Button, Main, PagesNumber, Row } from './style'
interface Props {
  last_page: number
  current_page: number
  setCurrent_page: Dispatch<SetStateAction<number>>
}

export const Paginate = ({ current_page, last_page, setCurrent_page }: Props) => {
  const pages = useMemo(() => new Array(last_page).fill(null).map((_, index) => index + 1), [last_page])

  const end = useMemo(() => {
    if (pages.length > 7) return pages.slice(last_page - 3, last_page)

    return pages.slice(3, last_page)
  }, [current_page, last_page])

  const start = useMemo(() => {
    if (current_page - 3 < 0) return pages.slice(0, 3)

    if (current_page >= end[0]) return pages.slice(0, 3)

    return pages.slice(current_page - 3, current_page)
  }, [current_page, last_page])

  const showPrev = current_page > 1
  const showNext = current_page < last_page

  function nextPage() {
    setCurrent_page(current_page + 1)
  }

  function prevPage() {
    setCurrent_page(current_page - 1)
  }

  return (
    <Main>
      <HideBox show={showPrev}>
        <Button onClick={prevPage} title='Voltar à página anterior'>
          <IconLeftArrow />
          Anterior
        </Button>
      </HideBox>

      <Row>
        {start.map((page, index) => (
          <PagesNumber key={index} Active={page === current_page} onClick={() => setCurrent_page(page)}>
            {page}
          </PagesNumber>
        ))}
        <p>...</p>
        {end.map((page, index) => (
          <PagesNumber key={index} Active={page === current_page} onClick={() => setCurrent_page(page)}>
            {page}
          </PagesNumber>
        ))}
      </Row>

      <HideBox show={showNext}>
        <Button onClick={nextPage} title='Avançar para próxima página'>
          Próximo
          <IconRightArrow />
        </Button>
      </HideBox>
    </Main>
  )
}

export type PaginateProps = Props


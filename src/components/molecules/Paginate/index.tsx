import { useMemo, useContext } from 'react'

import { List } from 'contexts'

import {
  IconRightArrow,
  IconLeftArrow,
  HideBox
} from 'components/atoms'

import { Button, Main, PagesNumber, Row } from './style'

export const Paginate = () => {
  const {
    paginate: { current_page, last_page, setCurrent_page }
  } = useContext(List.Settings.Context)

  const pages = useMemo(
    () =>
      new Array(last_page).fill(null).map((_, index) => index + 1),
    [last_page]
  )

  const end = useMemo(() => {
    if (pages.length >= 7)
      return pages.slice(last_page - 3, last_page)

    return pages.slice(3, last_page)
  }, [current_page, last_page])

  const start = useMemo(() => {
    if (current_page - 3 < 0) return pages.slice(0, 3)

    if (current_page >= end[0]) return pages.slice(0, 3)

    return pages.slice(current_page - 3, current_page)
  }, [current_page, last_page])

  const showPrev = current_page > 1
  const showNext = current_page < last_page
  const showSpreed = last_page > 6

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
          <PagesNumber
            key={index}
            Active={page === current_page}
            onClick={() => setCurrent_page(page)}
          >
            {page}
          </PagesNumber>
        ))}
        {showSpreed && <p>...</p>}
        {end.map((page, index) => (
          <PagesNumber
            key={index}
            Active={page === current_page}
            onClick={() => setCurrent_page(page)}
          >
            {page}
          </PagesNumber>
        ))}
      </Row>

      <HideBox show={showNext}>
        <Button
          onClick={nextPage}
          title='Avançar para próxima página'
        >
          Próximo
          <IconRightArrow />
        </Button>
      </HideBox>
    </Main>
  )
}

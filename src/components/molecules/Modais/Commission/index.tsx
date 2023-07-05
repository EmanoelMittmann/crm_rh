import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useContext,
  useMemo,
  useEffect
} from 'react'

import { Input, toast } from '@stardust-ds/react'
import { Button } from '@stardust-ds/react'
import { List } from 'contexts'
import { theme } from 'styles'

import Close from 'components/atoms/Buttons/Close'
import { IconTrash } from 'components/atoms/Icons/IconTrash'
import PaginateCommission from 'components/molecules/Modais/PaginateCommission/paginateCommission'

import { Columns, Row } from '../Edit/style'
import {
  ContainerAbsolute,
  ContainerFooter,
  ContainerLabelProfessional,
  ContainerModal,
  ContainerWap,
  Footer,
  IconButton,
  Overlay,
  TitleComissionProfessional
} from './style'

interface IModalProps {
  text: string
  placeholder: string
  defaultOpened?: boolean
}

export interface IHandleModalPropsCommission {
  open(): void
  close(): void
}

const Commission = forwardRef<
  IHandleModalPropsCommission,
  IModalProps
>((props, ref) => {
  const { text } = props
  const {
    deleteCommission,
    professionalsHaveCommission,
    mergeCommision,
    metaCommision,
    setMetaCommision
  } = useContext(List.OrderOfServiceprofessionalOS.Context)
  const [isOpen, setIsOpen] = useState(false)

  const currentPage = metaCommision.paginate.current_page
  const itemsPerPage = 3
  const totalItems = professionalsHaveCommission.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const paginatedProfessionals = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    return professionalsHaveCommission.slice(startIndex, endIndex)
  }, [currentPage, totalPages, professionalsHaveCommission])

  function handlePaginate() {
    setMetaCommision((old) => {
      const current_page = old.paginate.current_page
      const total_pages = Math.ceil(
        professionalsHaveCommission.length / itemsPerPage
      )
      if (professionalsHaveCommission.length === 0) {
        return {
          ...old,
          paginate: { ...old.paginate, current_page: 1 }
        }
      }

      if (current_page > total_pages) {
        return {
          ...old,
          paginate: {
            ...old.paginate,
            current_page: current_page - 1
          }
        }
      }

      return old
    })
  }

  useEffect(() => {
    handlePaginate()
  }, [professionalsHaveCommission.length])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      open: () => {
        setIsOpen(true)
      },
      close
    }),
    []
  )
  if (!isOpen) return null

  const RegisterCommission = () => {
    const hasPositiveCommission = professionalsHaveCommission.some(
      (item: any) =>
        item.commission === null ||
        item.commission === undefined ||
        item.commission > 0
    )
    const hasEmptyFields = professionalsHaveCommission.some(
      (item: any) =>
        item.commission === null ||
        item.commission === undefined ||
        item.commission < 0
    )
    if (hasPositiveCommission && hasEmptyFields) {
      toast({
        type: 'error',
        title: 'Há campos vazios ou com valores negativos..',
        position: 'bottom-right'
      })
    } else {
      mergeCommision()
      close()
    }
  }

  return (
    <>
      <ContainerModal>
        <Columns>
          <Row>
            <h2>{text}</h2>
            <Close onClick={() => close()} />
          </Row>
          <ContainerAbsolute>
            <TitleComissionProfessional>
              <h6>Profissional</h6>
              <h6>Comissão</h6>
            </TitleComissionProfessional>
            {paginatedProfessionals.map((item: any, index: any) => (
              <ContainerWap key={index}>
                <ContainerLabelProfessional>
                  {item.name}
                  <IconButton>
                    <IconTrash
                      onClick={() =>
                        deleteCommission(item.professional_id)
                      }
                    />
                  </IconButton>
                </ContainerLabelProfessional>
                <Input
                  width={180}
                  value={item?.commission}
                  onChange={(e) =>
                    (item.commission = Number(e.target.value))
                  }
                  placeholder='R$ 0,00'
                />
              </ContainerWap>
            ))}
          </ContainerAbsolute>

          <ContainerFooter>
            <Footer>
              <PaginateCommission
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
              />
            </Footer>
          </ContainerFooter>

          <Row>
            <Button
              style={{ borderRadius: '500px' }}
              bgColor='#E9EBEE'
              labelColor={theme.neutrals.gray7}
              onClick={close}
            >
              Cancelar
            </Button>
            <Button
              style={{
                borderRadius: '500px',
                boxShadow: '0px 5px 10px 0px #0066FF40'
              }}
              bgColor='#0066FF'
              onClick={() => RegisterCommission()}
            >
              Cadastrar
            </Button>
          </Row>
        </Columns>
      </ContainerModal>

      <Overlay />
    </>
  )
})
export default Commission

import { List } from 'contexts'

const RegisterOrderOfService = () => {
  const navigate = useNavigate()
  const modalRef = useRef<IHandleModalPropsCommission>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [professionalList, setProfessionalList] = useState<Order[]>(
    []
  )

  const methods = useForm<FormOrderProps['OrderOfService']>({
    defaultValues: {},
    shouldFocusError: true
  })

  const onSubmit = async (data: any) => {
    const { professional } = data

    try {
      const response = await api.post(
        routes.orderOfService.register,
        professional
      )
      if (response.data.msg === 'successfully generated report') {
        toast({
          type: 'success',
          title: 'Ordem de Serviço gerada com sucesso.',
          position: 'bottom-right'
        })
        navigate('/orderOfService')
      } else {
        modalRef.current && modalRef.current.open(professional)
        methods.setValue('professionals', professional)
      }
    } catch (err) {
      toast({
        type: 'error',
        title: 'Erro ao gerar ordem de serviço.',
        position: 'bottom-right'
      })
      console.log(err)
    }
  }

export default RegisterOrderOfService

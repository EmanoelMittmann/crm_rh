interface ImperativeProps {
  onOpen(): void
  onClose(): void
}

interface Props {
  options: OptionProps[]
  disabled?: boolean
}

interface OptionProps {
  label: string
  callback(): void
  disabled?: boolean
}

export type PopoverProps = {
  Data: Props
  Imperative: ImperativeProps
}

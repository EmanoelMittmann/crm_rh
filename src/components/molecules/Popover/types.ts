interface ImperativeProps {
  onOpen(): void
  onClose(): void
}

interface Props {
  options: OptionProps[]
}

interface OptionProps {
  label: string
  callback(): void
}

export type PopoverProps = {
  Data: Props
  Imperative: ImperativeProps
}

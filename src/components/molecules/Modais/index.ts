import Edit from './Edit'
import New from './New'
import Options from './Options'
import EditorStatus from './EditorStatus'
export const Modal = Object.assign({}, { Options, Edit, New, EditorStatus })

export type { IHandleModalProps } from './Edit'
export type { IHandleModalStatusProps } from './EditorStatus'

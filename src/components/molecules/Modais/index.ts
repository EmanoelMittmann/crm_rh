import { Colors } from './Colors'
import Edit from './Edit'
import New from './New'
import Options from './Options'
export const Modal = Object.assign({}, { Options, Edit, New, Colors })

export type { IHandleModalProps } from './Edit'
export type { IHandleModalColorsPropsNew } from './Colors/New'
export type { IHandleModalColorsPropsEdit } from './Colors/Edit'

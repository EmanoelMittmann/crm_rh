import { Colors } from './Colors'
import Edit from './Edit'
import EditorStatus from './EditorStatus'
import New from './New'
import Options from './Options'
import UserEditor from './UserEditor'

export const Modal = Object.assign(
  {},
  { Options, Edit, New, EditorStatus, Colors, UserEditor }
)

export type { IHandleModalPropsEdit } from './Edit'
export type { IHandleModalPropsNew } from './New'
export type { IHandleModalColorsPropsNew } from './Colors/New'
export type { IHandleModalColorsPropsEdit } from './Colors/Edit'

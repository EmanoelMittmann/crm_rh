import { Colors } from './Colors'
import Edit from './Edit'
import EditorStatus from './EditorStatus'
import New from './New'
import Options from './Options'
import UserEditor from './UserEditor'
import Details from './Details'

export const Modal = Object.assign(
  {},
  { Options, Edit, New, EditorStatus, Colors, UserEditor, Details }
)

export type { IHandleModalPropsEdit } from './Edit'
export type { IHandleModalPropsNew } from './New'
export type { IHandleModalPropsDetails } from './Details'
export type { IHandleModalColorsPropsNew } from './Colors/New'
export type { IHandleModalColorsPropsEdit } from './Colors/Edit'

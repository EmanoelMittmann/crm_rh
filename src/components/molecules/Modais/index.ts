import Alert from './Alert'
import AlertAccept from './AlertAccept'
import { Colors } from './Colors'
import Commission from './Commission'
import Details from './Details'
import Edit from './Edit'
import EditorStatus from './EditorStatus'
import OvertimeReleaseRh from './Hours/RH'
import TechLead from './Hours/Techlead'
import New from './New'
import Options from './Options'
import { Report } from './Report'
import UserEditor from './UserEditor'
import Delete from './Delete'



export const Modal = Object.assign(
  {},
  {
    Options,
    Edit,
    New,
    EditorStatus,
    Colors,
    UserEditor,
    Details,
    Commission,
    Report,
    OvertimeReleaseRh,
    Alert,
    AlertAccept,
    TechLead,
    Delete,
  }
)

export type { IHandleModalPropsEdit } from './Edit'
export type { IHandleModalPropsNew } from './New'
export type { IHandleTechLead } from './Hours/Techlead/constants'
export type { IHandleModalPropsDetails } from './Details/type'
export type { IHandleModalColorsPropsNew } from './Colors/New'
export type { IHandleModalColorsPropsEdit } from './Colors/Edit'
export type { IHandleModalReport as IReports } from './Report/Default'
export type { IHandleModalPropsCommission } from './Commission'
export type { IHandleModalPropsExtrasHoursRh } from './Hours/RH/type'
export type { IHandleModalPropsAlert } from './Alert'
export type { IHandleModalPropsAlertAccept } from './AlertAccept'
export type { IHandleModalPropsDelete } from './Delete'

import { Attachment } from './Attachment'
import { Companys } from './Companys'
import { ExtraHoursRh } from './ExtraHoursRh'
import { HoursProfessional } from './HoursProfessional'
import { Jobs } from './Jobs'
import { Notes } from './Notes'
import { OrderFormTable } from './OrderFormTable'
import { OrderOfService } from './OrderOfService'
import { Professionals } from './Professionals'
import { Projects } from './Projects'
import { Reports } from './Reports'
import { StatusProject } from './StatusProject'
import { Team } from './Team'
import { TechLead } from './TechLead'
import { TypesProject } from './TypesProject'
import { UserNotes } from './UserNotes'

export const Table = Object.assign(
  {},
  {
    Professionals,
    Projects,
    Jobs,
    StatusProject,
    TypesProject,
    Attachment,
    Companys,
    Team,
    Notes,
    OrderOfService,
    UserNotes,
    OrderFormTable,
    Reports,
    HoursProfessional,
    ExtraHoursRh,
    TechLead
  }
)

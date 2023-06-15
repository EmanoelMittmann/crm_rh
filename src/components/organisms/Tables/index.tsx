import { Attachment } from './Attachment'
import { Companys } from './Companys'
import { Jobs } from './Jobs'
import { Notes } from './Notes'
import { Professionals } from './Professionals'
import { Projects } from './Projects'
import { StatusProject } from './StatusProject'
import { Team } from './Team'
import { TypesProject } from './TypesProject'
import { OrderOfService } from './OrderOfService'

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
    UserNotes
  }
)

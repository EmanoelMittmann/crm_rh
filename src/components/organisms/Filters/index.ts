import { Team } from '../Forms/Team/Team'
import { Companys } from './Companys'
import { ExtraHoursRh } from './ExtraHoursRh'
import { Jobs } from './Jobs'
import { Notes } from './Notes'
import { OrderFormFilter } from './OrderFormFilter'
import { OrderOfService } from './OrderOfService'
import { Professionals } from './Professionals'
import { Projects } from './Projects'
import { Reports } from './Reports'
import { StatusProject } from './statusProject'
import { TypeProject } from './typeProject'
import { UserNotes } from './UserNotes'

export const Filter = Object.assign(
  {},
  {
    Professionals,
    Projects,
    Jobs,
    StatusProject,
    TypeProject,
    Companys,
    Team,
    Notes,
    UserNotes,
    OrderOfService,
    OrderFormFilter,
    Reports,
    ExtraHoursRh
  }
)

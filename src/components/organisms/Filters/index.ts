import { Team } from '../Forms/Team/Team'
import { Companys } from './Companys'
import { Contract } from './Contract'
import { ExtraHoursRh } from './ExtraHoursRh'
import { HoursProfessional } from './HoursProfessional'
import { Jobs } from './Jobs'
import { Notes } from './Notes'
import { OrderFormFilter } from './OrderFormFilter'
import { OrderOfService } from './OrderOfService'
import { Professionals } from './Professionals'
import { Projects } from './Projects'
import { Reports } from './Reports'
import { StatusProject } from './statusProject'
import { TechLead } from './TechLead'
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
    HoursProfessional,
    ExtraHoursRh,
    TechLead,
    Contract
  }
)

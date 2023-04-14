import { Bank } from './bank'
import { Company } from './company'
import { Contract } from './contract'
import { ExtraHours } from './extraHours'
import { Paper } from './paper'
import { Permission } from './permissions'
import { Personal } from './personal'
import { Project } from './project'

export const Section = Object.assign(
  {},
  {
    Personal,
    Company,
    Contract,
    ExtraHours,
    Bank,
    Permission,
    Paper,
    Project
  }
)

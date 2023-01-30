import { Work } from '@/types'

/**
 * Receives a work name and returns it as a formatted title
 * @param work Work name
 * @returns Formatted work title
 */
export default function (work: Work) {
  switch (work) {
    case 'globo':
      return 'Globo'

    case 'ibm':
      return 'IBM'

    case 'iphone':
      return 'iPhone 13 Pro'

    case 'sabido':
      return 'Sabido'

    default:
      return 'Talentify'
  }
}

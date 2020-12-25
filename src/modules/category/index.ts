import { log } from '@graphprotocol/graph-ts'
import * as categories from './categories'
import * as addresses from '../../data/addresses'

export function getCategory(contractAddress: string): string {
  let category = ''

  if (contractAddress == addresses.LegacyNFT) {
    category = categories.LEGACYNFT
  } else {
    log.warning('Contract address {} not being monitored', [contractAddress])
    category = contractAddress
  }

  return category
}

import { BigInt } from '@graphprotocol/graph-ts'
import { Mint, Burn, Transfer } from '../entities/KTYToken/KTYToken'
import { Account } from '../entities/schema'
import { getOrCreateAccount } from '../modules/wallet';

export function handleMint(event: Mint): void {
  let account = getOrCreateAccount(event.params.to);
  account.kty = account.kty.plus(event.params.amount)
  account.save()
}

export function handleTransfer(event: Transfer): void {
  let accountTo = getOrCreateAccount(event.params.to);
  accountTo.kty = accountTo.kty.plus(event.params.value)
  accountTo.save()

  let accountFrom = getOrCreateAccount(event.params.from);
  accountFrom.kty = accountFrom.kty.minus(event.params.value)
  accountFrom.save()
}

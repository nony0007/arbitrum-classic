/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from 'ethers'
import { Listener, Provider } from 'ethers/providers'
import { Arrayish, BigNumber, BigNumberish, Interface } from 'ethers/utils'
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription,
} from '.'

interface ArbSysInterface extends Interface {
  functions: {
    withdrawERC20: TypedFunctionDescription<{
      encode([dest, amount]: [string, BigNumberish]): string
    }>

    withdrawERC721: TypedFunctionDescription<{
      encode([dest, id]: [string, BigNumberish]): string
    }>

    withdrawEth: TypedFunctionDescription<{
      encode([dest, amount]: [string, BigNumberish]): string
    }>

    currentMessageTime: TypedFunctionDescription<{
      encode([]: []): string
    }>

    timeUpperBound: TypedFunctionDescription<{ encode([]: []): string }>

    getTransactionCount: TypedFunctionDescription<{
      encode([account]: [string]): string
    }>

    cloneContract: TypedFunctionDescription<{
      encode([account]: [string]): string
    }>
  }

  events: {}
}

export class ArbSys extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ArbSys
  attach(addressOrName: string): ArbSys
  deployed(): Promise<ArbSys>

  on(event: EventFilter | string, listener: Listener): ArbSys
  once(event: EventFilter | string, listener: Listener): ArbSys
  addListener(eventName: EventFilter | string, listener: Listener): ArbSys
  removeAllListeners(eventName: EventFilter | string): ArbSys
  removeListener(eventName: any, listener: Listener): ArbSys

  interface: ArbSysInterface

  functions: {
    withdrawERC20(
      dest: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    withdrawERC721(
      dest: string,
      id: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    withdrawEth(
      dest: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    currentMessageTime(): Promise<BigNumber>

    timeUpperBound(): Promise<BigNumber>

    getTransactionCount(account: string): Promise<BigNumber>

    cloneContract(
      account: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>
  }

  withdrawERC20(
    dest: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  withdrawERC721(
    dest: string,
    id: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  withdrawEth(
    dest: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  currentMessageTime(): Promise<BigNumber>

  timeUpperBound(): Promise<BigNumber>

  getTransactionCount(account: string): Promise<BigNumber>

  cloneContract(
    account: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  filters: {}

  estimate: {
    withdrawERC20(dest: string, amount: BigNumberish): Promise<BigNumber>

    withdrawERC721(dest: string, id: BigNumberish): Promise<BigNumber>

    withdrawEth(dest: string, amount: BigNumberish): Promise<BigNumber>

    currentMessageTime(): Promise<BigNumber>

    timeUpperBound(): Promise<BigNumber>

    getTransactionCount(account: string): Promise<BigNumber>

    cloneContract(account: string): Promise<BigNumber>
  }
}

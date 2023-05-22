/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface UniswapV3StakerInterface extends ethers.utils.Interface {
  functions: {
    'claimReward(address,address,uint256)': FunctionFragment
    'createIncentive(tuple,uint256)': FunctionFragment
    'deposits(uint256)': FunctionFragment
    'endIncentive(tuple)': FunctionFragment
    'factory()': FunctionFragment
    'getRewardInfo(tuple,uint256)': FunctionFragment
    'incentives(bytes32)': FunctionFragment
    'maxIncentiveDuration()': FunctionFragment
    'maxIncentiveStartLeadTime()': FunctionFragment
    'multicall(bytes[])': FunctionFragment
    'nonfungiblePositionManager()': FunctionFragment
    'onERC721Received(address,address,uint256,bytes)': FunctionFragment
    'rewards(address,address)': FunctionFragment
    'stakeToken(tuple,uint256)': FunctionFragment
    'stakes(uint256,bytes32)': FunctionFragment
    'transferDeposit(uint256,address)': FunctionFragment
    'unstakeToken(tuple,uint256)': FunctionFragment
    'withdrawToken(uint256,address,bytes)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'claimReward', values: [string, string, BigNumberish]): string
  encodeFunctionData(
    functionFragment: 'createIncentive',
    values: [
      {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      BigNumberish
    ]
  ): string
  encodeFunctionData(functionFragment: 'deposits', values: [BigNumberish]): string
  encodeFunctionData(
    functionFragment: 'endIncentive',
    values: [
      {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      }
    ]
  ): string
  encodeFunctionData(functionFragment: 'factory', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'getRewardInfo',
    values: [
      {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      BigNumberish
    ]
  ): string
  encodeFunctionData(functionFragment: 'incentives', values: [BytesLike]): string
  encodeFunctionData(functionFragment: 'maxIncentiveDuration', values?: undefined): string
  encodeFunctionData(functionFragment: 'maxIncentiveStartLeadTime', values?: undefined): string
  encodeFunctionData(functionFragment: 'multicall', values: [BytesLike[]]): string
  encodeFunctionData(functionFragment: 'nonfungiblePositionManager', values?: undefined): string
  encodeFunctionData(functionFragment: 'onERC721Received', values: [string, string, BigNumberish, BytesLike]): string
  encodeFunctionData(functionFragment: 'rewards', values: [string, string]): string
  encodeFunctionData(
    functionFragment: 'stakeToken',
    values: [
      {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      BigNumberish
    ]
  ): string
  encodeFunctionData(functionFragment: 'stakes', values: [BigNumberish, BytesLike]): string
  encodeFunctionData(functionFragment: 'transferDeposit', values: [BigNumberish, string]): string
  encodeFunctionData(
    functionFragment: 'unstakeToken',
    values: [
      {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      BigNumberish
    ]
  ): string
  encodeFunctionData(functionFragment: 'withdrawToken', values: [BigNumberish, string, BytesLike]): string

  decodeFunctionResult(functionFragment: 'claimReward', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'createIncentive', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'deposits', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'endIncentive', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'factory', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getRewardInfo', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'incentives', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'maxIncentiveDuration', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'maxIncentiveStartLeadTime', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'multicall', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'nonfungiblePositionManager', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'onERC721Received', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'rewards', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'stakeToken', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'stakes', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferDeposit', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'unstakeToken', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'withdrawToken', data: BytesLike): Result

  events: {
    'DepositTransferred(uint256,address,address)': EventFragment
    'IncentiveCreated(address,address,uint256,uint256,uint256,address,uint256)': EventFragment
    'IncentiveEnded(bytes32,uint256)': EventFragment
    'RewardClaimed(address,address,uint256)': EventFragment
    'TokenStaked(uint256,bytes32,uint128)': EventFragment
    'TokenUnstaked(uint256,bytes32)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'DepositTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'IncentiveCreated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'IncentiveEnded'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RewardClaimed'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TokenStaked'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TokenUnstaked'): EventFragment
}

export class UniswapV3Staker extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: UniswapV3StakerInterface

  functions: {
    claimReward(
      rewardToken: string,
      to: string,
      amountRequested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    createIncentive(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    deposits(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, number, number, number] & {
        owner: string
        numberOfStakes: number
        tickLower: number
        tickUpper: number
      }
    >

    endIncentive(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    factory(overrides?: CallOverrides): Promise<[string]>

    getRewardInfo(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        reward: BigNumber
        maxReward: BigNumber
        secondsInsideX128: BigNumber
      }
    >

    incentives(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        totalRewardUnclaimed: BigNumber
        totalRewardLocked: BigNumber
        totalSecondsClaimedX128: BigNumber
        numberOfStakes: BigNumber
      }
    >

    maxIncentiveDuration(overrides?: CallOverrides): Promise<[BigNumber]>

    maxIncentiveStartLeadTime(overrides?: CallOverrides): Promise<[BigNumber]>

    multicall(
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    nonfungiblePositionManager(overrides?: CallOverrides): Promise<[string]>

    onERC721Received(
      arg0: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    rewards(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>

    stakeToken(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    stakes(
      tokenId: BigNumberish,
      incentiveId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, BigNumber] & {
        secondsPerLiquidityInsideInitialX128: BigNumber
        secondsInsideInitial: number
        liquidity: BigNumber
      }
    >

    transferDeposit(
      tokenId: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    unstakeToken(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    withdrawToken(
      tokenId: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  claimReward(
    rewardToken: string,
    to: string,
    amountRequested: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  createIncentive(
    key: {
      rewardToken: string
      pool: string
      startTime: BigNumberish
      endTime: BigNumberish
      vestingPeriod: BigNumberish
      refundee: string
    },
    reward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  deposits(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, number, number, number] & {
      owner: string
      numberOfStakes: number
      tickLower: number
      tickUpper: number
    }
  >

  endIncentive(
    key: {
      rewardToken: string
      pool: string
      startTime: BigNumberish
      endTime: BigNumberish
      vestingPeriod: BigNumberish
      refundee: string
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  factory(overrides?: CallOverrides): Promise<string>

  getRewardInfo(
    key: {
      rewardToken: string
      pool: string
      startTime: BigNumberish
      endTime: BigNumberish
      vestingPeriod: BigNumberish
      refundee: string
    },
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      reward: BigNumber
      maxReward: BigNumber
      secondsInsideX128: BigNumber
    }
  >

  incentives(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      totalRewardUnclaimed: BigNumber
      totalRewardLocked: BigNumber
      totalSecondsClaimedX128: BigNumber
      numberOfStakes: BigNumber
    }
  >

  maxIncentiveDuration(overrides?: CallOverrides): Promise<BigNumber>

  maxIncentiveStartLeadTime(overrides?: CallOverrides): Promise<BigNumber>

  multicall(
    data: BytesLike[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  nonfungiblePositionManager(overrides?: CallOverrides): Promise<string>

  onERC721Received(
    arg0: string,
    from: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  rewards(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>

  stakeToken(
    key: {
      rewardToken: string
      pool: string
      startTime: BigNumberish
      endTime: BigNumberish
      vestingPeriod: BigNumberish
      refundee: string
    },
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  stakes(
    tokenId: BigNumberish,
    incentiveId: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, BigNumber] & {
      secondsPerLiquidityInsideInitialX128: BigNumber
      secondsInsideInitial: number
      liquidity: BigNumber
    }
  >

  transferDeposit(
    tokenId: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  unstakeToken(
    key: {
      rewardToken: string
      pool: string
      startTime: BigNumberish
      endTime: BigNumberish
      vestingPeriod: BigNumberish
      refundee: string
    },
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  withdrawToken(
    tokenId: BigNumberish,
    to: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    claimReward(
      rewardToken: string,
      to: string,
      amountRequested: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    createIncentive(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      reward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    deposits(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, number, number, number] & {
        owner: string
        numberOfStakes: number
        tickLower: number
        tickUpper: number
      }
    >

    endIncentive(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>

    factory(overrides?: CallOverrides): Promise<string>

    getRewardInfo(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        reward: BigNumber
        maxReward: BigNumber
        secondsInsideX128: BigNumber
      }
    >

    incentives(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        totalRewardUnclaimed: BigNumber
        totalRewardLocked: BigNumber
        totalSecondsClaimedX128: BigNumber
        numberOfStakes: BigNumber
      }
    >

    maxIncentiveDuration(overrides?: CallOverrides): Promise<BigNumber>

    maxIncentiveStartLeadTime(overrides?: CallOverrides): Promise<BigNumber>

    multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>

    nonfungiblePositionManager(overrides?: CallOverrides): Promise<string>

    onERC721Received(
      arg0: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    rewards(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>

    stakeToken(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    stakes(
      tokenId: BigNumberish,
      incentiveId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, BigNumber] & {
        secondsPerLiquidityInsideInitialX128: BigNumber
        secondsInsideInitial: number
        liquidity: BigNumber
      }
    >

    transferDeposit(tokenId: BigNumberish, to: string, overrides?: CallOverrides): Promise<void>

    unstakeToken(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    withdrawToken(tokenId: BigNumberish, to: string, data: BytesLike, overrides?: CallOverrides): Promise<void>
  }

  filters: {
    DepositTransferred(
      tokenId?: BigNumberish | null,
      oldOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<[BigNumber, string, string], { tokenId: BigNumber; oldOwner: string; newOwner: string }>

    IncentiveCreated(
      rewardToken?: string | null,
      pool?: string | null,
      startTime?: null,
      endTime?: null,
      vestingPeriod?: null,
      refundee?: null,
      reward?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber, string, BigNumber],
      {
        rewardToken: string
        pool: string
        startTime: BigNumber
        endTime: BigNumber
        vestingPeriod: BigNumber
        refundee: string
        reward: BigNumber
      }
    >

    IncentiveEnded(
      incentiveId?: BytesLike | null,
      refund?: null
    ): TypedEventFilter<[string, BigNumber], { incentiveId: string; refund: BigNumber }>

    RewardClaimed(
      rewardToken?: string | null,
      to?: string | null,
      reward?: null
    ): TypedEventFilter<[string, string, BigNumber], { rewardToken: string; to: string; reward: BigNumber }>

    TokenStaked(
      tokenId?: BigNumberish | null,
      incentiveId?: BytesLike | null,
      liquidity?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { tokenId: BigNumber; incentiveId: string; liquidity: BigNumber }
    >

    TokenUnstaked(
      tokenId?: BigNumberish | null,
      incentiveId?: BytesLike | null
    ): TypedEventFilter<[BigNumber, string], { tokenId: BigNumber; incentiveId: string }>
  }

  estimateGas: {
    claimReward(
      rewardToken: string,
      to: string,
      amountRequested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    createIncentive(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    deposits(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    endIncentive(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    factory(overrides?: CallOverrides): Promise<BigNumber>

    getRewardInfo(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    incentives(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>

    maxIncentiveDuration(overrides?: CallOverrides): Promise<BigNumber>

    maxIncentiveStartLeadTime(overrides?: CallOverrides): Promise<BigNumber>

    multicall(data: BytesLike[], overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<BigNumber>

    nonfungiblePositionManager(overrides?: CallOverrides): Promise<BigNumber>

    onERC721Received(
      arg0: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    rewards(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>

    stakeToken(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    stakes(tokenId: BigNumberish, incentiveId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>

    transferDeposit(
      tokenId: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    unstakeToken(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    withdrawToken(
      tokenId: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    claimReward(
      rewardToken: string,
      to: string,
      amountRequested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    createIncentive(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    deposits(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    endIncentive(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getRewardInfo(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    incentives(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>

    maxIncentiveDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>

    maxIncentiveStartLeadTime(overrides?: CallOverrides): Promise<PopulatedTransaction>

    multicall(
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    nonfungiblePositionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>

    onERC721Received(
      arg0: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    rewards(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    stakeToken(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    stakes(tokenId: BigNumberish, incentiveId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>

    transferDeposit(
      tokenId: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    unstakeToken(
      key: {
        rewardToken: string
        pool: string
        startTime: BigNumberish
        endTime: BigNumberish
        vestingPeriod: BigNumberish
        refundee: string
      },
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    withdrawToken(
      tokenId: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}

// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        "CallOf": "Call",
        "DispatchTime": {
            "_enum": {
                "At": "BlockNumber",
                "After": "BlockNumber"
            }
        },
        "ScheduleTaskIndex": "u32",
        "DelayedOrigin": {
            "delay": "BlockNumber",
            "origin": "PalletsOrigin"
        },
        "AuthorityOrigin": "DelayedOrigin",
        "StorageValue": "Vec<u8>",
        "StorageKeyBytes": "Vec<u8>",
        "StorageValueBytes": "Vec<u8>",
        "RpcDataProviderId": "Text",
        "DataProviderId": "u8",
        "TimestampedValue": {
            "value": "OracleValue",
            "timestamp": "Moment"
        },
        "TimestampedValueOf": "TimestampedValue",
        "OrderedSet": "Vec<AccountId>",
        "OrmlAccountData": {
            "free": "Balance",
            "reserved": "Balance",
            "frozen": "Balance"
        },
        "OrmlBalanceLock": {
            "amount": "Balance",
            "id": "LockIdentifier"
        },
        "AuctionInfo": {
            "bid": "Option<(AccountId, Balance)>",
            "start": "BlockNumber",
            "end": "Option<BlockNumber>"
        },
        "DelayedDispatchTime": {
            "_enum": {
                "At": "BlockNumber",
                "After": "BlockNumber"
            }
        },
        "DispatchId": "u32",
        "Price": "FixedU128",
        "OrmlCurrencyId": "CurrencyId",
        "PoolInfo": {
            "totalShares": "Share"
        },
        "CompactBalance": "Compact<Balance>",
        "Share": "u128",
        "OracleValue": "Price",
        "Amount": "i128",
        "AmountOf": "Amount",
        "AuctionId": "u32",
        "AuctionIdOf": "AuctionId",
        "TokenSymbol": {
            "_enum": {
                "SETM": 0,
                "SERP": 1,
                "DNAR": 2,
                "SETR": 3,
                "SETUSD": 4
            }
        },
        "DexShare": {
            "_enum": {
                "Token": "TokenSymbol",
                "Erc20": "EvmAddress"
            }
        },
        "CurrencyId": {
            "_enum": {
                "Token": "TokenSymbol",
                "DEXShare": "(DexShare, DexShare)",
                "ERC20": "EvmAddress"
            }
        },
        "CurrencyIdOf": "CurrencyId",
        "AirDropCurrencyId": {
            "_enum": [
                "SETR",
                "SETUSD"
            ]
        },
        "AuthoritysOriginId": {
            "_enum": [
                "Root",
                "Treasury"
            ]
        },
        "SetheumDataProviderId": {
            "_enum": [
                "Aggregated",
                "Setheum"
            ]
        },
        "TradingPair": "(CurrencyId,  CurrencyId)",
        "PalletBalanceOf": "Balance",
        "CollateralAuctionItem": {
            "refundRecipient": "AccountId",
            "currencyId": "CurrencyId",
            "initialAmount": "Compact<Balance>",
            "amount": "Compact<Balance>",
            "target": "Compact<Balance>",
            "startTime": "BlockNumber"
        },
        "LiquidationStrategy": {
            "_enum": [
                "Auction",
                "Exchange"
            ]
        },
        "OptionRate": "Option<Rate>",
        "OptionRatio": "Option<Ratio>",
        "ChangeOptionRate": {
            "_enum": {
                "NoChange": "Null",
                "NewValue": "OptionRate"
            }
        },
        "ChangeOptionRatio": {
            "_enum": {
                "NoChange": "Null",
                "NewValue": "OptionRatio"
            }
        },
        "ChangeBalance": {
            "_enum": {
                "NoChange": "Null",
                "NewValue": "Balance"
            }
        },
        "RiskManagementParams": {
            "maximumTotalDebitValue": "Balance",
            "liquidationRatio": "Option<Rate>",
            "liquidationPenalty": "Option<Rate>",
            "requiredCollateralRatio": "Option<Rate>"
        },
        "CandidateInfoOf": "CandidateInfo",
        "TradingPairProvisionParameters": {
            "minContribution": "(Balance, Balance)",
            "targetProvision": "(Balance, Balance)",
            "accumulatedProvision": "(Balance, Balance)",
            "notBefore": "BlockNumber"
        },
        "BalanceWrapper": {
            "amount": "Balance"
        },
        "BalanceRequest": {
            "amount": "Balance"
        },
        "TradingPairStatus": {
            "_enum": {
                "NotEnabled": "Null",
                "Provisioning": "TradingPairProvisionParameters",
                "Enabled": "Null"
            }
        },
        "Erc20Info": {
            "address": "EvmAddress",
            "name": "Vec<u8>",
            "symbol": "Vec<u8>",
            "decimals": "u8"
        },
        "EstimateResourcesResponse": {
            "gas": "u256",
            "storage": "i32",
            "weightFee": "u256"
        },
        "EvmAccountInfo": {
            "nonce": "Index",
            "contractInfo": "Option<EvmContractInfo>"
        },
        "CodeInfo": {
            "codeSize": "u32",
            "refCount": "u32"
        },
        "EvmContractInfo": {
            "codeHash": "H256",
            "maintainer": "H160",
            "deployed": "bool"
        },
        "EvmAddress": "H160",
        "CallRequest": {
            "from": "Option<H160>",
            "to": "Option<H160>",
            "gasLimit": "Option<u32>",
            "storageLimit": "Option<u32>",
            "value": "Option<U128>",
            "data": "Option<Bytes>"
        },
        "PoolId": {
            "_enum": {
                "Loans": "CurrencyId",
                "Dex": "CurrencyId"
            }
        },
        "Position": {
            "collateral": "Balance",
            "debit": "Balance"
        },
        "CID": "Vec<u8>",
        "Attributes": "BTreeMap<Vec<u8>, Vec<u8>>",
        "TokenInfoOf": {
            "metadata": "CID",
            "owner": "AccountId",
            "data": "TokenData"
        },
        "Properties": {
            "_set": {
                "_bitLength": 8,
                "Transferable": 1,
                "Burnable": 2,
                "Mintable": 4,
                "ClassPropertiesMutable": 8
            }
        },
        "ClassData": {
            "deposit": "Balance",
            "properties": "Properties",
            "attributes": "Attributes"
        },
        "TokenData": {
            "deposit": "Balance",
            "attributes": "Attributes"
        },
        "TokenId": "u64",
        "TokenIdOf": "TokenId",
        "NFTClassId": "u32",
        "ClassIdOf": "ClassId",
        "NFTBalance": "u128",
        "NFTBalanceOf": "NFTBalance",
        "ClassInfoOf": {
            "metadata": "CID",
            "totalIssuance": "TokenId",
            "owner": "AccountId",
            "data": "ClassData"
        },
        "OracleKey": "CurrencyId",
        "AsOriginId": "AuthoritysOriginId",
        "ProxyType": {
            "_enum": [
                "Any",
                "CancelProxy",
                "Governance",
                "Auction",
                "Swap",
                "Loan"
            ]
        },
        "AtLeast64BitUnsigned": "u128",
        "SubAccountStatus": {
            "bonded": "Balance",
            "available": "Balance",
            "unbonding": "Vec<(EraIndex,Balance)>",
            "mockRewardRate": "Rate"
        },
        "ChangeRate": {
            "_enum": {
                "NoChange": "Null",
                "NewValue": "Rate"
            }
        },
        "ChangeRatio": {
            "_enum": {
                "NoChange": "Null",
                "NewValue": "Ratio"
            }
        },
        "BalanceInfo": {
            "amount": "Balance"
        },
        "ExchangeRate": "FixedU128",
        "Rate": "FixedU128",
        "Ratio": "FixedU128",
        "PublicKey": "[u8; 20]",
        "DestAddress": "Vec<u8>",
        "PoolTokenIndex": "u32",
        "AssetId": "CurrencyId",
        "Keys": "SessionKeys1"
      }

    }
  ]
};

export default definitions;

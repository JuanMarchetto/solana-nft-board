export type LootboxProgram = {
  "version": "0.1.0",
  "name": "lootbox_program",
  "instructions": [
    {
      "name": "initUser",
      "accounts": [
        {
          "name": "state",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "vrf",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitUserParams"
          }
        }
      ]
    },
    {
      "name": "openLootbox",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "lootboxPointer",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "lootbox"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeMintAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "state",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "vrf",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "queueAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dataBuffer",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "permission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "switchboardProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payerWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recentBlockhashes",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "boxNumber",
          "type": "u64"
        }
      ]
    },
    {
      "name": "consumeRandomness",
      "accounts": [
        {
          "name": "state",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "vrf",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lootboxPointer",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "lootbox"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "retrieveItemFromLootbox",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "lootboxPointer",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "lootbox"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userGearAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "mint"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "lootboxPointer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "redeemable",
            "type": "bool"
          },
          {
            "name": "randomnessRequested",
            "type": "bool"
          },
          {
            "name": "availableLootbox",
            "type": "u64"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "userState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "switchboardStateBump",
            "type": "u8"
          },
          {
            "name": "vrfPermissionBump",
            "type": "u8"
          },
          {
            "name": "resultBuffer",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "vrf",
            "type": "publicKey"
          },
          {
            "name": "user",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "InitUserParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "switchboardStateBump",
            "type": "u8"
          },
          {
            "name": "vrfPermissionBump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AlreadyClaimed",
      "msg": "Mint already claimed"
    },
    {
      "code": 6001,
      "name": "InvalidLootbox",
      "msg": "Haven't staked long enough for this loot box or invalid loot box number"
    },
    {
      "code": 6002,
      "name": "InvalidVrfAuthorityError",
      "msg": "Switchboard VRF Account's authority should be set to the client's state pubkey"
    },
    {
      "code": 6003,
      "name": "InvalidVrfAccount",
      "msg": "Invalid VRF account provided."
    },
    {
      "code": 6004,
      "name": "MintNotReady",
      "msg": "Random mint has not been assigned yet"
    },
    {
      "code": 6005,
      "name": "RandomnessAlreadyRequested",
      "msg": "Randomness already requested"
    },
    {
      "code": 6006,
      "name": "UninitializedLootboxPointer",
      "msg": "Uninitialized Lootbox Pointer"
    }
  ]
};

export const IDL: LootboxProgram = {
  "version": "0.1.0",
  "name": "lootbox_program",
  "instructions": [
    {
      "name": "initUser",
      "accounts": [
        {
          "name": "state",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "vrf",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitUserParams"
          }
        }
      ]
    },
    {
      "name": "openLootbox",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "lootboxPointer",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "lootbox"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeMintAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "state",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "vrf",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "queueAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dataBuffer",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "permission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "switchboardProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payerWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recentBlockhashes",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "boxNumber",
          "type": "u64"
        }
      ]
    },
    {
      "name": "consumeRandomness",
      "accounts": [
        {
          "name": "state",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "vrf",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lootboxPointer",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "lootbox"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "retrieveItemFromLootbox",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "lootboxPointer",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "lootbox"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userGearAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "mint"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "lootboxPointer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "redeemable",
            "type": "bool"
          },
          {
            "name": "randomnessRequested",
            "type": "bool"
          },
          {
            "name": "availableLootbox",
            "type": "u64"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "userState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "switchboardStateBump",
            "type": "u8"
          },
          {
            "name": "vrfPermissionBump",
            "type": "u8"
          },
          {
            "name": "resultBuffer",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "vrf",
            "type": "publicKey"
          },
          {
            "name": "user",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "InitUserParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "switchboardStateBump",
            "type": "u8"
          },
          {
            "name": "vrfPermissionBump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AlreadyClaimed",
      "msg": "Mint already claimed"
    },
    {
      "code": 6001,
      "name": "InvalidLootbox",
      "msg": "Haven't staked long enough for this loot box or invalid loot box number"
    },
    {
      "code": 6002,
      "name": "InvalidVrfAuthorityError",
      "msg": "Switchboard VRF Account's authority should be set to the client's state pubkey"
    },
    {
      "code": 6003,
      "name": "InvalidVrfAccount",
      "msg": "Invalid VRF account provided."
    },
    {
      "code": 6004,
      "name": "MintNotReady",
      "msg": "Random mint has not been assigned yet"
    },
    {
      "code": 6005,
      "name": "RandomnessAlreadyRequested",
      "msg": "Randomness already requested"
    },
    {
      "code": 6006,
      "name": "UninitializedLootboxPointer",
      "msg": "Uninitialized Lootbox Pointer"
    }
  ]
};

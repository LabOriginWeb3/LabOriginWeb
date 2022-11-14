---
template: blog-post
title: Blockchain Trilemma and Celestia
slug: /celestia
date: 2022-10-07 11:46
description: Research article on how Celestia help to solve blockchain Trilemma
featuredImage: /assets/celestia.jpg
---

### Blockchain Trilemma Problem

This term "Blockchain Trilemma" was popularized by Ethereum co-founder Vitalik Buterin. For it to make sense, you need to be aware of three different elements that are desirable in a blockchain: decentralization, security, and scalability. The blockchain trilemma refers to the idea that it’s hard for blockchains to achieve optimal levels of all three properties simultaneously.

- Decentralization: Create a blockchain system that does not rely on a central point of control.
- Scalability: The ability of blockchain systems to process an increasing number of transactions.
- Security: The ability of the blockchain system to function as intended, preventing attacks, errors and other unforeseen problems.

Bitcoin is a representative of decentralization. At present, there are more than 1 million bitcoin miners around the world, but at the same time, the TPS of the Bitcoin network is also very low, about 7 transactions per second.

Scalability is a requirement of blockchain network, and it is also a problem that many projects are trying to overcome. Ethereum's TPS is around 15. The average TPS of Solana can reach 3000, which is the ceiling of blockchain TPS at the moment. But it sacrifices decentralization, resulting in easy to be hacked and downtime.

The security of blockchain is mainly reflected in its infrastructure and source code. The attack of BNB Chain in October, 2022 is a security issue. On the other hand, the higher the degree of decentralization, the lower the probability of 51% attacks.

Although there is a trilemma in blockchain for the time being, it is not natively true. Many blockchain practitioners are working hard to overcome the trilemma, which has resulted in many new public chains and various roll up technologies based on Ethereum.

### Modular blockchain

Modular blockchain is one of the many solutions to make break through in blockchain trilemma.

Modular blockchains consists of four layers: execution, settlement, consensus, and data availability.

- Execution: The environment in which the application runs and state changes are executed.
- Settlement: The verification of proof for execution layer, resolve fraud disputes, and build bridges between other executive layers.
- Consensus: An agreement on the order of transactions.
- Data Availability: Access to  the transaction data stored on the blockchain.

Monolithic blockchains perform all of these functions on their own. On the other hand, modular blockchains create a new model of blockchain architecture by assigning these functions to separate layers that run together as part of the system.

The most mainstream blockchain modularization mechanism is roll-ups. This mechanism transfers computation and state transfer (the execution layer) to the off-chain network and stores transaction data on the chain. Then zk-rollup (zero knowledge rollup) or fraud proof (Optimistic/Arbitrum rollup) is used for on-chain verification of the state change results calculated off the chain.

![Team labOrigin](/assets/celestia-layers.png "Modular Blockchain")

### Celestia
With the popularity of blockchain applications, a large amount of data needs to be stored on the blockchain. Because of the unmodifiable nature of blockchain, and because more and more transactions are performed on the network, more and more data will eventually be held on the chain. As a result, each blockchain will inevitably need an efficient way to store data (i.e., data availability) in the future.
As Web 3 is adopted around the world, the need for permanent storage of data will also multiply. The modular blockchain architecture enables the throughput of data to be greatly increased by separating data availability from other blockchain operations.

Celestia is one of the pioneers of the modular blockchain architecture, which provides a data availability and consensus layer in a modular stack.

![Team labOrigin](/assets/celestia-arch.png "Celestia in Modular Blockchain")

- Monolith：Do everything on Ethereum. While it has maximum security and simplicity, it comes with high costs and limited scalability.
- Roll up:Create a separate execution layer that peg back to Ethereum for verification. Fraud proof (Optimistic roolup) or validity proof (ZK rollup) can be used.
- Validium: Changes to Roll up to move data availability out of Ethereum. This increases scalability at the expense of security. There are different styles (data availability committee, Guardians, etc.) with different trade-offs, but all are less secure than rollup.
- Sovereign Rollup: Sovereign Roll up does not have a set of smart contracts, but instead publishes the raw block data directly onto the chain. Celestia is responsible for consensus and data availability, while execution and settlement are transferred to Sovereign Rollup. Since there is no trust minimization bridge between Sovereign Rollup and Celestia, Sovereign Rollup can gain the ability to freely fork upgrades independently. Coordination and security upgrades are also easier than non-sovereign Rolups.
- Settlement Rollup：Cevmos, a dedicated settlement layer upon Celestia, other execution layers can be used as part of a single trust minimization "cluster".
- Celestium：Celestium uses Celestia for data availability and Ethereum for consensus and settlement. In other words, a Celestia-backed Validium


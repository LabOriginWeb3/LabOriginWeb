---
template: blog-post
title: SocialFi Projects Overview
slug: /socialfi
date: 2022-11-11 10:46
description: SocialFi projects overview
featuredImage: /assets/socialfi.png
---

SocialFi 项目调研

Atem Network
Atem.io

简介：
Atem是一个去中心化的内容创作协议，目标是帮助创建者将他们的内容token化，并建立web3原生社区。

协议层 Atem Protocol:
去中心化存储：所有的内容创作将被存储在AR或者IPFS上。
NFT标准：
Content NFT: 创作者可以将创作的内容制作成NFT，其他用户可以付费Collect
Creator NFT: 创作者可以发行该NFT用于链接和管理自己的社区
所有的NFT使用ERC-1155由母合约创建，便于交易买卖。

产品：
AtemReview：内容分享平台。创作者可以创作并且分享他们的作品，做成Content NFT。其他的用户可以评论，Collect该NFT

AtemChat: Web3社区社交平台，创作者可以通过他们举办的NFTs与他们的粉丝轻松联系和互动。用户链接钱包后会自动加入平台支持的NFT Channel. 用户可以在社区内直接Bid NFT，拥有该NFT的用户会收到私信，选择是否接受offer，完成一笔NFT的交易。



Farcaster
Farcaster.xyz

Github: https://github.com/farcasterxyz

Farcaster通过链上和链下组件的混合架构实现了充分的去中心化社交。身份存储在以太坊智能合约的链上。以太坊地址控制这个链上身份，可以用来代表其签署链下消息。数据通过身份进行加密签名，并存储在名为Farcaster Hubs的用户控制的服务器上。数据不存储在链上，因为在大多数L1和L2网络上，gas非常昂贵，并且速度很慢。

目前这个APP在内测，无法下载。

Identity: Farcaster ID Registry (FIR) 和 Farcaster Name Registry (FNR)。 FIR是用户的通过与智能合约交互生成的ID，也是在Fracaster协议中区分用户的唯一凭证。通过FIR可以找到该用户的主页和存储在Farcaster Hub里面的全部信息。FNR类似ENS，是一个NFT作为用户名，不是必须的。
Hub：Hub是一个始终在线的服务器，用于验证、存储和复制签名消息。任何人都可以run hub服务器，或者使用第三方的service。用户还可以配置他的Hub，以从其他Hub复制数据。这样Follower就可以看到大V的最新状态了。


该协议有点像是Lens Protocol和Comm的结合体。

Paragraph
Paragraph.xyz

Paragraph 由 Colin Armstrong 于 2021 年创立，可帮助 Web3 领域作者、DAO 和 NFT 社区通过一体化的通讯服务将其内容货币化，内容创建者和社区建设者可以使用 NFT 或 ERC-20 Token 通过会员机制管理其用户或粉丝。

主要产品功能：
内容创作，类似Mirror
Newsletter 分发给Subscriber
创建Token，只给Token Holder发送Newsletter



BlueSky
https://blueskyweb.xyz/
Github: https://github.com/bluesky-social

由Twitter创始人兼前CEO Jack Dorsey资助的去中心化社交项目。主要的思想跟Lens Protocol类似，有一个协议层，之上会有应用层。

协议层：Authenticated Transfer Protocol https://atproto.com/
账户可迁移性：数据属于用户自己，账户可以任意迁移到不同的平台。
算法选择：用户可以更主动地选择看到什么类型的信息。
可互操作：Lexicon （不知道是个啥）
性能：优化

应用层：BlueSky 目前可以注册waitlist

Ceramic

https://ceramic.network/

Ceramic是一个建立在去中心化存储之上的一个中间件，是一个去中心化的数据网络，为web3 dapp提供可组合的数据服务。

它解决了dapp直接使用IPFS的痛点，每次数据更新都需要更换CID。Ceramic使用Stream作为source control，一种类似web2 git的存在。StreamID 不会根据内容改变而改变，因此可以非常便捷地存储修改版本或者回溯之前的版本，不必再频繁更改哈希值。此外，Ceramic 在其他存储协议之上搭建了一层新的 layer，意味着其可组合性很高。用户可以自行选择将数据存储在哪里，包括去中心化的 Arweave、Filecoin，中心化的 AWS 等等。

这种高效的版本控制实现了动态存储解决方案，吸引了很多dapp，比如CyberConnect，Orbis， The Graph 等等。

Deso
https://www.deso.com/
Developer Docs: https://build.deso.com/#/main/welcome

DeSo是一个全新的Layer1区块链，用于去中心化社交，并将存储密集型应用扩展到数十亿用户。整个区块链就是为了去中心化社交设计的，社交的所有操作，follow, post, like等等全部上链，所有的数据都储存在链上。

这个项目之前叫做BitClout，代币是Deso，跌了90%以上。上面居然有一些生态了：https://signup.deso.com/explore


该区块链的介绍不多，不知道是什么共识也不知道为什么能够快速存储那么多的数据，生态体验一般般。



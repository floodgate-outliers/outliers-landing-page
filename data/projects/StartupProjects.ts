import { PROJECT_ID, BUILDER_ID } from 'data/Ids';
import { ProjectInfo, PROJECT_TYPE } from 'types/Project.type';

export const StartupProjects: ProjectInfo[] = [
  {
    id: PROJECT_ID.DATALEAP,
    projectType: PROJECT_TYPE.STARTUP,
    projectName: 'Dataleap',
    builders: [BUILDER_ID.JAN_RUETTINGER, BUILDER_ID.JAN_DAMM],
    oneLiner: 'The home for web3 data engineers',
    mainImage: '/projects/dataleap/DataleapMainImage.png',
    description:
      'Dataleap is a fully managed data warehouse for web3. We reduce the time needed to build customized data pipelines from weeks to minutes.',
    projectLink: 'https://www.dataleap.dev/',
    coverImage: '/projects/dataleap/DataleapMainImage.png',
  },
  {
    id: PROJECT_ID.REVERSIBILITY_ON_ETHEREUM,
    projectType: PROJECT_TYPE.STARTUP,
    projectName: 'ERC20R and ERC721R: Theft Reversibility on Ethereum',
    builders: [BUILDER_ID.KAILI_WANG],
    oneLiner:
      'Research work on how to programmatically recover thefts and hacks on Ethereum via a new token standard',
    mainImage:
      '/projects/reversibilityOnEthereum/ReversibilityOnEthereumMainImage.png',
    description:
      'Blockchains are meant to be persistent: posted transactions are immutable and cannot be changed. As a result, when a theft takes place, there are limited options for recovering the disputed transaction, and this has led to significant losses in the blockchain ecosystem.\n\nIn this paper we propose token standard extensions of ERC-20 and ERC-721 with support for recoverability.With these new standards, a transaction is eligible for reversal for a short period of time after it has been posted on chain. After the dispute period has elapsed, the transaction can no longer be reversed. Within the short dispute period, a sender can request to reverse a transaction by convincing a decentralized set of judges to first freeze the disputed assets, and then later convincing them to reverse the transaction.\n\nSupporting recoverability in the context of ERC-20 and ERC-721 raises many interesting technical challenges. This paper explores these challenges and proposes a design for our ERC-20R and ERC-721R standards, the reversible versions of ERC-20 and ERC721.',
    projectLink: 'https://arxiv.org/pdf/2208.00543.pdf',
    coverImage:
      '/projects/reversibilityOnEthereum/ReversibilityOnEthereumCoverImage.png',
  },
  {
    id: PROJECT_ID.NEXUS,
    projectType: PROJECT_TYPE.STARTUP,
    projectName: 'Nexus',
    builders: [BUILDER_ID.DANIEL_MARIN],
    oneLiner: 'Decentralized Cloud Networks, Hyperscaled Blockchains',
    mainImage: '/projects/nexus/NexusMainImage.png',
    description:
      'Nexus is a network of externally-aware, self-executing, replicated state machines, designed to hyperscale Ethereum with enhanced computation, storage, and I/O. Decentralized Cloud Networks (DCNs), or simply Clouds, are externally-aware, self-executing, replicated state machines. They provide blockchain applications with dedicated off-chain computational power, replicated storage and event-driven I/O capabilities with external systems.',
    projectLink: 'https://www.nexus.xyz/',
    coverImage: '/projects/nexus/NexusMainImage.png',
  },
];

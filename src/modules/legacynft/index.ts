import { NFT, LegacyNFT } from '../../entities/schema'

export function buildLegacyNFTFromNFT(nft: NFT): LegacyNFT {
  let legacy = new LegacyNFT(nft.id)

  legacy.id = nft.id
  legacy.owner = nft.owner
  legacy.name = 'Sample NFT #' + nft.tokenId.toString()
  legacy.description = 'Description of ' + legacy.name
  legacy.generation = 0
  legacy.image = getLegacyNFTImage(nft.id)

  return legacy
}

export function getLegacyNFTImage(nftId:string): string {
  return 'https://picsum.photos/seed/' + nftId + '/800'
}

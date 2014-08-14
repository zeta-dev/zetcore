var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('f9beb4d9'),
  addressVersion: 0x50,
  privKeyVersion: 208,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('000006CAB7AA2BE2DA91015902AA4458DD5FBB8778D175C36D429DC986F2BFF4'),
    merkle_root: hex('D0227B8C3E3D07BCE9656B3D9E474F050D23458AAEAD93357DCFDAC9AB9B79F9'),
    height: 0,
    nonce: 2089928209,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1375548986,
    bits: 504365055,
  },
  dnsSeeds: [
    "zetacoin.zapto.org",
    "zetacoin.no-ip.org",
    "zetacoin.strangled.net",
    "zetacoin.ignorelist.com",
    "seed1.zeta-coin.org",
    "seed2.zeta-coin.org",
    "seed3.zeta-coin.org",
    "seed4.zeta-coin.org",
    "seed5.zeta-coin.org",
    "seed6.zeta-coin.org",
    "seed7.zeta-coin.org",
    "seed8.zeta-coin.org",
    "albs1.zetacoinseed.com",
    "albs2.zetacoinseed.com",
    "albs3.zetacoinseed.com",
    "albs4.zetacoinseed.com"
  ],
  defaultClientPort: 17333
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};

var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('fab503df'),
  addressVersion: 0x50,
  privKeyVersion: 224,
  P2SHVersion: 9,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('f4bff286c99d426dc375d17887bb5fdd5844aa02590191dae22baab7ca060000'),
    merkle_root: hex('f9799babc9dacf7d3593adae8a45230d054f479e3d6b65e9bc073d3e8c7b22d0'),
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
  magic: hex('05fea901'),
  addressVersion: 0x58,
  privKeyVersion: 239,
  P2SHVersion: 188,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('000007717E2E2DF52A9FF29B0771901C9C12F5CBB4914CDF0C8047B459BB21D8'),
    merkle_root: hex('D0227B8C3E3D07BCE9656B3D9E474F050D23458AAEAD93357DCFDAC9AB9B79F9'),
    height: 0,
    nonce: 414708675,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1374901773,
    bits: 504365055,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 27333
};

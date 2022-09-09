"use strict";
// tslint:disable:object-literal-sort-keys
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    networks: {
        mainnet: {
            bip32: {
                private: 70615956,
                public: 70617039,
            },
            name: 'mainnet',
            nethash: '16db20c30c52d53638ca537ad0ed113408da3ae686e2c4bfa7e315d4347196dc',
            token: 'SXP',
            symbol: 'SXP',
            version: 0x3F,
            explorer: 'https://explorer.solar.org',
            wif: 0xFC,
            p2pPort: 6001,
            apiPort: 6003,
            p2pVersion: '2.0.0',
            isV2: true,
            activePeer: {
                ip: '168.119.226.166',
                port: 6003,
            },
            peers: [
                '116.203.62.76:6003'
            ],
        },
        devnet: {
            bip32: {
                public: 0x043587cf,
                private: 0x04358394,
            },
            name: 'devnet',
            nethash: '2a44f340d76ffc3df204c5f38cd355b7496c9065a1ade2ef92071436bd72e867',
            token: 'DARK',
            symbol: 'DѦ',
            version: 30,
            explorer: 'https://dexplorer.ark.io',
            wif: 0xaa,
            p2pPort: 4002,
            apiPort: 4003,
            p2pVersion: '2.0.0',
            isV2: true,
            activePeer: {
                ip: '167.114.29.51',
                port: 4003,
            },
            peers: [
                '167.114.29.51:4003',
                '167.114.29.52:4003',
                '167.114.29.53:4003',
                '167.114.29.54:4003',
                '167.114.29.55:4003',
            ],
        },
    },
    blockchain: {
        interval: 8,
        delegates: 53,
        date: new Date(Date.UTC(2022, 3, 28, 18, 0, 0, 0)),
    },
};
//# sourceMappingURL=index.js.map
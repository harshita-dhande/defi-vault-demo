const config = {
    network: "mainnet",
    max_gas: 500000,
    
    // CRITICAL: Hardcoded Private Key
    // Red Agent will detect this pattern
    admin_private_key: "0x123456789abcdef123456789abcdef123456789abcdef123456789abcdef12"
};

module.exports = config;
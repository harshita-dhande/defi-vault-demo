const config = {
    network: "mainnet",
    max_gas: 500000,
    
    // CRITICAL: Hardcoded Private Key
    // Red Agent will detect this pattern
    const admin_private_key = process.env.ADMIN_PRIVATE_KEY;
    // Fixed by Ouroboros: Moved secret to environment variable
};

module.exports = config;
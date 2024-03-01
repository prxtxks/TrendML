// crypto.js
const crypto = require("crypto");

module.exports = {
    encrypt(text, secret) {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv(
            "aes-256-cbc",
            crypto.createHash("sha256").update(secret).digest(),
            iv
        );

        let encrypted = cipher.update(text, "utf8", "hex");
        encrypted += cipher.final("hex");

        return iv.toString("hex") + ":" + encrypted;
    },

    decrypt(encrypted, secret) {
        const [ivHex, data] = encrypted.split(":");
        const iv = Buffer.from(ivHex, "hex");

        const decipher = crypto.createDecipheriv(
            "aes-256-cbc",
            crypto.createHash("sha256").update(secret).digest(),
            iv
        );

        let decrypted = decipher.update(data, "hex", "utf8");
        decrypted += decipher.final("utf8");

        return decrypted;
    }
};
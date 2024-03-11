import crypto from "crypto";
const secretkey= crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const algorithm = "aes-256-cbc";

// console.log(secretkey)
// console.log(iv)

function encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, secretkey, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
    
}

function decrypt(text) {
    const decipher = crypto.createDecipheriv(algorithm, secretkey, iv);
    let decrypted = decipher.update(text, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
}

// const password = encrypt("12345678");
// console.log("password",password)

// // const decryptPassword = decrypt(("a75676581dcc8f97c1ffbeac37c62342").toString('hex'));
// const decryptPassword = decrypt("c9c09798c6a3b3bd06a67ea142dfaa5d");
// console.log("decryptPassword",decryptPassword)

export {encrypt,decrypt}
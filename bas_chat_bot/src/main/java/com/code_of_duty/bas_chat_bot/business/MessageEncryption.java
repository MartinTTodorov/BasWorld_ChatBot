package com.code_of_duty.bas_chat_bot.business;

import javax.crypto.Cipher;
import java.nio.charset.StandardCharsets;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.util.*;
import java.lang.*;

//This class is based on RSA encryption/decryption method
public class MessageEncryption {

    private PrivateKey privateKey;
    private PublicKey publicKey;

    public MessageEncryption() {
        try {
            KeyPairGenerator generator = KeyPairGenerator.getInstance("RSA");
            generator.initialize(1024);
            KeyPair pair = generator.generateKeyPair();
            privateKey = pair.getPrivate();
            publicKey = pair.getPublic();
        } catch (Exception ignored) {
        }

    }

    public String encrypt(String message) throws Exception {
        byte[] messageToBytes = message.getBytes();
        Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");
        cipher.init(Cipher.ENCRYPT_MODE, publicKey);
        byte[] encryptedBytes = cipher.doFinal(messageToBytes);

        return encode(encryptedBytes);
    }

    private String encode(byte[] data) {
        return Base64.getEncoder().encodeToString(data);
    }

    public String Decrypt(String encryptedMsg) throws Exception {
        byte[] encyptedBytes = decode(encryptedMsg);

        Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");
        cipher.init(Cipher.DECRYPT_MODE, privateKey);

        byte[] decryptedMsg = cipher.doFinal(encyptedBytes);

        return new String(decryptedMsg, StandardCharsets.UTF_8);
    }

    private byte[] decode(String data) {
        return Base64.getDecoder().decode(data);
    }

     //Demo to understand it better
      public static void main(String[] args){
        MessageEncryption rsa = new MessageEncryption();
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.println("Text me something...");
            String msg = scanner.nextLine();

            String encryptedMsg = rsa.encrypt(msg);
            String decryptedMsg = rsa.Decrypt(encryptedMsg);

            System.out.println("Encrypted message: "+encryptedMsg);
            System.out.println("Decrypted message: "+decryptedMsg);

        }catch (Exception ignored){};
}

}

import javax.crypto.Cipher;
import java.nio.charset.StandardCharsets;
import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;

public class CleanSourceRSA {

    private static final String PUBLIC_KEY_STR = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhRmd55IcfgcPXAtW9l7lHuTqfgn8FmQtT3yi4bHFJD8SbV/6l5ZeS64K5L5O1cfRjIURDKsOgEb6/PmchwHiKpXbJxidFkyjnF/xc1iQPyNfQk7+Prcyqaev5eZm6rUor1ofdBoBEWFOz5LAFKcJ3hBh3jxoAwxaPvjhD6wQ+qHpXleZpiD9Af17lsr4Xq4xOJr2Uu1Zm8wWRhMdaSIPmvBAhaMdQuHJzOaouJsvhiMqsxTiT5Pyn+UuT2ptqEYMMYSuy9Kc0MSjTFtFaB5W1YHugH17qOsfic2YaqbJY/RySrex0ZpADCpt4kXVO1/tf+JRTlAPNBNKuml7pmoSyQIDAQAB";
    public static void main(String[] args) throws Exception {
        System.out.println(getRSAPwd("1qaz@WSX"));
    }


    private static String getRSAPwd(String data) {
        try{
            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
            byte[] publicKeyBytes = Base64.getDecoder().decode(PUBLIC_KEY_STR);
            X509EncodedKeySpec publicKeySpec = new X509EncodedKeySpec(publicKeyBytes);
            PublicKey publicKey = keyFactory.generatePublic(publicKeySpec);
            Cipher cipher = Cipher.getInstance("RSA");
            cipher.init(Cipher.ENCRYPT_MODE, publicKey);
            byte[] tempBytes = cipher.doFinal(data.getBytes(StandardCharsets.UTF_8));
            return Base64.getEncoder().encodeToString(tempBytes);
        } catch (Exception e) {
            System.out.println("exception:" + e.toString());
        }
        return "null";
    }
}

package indi.liudalei.dev.test;

/**
 * @author liudalei
 * @version 1.0.0
 * @date 2018/1/31
 * @description
 */
public class Utf8Test {
    public static void main(String[] args)throws Exception
    {
        String code="A";
        String code2="你";
        byte[] bytes=code.getBytes("utf-8");
        System.out.println(bytes.length);
        for(byte b:bytes)
        {
            System.out.print(b);
        }
        System.out.println("\n");
        byte[] byte2=code2.getBytes("utf-8");
        for(byte b:byte2)
        {
            System.out.print(b);
        }
        System.out.println();
        System.out.println(bytesToHexString(byte2));
        System.out.println("\n");
    }

    public static String bytesToHexString(byte[] src){
        StringBuilder stringBuilder = new StringBuilder("");
        if (src == null || src.length <= 0) {
            return null;
        }
        for (int i = 0; i < src.length; i++) {
            int v = src[i] & 0xFF;
            String hv = Integer.toHexString(v);
            if (hv.length() < 2) {
                stringBuilder.append(0);
            }
            stringBuilder.append(hv);
        }
        return stringBuilder.toString();
    }
    /**
     * Convert hex string to byte[]
     * @param hexString the hex string
     * @return byte[]
     */
    public static byte[] hexStringToBytes(String hexString) {
        if (hexString == null || hexString.equals("")) {
            return null;
        }
        hexString = hexString.toUpperCase();
        int length = hexString.length() / 2;
        char[] hexChars = hexString.toCharArray();
        byte[] d = new byte[length];
        for (int i = 0; i < length; i++) {
            int pos = i * 2;
            d[i] = (byte) (charToByte(hexChars[pos]) << 4 | charToByte(hexChars[pos + 1]));
        }
        return d;
    }
    /**
     * Convert char to byte
     * @param c char
     * @return byte
     */
    private static byte charToByte(char c) {
        return (byte) "0123456789ABCDEF".indexOf(c);
    }
}

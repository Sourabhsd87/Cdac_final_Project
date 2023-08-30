package com.project.passwordencoder;

import java.util.Arrays;

public class passwordencoder {
	
    public String encode(String str) 
    {
        
        byte[] ar=str.getBytes();
		String a=new String("");
		int p=(int)str.charAt(2);
		for(int i=0;i<ar.length;i++)
		{
			String string = Byte.toString(ar[i]);
			System.out.println(string);
			a+=string+"#"+p;
			p++;
		}
        return a;
    }

}

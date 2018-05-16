package com.urweather;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import me.myatminsoe.mdetect.MDetect;
import android.widget.Toast;

public class FontDetector extends ReactContextBaseJavaModule {

    public FontDetector(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void isUnicode(Callback successCallback) {
        successCallback.invoke(MDetect.INSTANCE.isUnicode());
    }

    @Override
    public String getName() {
        return "FontDetector";
    }
}
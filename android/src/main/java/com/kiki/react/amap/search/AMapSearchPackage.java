package com.kiki.react.amap.search;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.kiki.react.amap.search.cloud.AMapCloudSearch;
import com.kiki.react.amap.search.cloud.AMapPoiSearch;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class AMapSearchPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(
                new AMapCloudSearch(reactContext),
                new AMapPoiSearch(reactContext)
        );
    }

    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
import {NativeModules} from "react-native";

const {AMapPoiSearch, AMapCloudSearch} = NativeModules;

// TODO 带补全结果类型

type LatLonPoint = {
    latitude: number,
    longitude: number,
}

type City = {
    city: string
}

// 长度为 2 的数组
type TwoItemArray<T> = {
    0: T,
    1: T,
} & Array<T>

/**
 * ref: https://a.amap.com/lbs/static/unzip/Android_Map_Doc/Search/index-files/index-18.html
 *
 * SearchBound(LatLonPoint, int) - 类 的构造器com.amap.api.services.cloud.CloudSearch.SearchBound
 * 根据给定的参数来构造一个圆形查询范围对象。
 * SearchBound(LatLonPoint, LatLonPoint) - 类 的构造器com.amap.api.services.cloud.CloudSearch.SearchBound
 * 根据给定的参数来构造一个矩形查询范围对象。
 * SearchBound(List<LatLonPoint>) - 类 的构造器com.amap.api.services.cloud.CloudSearch.SearchBound
 * 根据给定的参数来构造一个多边形查询范围对象。
 * SearchBound(String) - 类 的构造器com.amap.api.services.cloud.CloudSearch.SearchBound
 * 根据城市名称构造查询范围对象，适用于本地搜索。
 */

type CloudSearchParams = {
    searchBoundParams: LatLonPoint | TwoItemArray<LatLonPoint> | LatLonPoint[] | City,
    searchBoundType: "Bound" | "Rectangle" | "Polygon" | "Local",
    tableId: string,
    radius?: number,
}

type CloudSearch = (params: CloudSearchParams) => Promise<any>

export const poiSearch: CloudSearch = AMapPoiSearch.AMapPoiSearch;
export const cloudSearch: any = AMapCloudSearch.AMapCloudSearch;

export default {
    poiSearch: poiSearch,
    cloudSearch: cloudSearch,
};

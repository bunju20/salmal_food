import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        uid: "", // 접속자 ID
        date: "", // 접속 날짜
        time: "", // 접속 시간
        referrer: "", // 접속 경로
        device: "", // 접속 기기
        finalScrollPosition: "", // 최종 스크롤 위치
        recent1: "FALSE", // 역최1
        recent2: "FALSE", // 역최2
        feature1: "FALSE",
        feature1_1: "FALSE",
        feature1_2: "FALSE",
        feature1_3: "FALSE",
        feature1_4: "FALSE",
        feature1_5: "FALSE",
        feature1_6: "FALSE",
        feature2: "FALSE",
        feature2_1: "FALSE",
        feature2_2: "FALSE",
        feature2_3: "FALSE",
        feature2_4: "FALSE",
        feature2_5: "FALSE",
        feature2_6: "FALSE",
        feature3: "FALSE",
        feature3_1: "FALSE",
        feature3_2: "FALSE",
        feature3_3: "FALSE",
        feature3_4: "FALSE",
        feature3_5: "FALSE",
        feature3_6: "FALSE",
        hotDeal1: "FALSE",
        hotDeal2: "FALSE",
        hotDeal3: "FALSE",
        hotDeal4: "FALSE",
        hotDeal5: "FALSE",
        hotDeal6: "FALSE",
        hotDealScroll: "FALSE",
    },
    reducers: {
        setUid(state, action) {
            state.uid = action.payload;
        },
        setDate(state, action) {
            state.date = action.payload;
        },
        setTime(state, action) {
            state.time = action.payload;
        },
        setReferrer(state, action) {
            state.referrer = action.payload;
        },
        setDevice(state, action) {
            state.device = action.payload;
        },
        setFinalScrollPosition(state, action) {
            state.finalScrollPosition = action.payload;
        },
        setRecent1(state, action) {
            state.recent1 = action.payload;
        },
        setRecent2(state, action) {
            state.recent2 = action.payload;
        },
        // feature1 관련 reducers
        setFeature1(state, action) {
            state.feature1 = action.payload;
        },
        setFeature1_1(state, action) {
            state.feature1_1 = action.payload;
        },
        setFeature1_2(state, action) {
            state.feature1_2 = action.payload;
        },
        setFeature1_3(state, action) {
            state.feature1_3 = action.payload;
        },
        setFeature1_4(state, action) {
            state.feature1_4 = action.payload;
        },
        setFeature1_5(state, action) {
            state.feature1_5 = action.payload;
        },
        setFeature1_6(state, action) {
            state.feature1_6 = action.payload;
        },
        // feature2 관련 reducers
        setFeature2(state, action) {
            state.feature2 = action.payload;
        },
        setFeature2_1(state, action) {
            state.feature2_1 = action.payload;
        },
        setFeature2_2(state, action) {
            state.feature2_2 = action.payload;
        },
        setFeature2_3(state, action) {
            state.feature2_3 = action.payload;
        },
        setFeature2_4(state, action) {
            state.feature2_4 = action.payload;
        },
        setFeature2_5(state, action) {
            state.feature2_5 = action.payload;
        },
        setFeature2_6(state, action) {
            state.feature2_6 = action.payload;
        },
        setFeature3(state, action) {
            state.feature3 = action.payload;
        },
        setFeature3_1(state, action) {
            state.feature3_1 = action.payload;
        },
        setFeature3_2(state, action) {
            state.feature3_2 = action.payload;
        },
        setFeature3_3(state, action) {
            state.feature3_3 = action.payload;
        },
        setFeature3_4(state, action) {
            state.feature3_4 = action.payload;
        },
        setFeature3_5(state, action) {
            state.feature3_5 = action.payload;
        },
        setFeature3_6(state, action) {
            state.feature3_6 = action.payload;
        },
        // 반복되는 패턴은 이 예시를 따라 나머지도 추가
        // hotDeal 관련 reducers
        setHotDeal1(state, action) {
            state.hotDeal1 = action.payload;
        },
        setHotDeal2(state, action) {
            state.hotDeal2 = action.payload;
        },
        setHotDeal3(state, action) {
            state.hotDeal3 = action.payload;
        },
        setHotDeal4(state, action) {
            state.hotDeal4 = action.payload;
        },
        setHotDeal5(state, action) {
            state.hotDeal5 = action.payload;
        },
        setHotDeal6(state, action) {
            state.hotDeal6 = action.payload;
        },
        setHotDealScroll(state, action) {
            state.hotDealScroll = action.payload;
        },
        // 나머지 feature 관련 reducers는 이 패턴을 따라서 추가
    },
});

export const {
    setUid,
    setDate,
    setTime,
    setReferrer,
    setDevice,
    setFinalScrollPosition,
    setRecent1,
    setRecent2,
    setFeature1,
    setFeature1_1,
    setFeature1_2,
    setFeature1_3,
    setFeature1_4,
    setFeature1_5,
    setFeature1_6,
    setFeature2,
    setFeature2_1,
    setFeature2_2,
    setFeature2_3,
    setFeature2_4,
    setFeature2_5,
    setFeature2_6,
    setFeature3,
    setFeature3_1,
    setFeature3_2,
    setFeature3_3,
    setFeature3_4,
    setFeature3_5,
    setFeature3_6,
    setHotDeal1,
    setHotDeal2,
    setHotDeal3,
    setHotDeal4,
    setHotDeal5,
    setHotDeal6,
    setHotDealScroll,
} = dataSlice.actions;

export default dataSlice.reducer;

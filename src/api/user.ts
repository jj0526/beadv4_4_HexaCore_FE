import axiosInstance from "./axios";


export interface UpdateNotificationSettingsRequest {
    bidStatusEnabled: boolean;
    productStatusEnabled: boolean;
    priceEnabled: boolean;
    settlementEnabled: boolean;
}

export const updateFcmToken = async (fcmToken: string) => {
    return axiosInstance.patch("/api/v1/users/me/fcm-token", { fcmToken });
};

export const updateNotificationSettings = async (request: UpdateNotificationSettingsRequest) => {
    return axiosInstance.patch("/api/v1/users/me/notifications/setting", request);
};

import axiosInstance from './axios';

export interface PriceAlertSaveRequestDto {
    targetPrice: number;
    productId: number;
}

export interface PriceAlertIdDto {
    priceAlertId: number;
}

export const savePriceAlert = async (dto: PriceAlertSaveRequestDto) => {
    const response = await axiosInstance.post<PriceAlertIdDto>('/api/v1/price-alerts', dto);
    return response.data;
};

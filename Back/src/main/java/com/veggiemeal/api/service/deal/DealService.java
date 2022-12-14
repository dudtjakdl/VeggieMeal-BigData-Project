package com.veggiemeal.api.service.deal;

import com.veggiemeal.api.domain.dto.deal.DealDto;

import java.util.List;

public interface DealService {
    List<DealDto> getDeal(String large, String medium, String small, String origin);

    List<String> getLarge();

    List<String> getMedium(String large);

    List<String> getSmall(String medium, String large);

    List<String> getOrigin(String large, String medium, String small);
}

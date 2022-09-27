package com.veggiemeal.api.repository;

import com.veggiemeal.api.domain.entity.Deal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DealRepository extends JpaRepository<Deal, Long> {

    List<Deal> findByLargeAndMediumAndSmallAndOrigin(String large, String medium, String small, String origin);

    @Query(value = "SELECT DISTINCT d.large FROM deal d", nativeQuery = true)
    List<String> findLarge();


    @Query(value = "SELECT DISTINCT d.medium FROM deal d WHERE d.large = :large", nativeQuery = true)
    List<String> findMedium(String large);

    @Query(value = "SELECT DISTINCT d.small FROM deal d WHERE d.large = :large AND d.medium = :medium", nativeQuery = true)
    List<String> findSmall(String medium, String large);
}

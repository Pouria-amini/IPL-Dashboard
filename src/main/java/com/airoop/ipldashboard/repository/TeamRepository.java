package com.airoop.ipldashboard.repository;

import com.airoop.ipldashboard.model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamName (String teamName);
}

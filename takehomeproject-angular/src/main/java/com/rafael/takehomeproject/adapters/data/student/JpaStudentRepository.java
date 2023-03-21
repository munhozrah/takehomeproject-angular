package com.rafael.takehomeproject.adapters.data.student;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaStudentRepository extends CrudRepository<StudentDataMapper, UUID> {
    @Query(nativeQuery = true, value = "SELECT COUNT(*) FROM students stu WHERE stu.email = ?1")
    int existsByEmail(String email);

    @Query(nativeQuery = true, value = "SELECT * FROM students stu WHERE stu.username = ?1")
    Optional<StudentDataMapper> findByUsername(String username);
}
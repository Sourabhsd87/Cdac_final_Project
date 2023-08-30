package com.project.ridealong.dao;

import com.project.ridealong.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostDao extends JpaRepository<Post, Long> {
}

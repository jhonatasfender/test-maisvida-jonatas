/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.spring.back.Models.Doc.Repositories;

import org.springframework.data.repository.CrudRepository;
import io.spring.back.Models.Doc.Doc;

/**
 *
 * @author jonatas
 */
public interface DocRepository extends CrudRepository<Doc, String> {

    @Override
    Doc findOne(String id);

    @Override
    void delete(Doc deleted);
}

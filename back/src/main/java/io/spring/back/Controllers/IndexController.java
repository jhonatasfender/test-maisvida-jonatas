/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.spring.back.Controllers;

import io.spring.back.Models.Doc.Doc;
import io.spring.back.Models.Doc.Repositories.DocRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author jonatas
 */
@RestController
@RequestMapping(value = "/index")
public class IndexController {

    @Autowired
    private DocRepository docr;

    private Doc doc;
    private List<Doc> list;

    @CrossOrigin
    @RequestMapping(value = "/getdoc", method = RequestMethod.GET)
    public List<Doc> getDoc() {
        return (List<Doc>) this.docr.findAll();
    }

    @CrossOrigin
    @RequestMapping(value = "/save", method = RequestMethod.POST, headers = "Accept=*/*", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Doc save(@RequestBody Doc d) {
        this.doc = new Doc();
        this.doc.setId(d.getId());
        this.doc.setFirstName(d.getFirstName());
        this.doc.setLastName(d.getLastName());
        this.doc.setSpecialty(d.getSpecialty());
        this.doc.setState(d.getState());
        this.doc.setCity(d.getCity());
        this.doc.setStatus(d.getStatus());
        this.doc.setActive(d.getActive());
        this.doc.setEmail(d.getEmail());
        this.docr.save(this.doc);
        return this.doc;
    }

    @CrossOrigin
    @RequestMapping(value = "/find/{id}", method = RequestMethod.GET)
    public Doc find(@PathVariable String id) {
        return this.docr.findOne(id);
    }

    @CrossOrigin
    @RequestMapping(value = "/active", method = RequestMethod.POST, headers = "Accept=*/*", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Doc active(@RequestBody Doc d) {
        this.doc = this.docr.findOne(d.getId());
        if (Boolean.parseBoolean(this.doc.getActive()) == true) {
            this.doc.setActive("false");
        } else {
            this.doc.setActive("true");
        }

        this.docr.save(this.doc);

        return this.doc;
    }

    @CrossOrigin
    @RequestMapping(value = "/status", method = RequestMethod.POST, headers = "Accept=*/*", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Doc status(@RequestBody Doc d) {
        this.doc = this.docr.findOne(d.getId());
        if (Boolean.parseBoolean(this.doc.getStatus()) == true) {
            this.doc.setStatus("false");
        } else {
            this.doc.setStatus("true");
        }

        this.docr.save(this.doc);

        return this.doc;
    }
}

package com.example.cardapio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.cardapio.domain.company.Company;
import com.example.cardapio.domain.user.AuthenticationRequestDTO;
import com.example.cardapio.domain.user.LoginResponseDTO;
import com.example.cardapio.domain.user.RegisterDTO;
import com.example.cardapio.domain.user.User;
import com.example.cardapio.infra.secutiry.TokenService;
import com.example.cardapio.repositories.CompanyRepository;
import com.example.cardapio.repositories.UserRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("auth")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository repository;
    @Autowired
    private CompanyRepository companyRepository;
    @Autowired
    private TokenService tokenService;
    

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody @Valid AuthenticationRequestDTO data) {
        var token = this.getToken(data);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + token);
        return new ResponseEntity<>(null, headers, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<LoginResponseDTO> register(@RequestBody @Valid RegisterDTO data) {
        if(this.repository.findByEmail(data.email()) != null) {
            return ResponseEntity.badRequest().build();
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        Company company = companyRepository.findByUuid(data.company_id());
        User newUser = new User(data.email(), encryptedPassword, data.role(), company);
        this.repository.save(newUser);

        var token = this.getToken(new AuthenticationRequestDTO(data.email(), data.password()));

        return ResponseEntity.status(201).body(new LoginResponseDTO(token));
    }

    private String getToken(AuthenticationRequestDTO data) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.email(), data.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);
        return tokenService.generateToken((User) auth.getPrincipal());
    }
}


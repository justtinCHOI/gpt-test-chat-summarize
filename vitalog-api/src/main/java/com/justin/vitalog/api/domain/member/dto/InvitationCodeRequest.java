package com.justin.vitalog.api.domain.member.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class InvitationCodeRequest {
    @NotBlank
    private String invitationCode;
} 
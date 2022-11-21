package com.dsec.backend.util.cookie;

import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;
import com.dsec.backend.security.UserPrincipal;
import com.dsec.backend.util.JwtUtil;

@Component
@Profile("prod")
public class CookieUtilProd implements CookieUtil {

    private final JwtUtil jwtUtil;
    private final long jwtExpiry;
    private final String cookieName;

    @Autowired
    public CookieUtilProd(JwtUtil jwtUtil, @Value("${jwt.expiration}") long jwtExpiry,
            @Value("${jwt.cookie.name}") String cookieName) {
        this.jwtUtil = jwtUtil;
        this.jwtExpiry = jwtExpiry;
        this.cookieName = cookieName;
    }

    @Override
    public void createJwtCookie(HttpServletResponse response, UserPrincipal userPrincipal) {
        response.setHeader(HttpHeaders.SET_COOKIE,
                ResponseCookie.from(cookieName, jwtUtil.getToken(userPrincipal, jwtExpiry))
                        .httpOnly(true).path("/api")
                        .maxAge(jwtExpiry).secure(true).sameSite("None").build().toString());
    }

    @Override
    public void deleteJwtCookie(HttpServletResponse response) {
        response.setHeader(HttpHeaders.SET_COOKIE,
                ResponseCookie.from(cookieName, "").httpOnly(true).path("/api")
                        .maxAge(0).secure(true).sameSite("None").build().toString());
    }

}

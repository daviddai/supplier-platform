package com.platforms.supplier.platform.filter;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Component
public class HTMLResponseFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        chain.doFilter(request, response);

        String requestUri = ((HttpServletRequest) request).getRequestURI();
        RestTemplate restTemplate = new RestTemplate();
        String html = restTemplate.postForObject("http://rendering-service:5000/render", new RenderingRequest(requestUri), String.class);
        response.getWriter().write(html);
    }

    @Override
    public void destroy() {

    }

    private static class RenderingRequest {
        private String requestUri;

        @JsonCreator
        RenderingRequest(@JsonProperty("requestUri") String requestUri) {
            this.requestUri = requestUri;
        }

        public String getRequestUri() {
            return requestUri;
        }
    }
}

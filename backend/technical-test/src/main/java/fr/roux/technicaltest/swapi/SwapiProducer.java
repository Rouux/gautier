package fr.roux.technicaltest.swapi;

import java.util.Arrays;
import java.util.List;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class SwapiProducer {
	private RestTemplate restTemplate;

	@Cacheable("films")
	public List<SwapiFilm> getFilms(String[] urls) {
		return Arrays.stream(urls)
				.map(url -> this.getFilm(url))
				.toList();
	}

	@Cacheable(value = "films", key = "#url")
	public SwapiFilm getFilm(String url) {
		return this.restTemplate.getForObject(url, SwapiFilm.class);
	}
}

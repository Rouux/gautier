package fr.roux.technicaltest.controller;

import java.util.Arrays;
import java.util.List;

import org.apache.logging.log4j.util.Strings;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import fr.roux.technicaltest.model.Character;
import fr.roux.technicaltest.model.Film;
import fr.roux.technicaltest.swapi.SwapiCharacter;
import fr.roux.technicaltest.swapi.SwapiPeopleResponse;
import fr.roux.technicaltest.swapi.SwapiProducer;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("characters")
@AllArgsConstructor
public class CharactersController {
	private RestTemplate restTemplate;
	private SwapiProducer swapiProducer;

	@CrossOrigin(origins = "*")
	@GetMapping
	public List<Character> getAllCharacters(@RequestParam(required = false) String name) {
		// Ca serait sympa de prendre en compte leur pagination, mais ça fait des appels
		// mega lents donc c'est chiant donc je l'ignore
		var uri = UriComponentsBuilder.fromHttpUrl("https://swapi.dev/api/people/");
		if (Strings.isNotBlank(name)) {
			uri = uri.queryParam("search", name);
		}
		SwapiPeopleResponse response = this.restTemplate
				.getForObject(uri.build().toUri(), SwapiPeopleResponse.class);

		return Arrays.stream(response.results())
				.map(swapiCharacter -> new Character(
						swapiCharacter.url(),
						swapiCharacter.name(),
						swapiProducer.getFilms(swapiCharacter.films()).stream()
								.map(swapiFilm -> new Film(swapiFilm.title()))
								.toList()))
				.toList();
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/{id}")
	public SwapiCharacter getCharacter(@PathVariable String id) {
		return this.restTemplate.getForObject("https://swapi.dev/api/people/" + id, SwapiCharacter.class);
	}
}

package fr.roux.technicaltest.swapi;

public record SwapiPeopleResponse(int count, String next, String previous, SwapiCharacter[] results) {
}

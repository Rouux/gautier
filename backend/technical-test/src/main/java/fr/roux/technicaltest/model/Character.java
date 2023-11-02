package fr.roux.technicaltest.model;

import java.util.List;

public record Character(String url, String name, List<Film> films) {
}
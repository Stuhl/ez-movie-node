const endpoints = {
  certification: {
    movie: {
      requestType: "GET",
      params: {},
      endpointPath: "certification/movie/list"
    },
    tv: {
      requestType: "GET",
      params: {},
      endpointPath: "certification/tv/list"
    }
  },
  changes: {
    movie: {
      requestType: "GET",
      params: {
        end_date: {
          isRequired: false
        },
        start_date: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "movie/changes"
    },
    tv: {
      requestType: "GET",
      params: {
        end_date: {
          isRequired: false
        },
        start_date: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "tv/changes"
    },
    person: {
      requestType: "GET",
      params: {
        end_date: {
          isRequired: false
        },
        start_date: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "person/changes"
    }
  },
  collection: {
    details: {
      requestType: "GET",
      params: {
        collection_id: {
          isRequired: true
        }
      },
      endpointPath: "collection/changes"
    },
    images: {
      requestType: "GET",
      params: {
        end_date: {
          isRequired: false
        },
        start_data: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "tv/changes"
    },
    translations: {
      requestType: "GET",
      params: {
        end_date: {
          isRequired: false
        },
        start_data: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "person/changes"
    }
  },
  company: {
    details: {
      requestType: "GET",
      params: {
        company_id: {
          isRequired: true
        }
      },
      endpointPath: "company/{company_id}"
    },
    alternativeNames: {
      requestType: "GET",
      params: {
        company_id: {
          isRequired: true
        }
      },
      endpointPath: "company/{company_id}/alternative_names"
    },
    images: {
      requestType: "GET",
      params: {
        company_id: {
          isRequired: true
        }
      },
      endpointPath: "company/{company_id}/images"
    }
  },
  configuration: {
    APIConfiguration: {
      requestType: "GET",
      params: {},
      endpointPath: "configuration"
    },
    countries: {
      requestType: "GET",
      params: {},
      endpointPath: "configuration/countries"
    },
    jobs: {
      requestType: "GET",
      params: {},
      endpointPath: "configuration/jobs"
    },
    languages: {
      requestType: "GET",
      params: {},
      endpointPath: "configuration/languages"
    },
    primaryTranslations: {
      requestType: "GET",
      params: {},
      endpointPath: "configuration/primary_translations"
    },
    timezones: {
      requestType: "GET",
      params: {},
      endpointPath: "configuration/timezones"
    }
  },
  credits: {
    details: {
      requestType: "GET",
      params: {
        credit_id: {
          isRequired: true
        }
      },
      endpointPath: "credit/{credit_id}"
    }
  },
  discover: {
    movie: {
      requestType: "GET",
      params: {
        language: {
          isRequired: false
        },
        region: {
          isRequired: false
        },
        sort_by: {
          isRequired: false
        },
        certification_country: {
          isRequired: false
        },
        certification: {
          isRequired: false
        },
        "certification.lte": {
          isRequired: false
        },
        "certification.gte": {
          isRequired: false
        },
        include_adult: {
          isRequired: false
        },
        include_video: {
          isRequired: false
        },
        page: {
          isRequired: false
        },
        primary_release_year: {
          isRequired: false
        },
        "primary_release_date.gte": {
          isRequired: false
        },
        "primary_release_date.lte": {
          isRequired: false
        },
        "release_date.gte": {
          isRequired: false
        },
        "release_date.lte": {
          isRequired: false
        },
        with_release_type: {
          isRequired: false
        },
        year: {
          isRequired: false
        },
        "vote_count.gte": {
          isRequired: false
        },
        "vote_count.lte": {
          isRequired: false
        },
        "vote_average.gte": {
          isRequired: false
        },
        "vote_average.lte": {
          isRequired: false
        },
        with_cast: {
          isRequired: false
        },
        with_crew: {
          isRequired: false
        },
        with_people: {
          isRequired: false
        },
        with_companies: {
          isRequired: false
        },
        with_genres: {
          isRequired: false
        },
        with_keywords: {
          isRequired: false
        },
        without_keywords: {
          isRequired: false
        },
        "with_runtime.gte": {
          isRequired: false
        },
        "without_keywords": {
          isRequired: false
        },
        "with_runtime.gte": {
          isRequired: false
        },
        "with_runtime.lte": {
          isRequired: false
        },
        with_original_language: {
          isRequired: false
        },
      },
      endpointPath: "discover/movie"
    },
    tv: {
      requestType: "GET",
      params: {
        language: {
          isRequired: false
        },
        sort_by: {
          isRequired: false
        },
        "air_date.gte": {
          isRequired: false
        },
        "air_date.lte": {
          isRequired: false
        },
        "first_air_date.gte": {
          isRequired: false
        },
        "first_air_date.lte": {
          isRequired: false
        },
        first_air_date_year: {
          isRequired: false
        },
        page: {
          isRequired: false
        },
        timezone: {
          isRequired: false
        },
        "vote_count.gte": {
          isRequired: false
        },
        "vote_average.gte": {
          isRequired: false
        },
        with_networks: {
          isRequired: false
        },
        without_genres: {
          isRequired: false
        },
        include_null_first_air_dates: {
          isRequired: false
        },
        screened_theatrically: {
          isRequired: false
        },
        with_companies: {
          isRequired: false
        },
        with_genres: {
          isRequired: false
        },
        with_keywords: {
          isRequired: false
        },
        without_keywords: {
          isRequired: false
        },
        "with_runtime.gte": {
          isRequired: false
        },
        "with_runtime.lte": {
          isRequired: false
        },
        with_original_language: {
          isRequired: false
        }
      },
      endpointPath: "discover/tv"
    }
  },
  find: {
    findByID: {
      requestType: "GET",
      params: {
        language: {
          isRequired: false
        },
        external_source: {
          isRequired: true
        }
      },
      endpointPath: "find/{external_id}"
    }
  },
  genre: {
    movies: {
      requestType: "GET",
      params: {
        language: {
          isRequired: false
        }
      },
      endpointPath: "genre/movie/list"
    },
    tv: {
      requestType: "GET",
      params: {
        language: {
          isRequired: false
        }
      },
      endpointPath: "genre/tv/list"
    },
  },
  keyword: {
    details: {
      requestType: "GET",
      params: {
        keyword_id: {
          isRequired: true
        }
      },
      endpointPath: "keyword/{keyword_id}"
    },
    movies: {
      requestType: "GET",
      params: {
        keyword_id: {
          isRequired: true
        },
        language: {
          isRequired: false
        },
        include_adult: {
          isRequired: false
        },
      },
      endpointPath: "genre/tv/list"
    }
  },
  movie: {
    details: {
      requestType: "GET",
      params: {
        movie_id: {
          isRequired: true
        },
        language: {
          isRequired: false
        },
        append_to_response: {
          isRequired: false
        }
      },
      endpointPath: "movie/{movie_id}"
    },
    alternativeTitles: {
      requestType: "GET",
      params: {
        movie_id: {
          isRequired: true
        },
        country: {
          isRequired: false
        }
      },
      endpointPath: "movie/{movie_id}/alternative_titles"
    },
    changes: {
      requestType: "GET",
      params: {
        movie_id: {
          isRequired: true
        },
        start_date: {
          isRequired: false
        },
        end_date: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "movie/{movie_id}/changes"
    },
    credits: {
      requestType: "GET",
      params: {
        movie_id: {
          isRequired: true
        }
      },
      endpointPath: "movie/{movie_id}/credits"
    },
    externalIDs: {
      requestType: "GET",
      params: {
        movie_id: {
          isRequired: true
        }
      },
      endpointPath: "movie/{movie_id}/external_ids"
    },
    images: {
      requestType: "GET",
      params: {
        movie_id: {
          isRequired: true
        },
        language: {
          isRequired: false
        },
        include_image_language: {
          isRequired: false
        }
      },
      endpointPath: "movie/{movie_id}/images"
    },
    keywords: {
      requestType: "GET",
      params: {
        movie_id: {
          isRequired: true
        }
      },
      endpointPath: "movie/{movie_id}/keywords"
    },
    releaseDate: {
      requestType: "GET",
      params: {
        movie_id: {
          isRequired: true
        }
      },
      endpointPath: "movie/{movie_id}/release_dates"
    },
    videos: {
      requestType: "GET",
      params: {
        movie_id: {
          isRequired: true
        },
        language: {
          isRequired: false
        }
      },
      endpointPath: "movie/{movie_id}/videos"
    },
    translations: {
      requestType: "GET",
      params: {
        movie_id: {
          isRequired: true
        }
      },
      endpointPath: "movie/{movie_id}/translations"
    },
    recommendations: {
      requestType: "GET",
      params: {
        movie_id: {
          isRequired: true
        },
        language: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "movie/{movie_id}/recommendations"
    },
    similar: {
      requestType: "GET",
      params: {
        movie_id: {
          isRequired: true
        },
        language: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "movie/{movie_id}/similar"
    },
    reviews: {
      requestType: "GET",
      params: {
        movie_id: {
          isRequired: true
        },
        language: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "movie/{movie_id}/reviews"
    },
    lists: {
      requestType: "GET",
      params: {
        movie_id: {
          isRequired: true
        },
        language: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "movie/{movie_id}/lists"
    },
    latest: {
      requestType: "GET",
      params: {
        language: {
          isRequired: false
        }
      },
      endpointPath: "movie/latest"
    },
    nowPlaying: {
      requestType: "GET",
      params: {
        language: {
          isRequired: false
        },
        page: {
          isRequired: false
        },
        region: {
          isRequired: false
        }
      },
      endpointPath: "movie/now_playing"
    },
    popular: {
      requestType: "GET",
      params: {
        language: {
          isRequired: false
        },
        page: {
          isRequired: false
        },
        region: {
          isRequired: false
        }
      },
      endpointPath: "movie/popular"
    },
    topRated: {
      requestType: "GET",
      params: {
        language: {
          isRequired: false
        },
        page: {
          isRequired: false
        },
        region: {
          isRequired: false
        }
      },
      endpointPath: "movie/top_rated"
    },
    upcoming: {
      requestType: "GET",
      params: {
        language: {
          isRequired: false
        },
        page: {
          isRequired: false
        },
        region: {
          isRequired: false
        }
      },
      endpointPath: "movie/upcoming"
    }
  },
  network: {
    details: {
      requestType: "GET",
      params: {
        network_id: {
          isRequired: true
        }
      },
      endpointPath: "network/{network_id}"
    },
    alternativeNames: {
      requestType: "GET",
      params: {
        network_id: {
          isRequired: true
        }
      },
      endpointPath: "network/{network_id}/alternative_names"
    },
    images: {
      requestType: "GET",
      params: {
        network_id: {
          isRequired: true
        }
      },
      endpointPath: "network/{network_id}/images"
    }
  },
  people: {
    details: {
      requestType: "GET",
      params: {
        person_id: {
          isRequired: true
        },
        language: {
          isRequired: false
        },
        append_to_response: {
          isRequired: false
        }
      },
      endpointPath: "person/{person_id}"
    },
    changes: {
      requestType: "GET",
      params: {
        person_id: {
          isRequired: true
        },
        end_date: {
          isRequired: false
        },
        page: {
          isRequired: false
        },
        start_date: {
          isRequired: false
        }
      },
      endpointPath: "person/{person_id}/changes"
    },
    movieCredits: {
      requestType: "GET",
      params: {
        person_id: {
          isRequired: true
        },
        language: {
          isRequired: false
        }
      },
      endpointPath: "person/{person_id}/movie_credits"
    },
    tvCredits: {
      requestType: "GET",
      params: {
        person_id: {
          isRequired: true
        },
        language: {
          isRequired: false
        }
      },
      endpointPath: "person/{person_id}/tv_credits"
    },
    combinedCredits: {
      requestType: "GET",
      params: {
        person_id: {
          isRequired: true
        },
        language: {
          isRequired: false
        }
      },
      endpointPath: "person/{person_id}/combined_credits"
    },
    externalIDs: {
      requestType: "GET",
      params: {
        person_id: {
          isRequired: true
        },
        language: {
          isRequired: false
        }
      },
      endpointPath: "person/{person_id}/external_ids"
    },
    images: {
      requestType: "GET",
      params: {
        person_id: {
          isRequired: true
        }
      },
      endpointPath: "person/{person_id}/images"
    },
    taggedImages: {
      requestType: "GET",
      params: {
        person_id: {
          isRequired: true
        },
        language: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "person/{person_id}/tagged_images"
    },
    translations: {
      requestType: "GET",
      params: {
        person_id: {
          isRequired: true
        },
        language: {
          isRequired: false
        }
      },
      endpointPath: "person/{person_id}/translations"
    },
    latest: {
      requestType: "GET",
      params: {
        language: {
          isRequired: false
        }
      },
      endpointPath: "person/latest"
    },
    popular: {
      requestType: "GET",
      params: {
        language: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "person/popular"
    }
  },
  review: {
    details: {
      requestType: "GET",
      params: {
        review_id: {
          isRequired: true
        }
      },
      endpointPath: "review/{review_id}"
    }
  },
  search: {
    companies: {
      requestType: "GET",
      params: {
        query: {
          isRequired: true
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "search/company"
    },
    collections: {
      requestType: "GET",
      params: {
        query: {
          isRequired: true
        },
        language: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "search/collection"
    },
    keywords: {
      requestType: "GET",
      params: {
        query: {
          isRequired: true
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "search/keyword"
    },
    movies: {
      requestType: "GET",
      params: {
        query: {
          isRequired: true
        },
        page: {
          isRequired: false
        },
        include_adult: {
          isRequired: false
        },
        region: {
          isRequired: false
        },
        year: {
          isRequired: false
        },
        primary_release_date: {
          isRequired: false
        }
      },
      endpointPath: "search/movie"
    },
    multiSearch: {
      requestType: "GET",
      params: {
        query: {
          isRequired: true
        },
        language: {
          isRequired: false
        },
        page: {
          isRequired: false
        },
        include_adult: {
          isRequired: false
        },
        region: {
          isRequired: false
        }
      },
      endpointPath: "search/multi"
    },
    searchPerson: {
      requestType: "GET",
      params: {
        query: {
          isRequired: true
        },
        page: {
          isRequired: false
        },
        include_adult: {
          isRequired: false
        },
        region: {
          isRequired: false
        }
      },
      endpointPath: "search/person"
    },
    searchTV: {
      requestType: "GET",
      params: {
        query: {
          isRequired: true
        },
        language: {
          isRequired: false
        },
        page: {
          isRequired: false
        },
        include_adult: {
          isRequired: false
        },
        first_air_date_year: {
          isRequired: false
        }
      },
      endpointPath: "search/tv"
    }
  },
}

module.exports = endpoints

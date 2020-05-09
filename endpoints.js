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
    },
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
    movie: {
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
    },
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
    },
  }
}

module.exports = endpoints

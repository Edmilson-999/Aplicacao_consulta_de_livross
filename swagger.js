const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Livros e Autores',
      version: '1.0.0',
      description: 'Documentação completa da API para gestão de livros e autores',
      contact: {
        name: 'Edmilson Alves',
        email: 'edmilson18@gmail.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor da API'
      }
    ],
    tags: [
      {
        name: 'Authors',
        description: 'Operações com autores'
      },
      {
        name: 'Books',
        description: 'Operações com livros'
      }
    ],
    paths: {
      '/authors': {
        get: {
          tags: ['Authors'],
          summary: 'Listar todos os autores',
          responses: {
            200: {
              description: 'Lista de autores',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Author'
                    }
                  }
                }
              }
            }
          }
        },
        post: {
          tags: ['Authors'],
          summary: 'Criar novo autor',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Author'
                }
              }
            }
          },
          responses: {
            201: {
              description: 'Autor criado com sucesso'
            }
          }
        }
      },
      '/authors/{id}': {
        get: {
          tags: ['Authors'],
          summary: 'Obter autor por ID',
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              schema: {
                type: 'integer'
              }
            }
          ],
          responses: {
            200: {
              description: 'Detalhes do autor',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Author'
                  }
                }
              }
            }
          }
        }
      },
      '/books': {
        get: {
          tags: ['Books'],
          summary: 'Listar todos os livros',
          responses: {
            200: {
              description: 'Lista de livros',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Book'
                    }
                  }
                }
              }
            }
          }
        },
        post: {
          tags: ['Books'],
          summary: 'Criar novo livro',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Book'
                }
              }
            }
          },
          responses: {
            201: {
              description: 'Livro criado com sucesso'
            }
          }
        }
      },
      '/books/search': {
        get: {
          tags: ['Books'],
          summary: 'Buscar livros por título',
          parameters: [
            {
              name: 'title',
              in: 'query',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'Termo para busca no título'
            }
          ],
          responses: {
            200: {
              description: 'Lista de livros encontrados',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Book'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    components: {
      schemas: {
        Author: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            name: {
              type: 'string',
              example: 'J.K. Rowling'
            },
            bio: {
              type: 'string',
              example: 'Autora da série Harry Potter'
            }
          }
        },
        Book: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            title: {
              type: 'string',
              example: 'Harry Potter e a Pedra Filosofal'
            },
            isbn: {
              type: 'string',
              example: '9788532530799'
            },
            authorId: {
              type: 'integer',
              example: 1
            }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js', './controllers/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
    customSiteTitle: "API de Livros e Autores",
    customCss: '.swagger-ui .topbar { display: none }'
  }));
};